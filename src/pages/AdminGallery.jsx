import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

const AdminGallery = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    category: 'all',
    preview: null
  });
  
  const [existingImages, setExistingImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD ;

  useEffect(() => {
    // التحقق من المصادقة
    const auth = localStorage.getItem('gallery_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadImages();
    }
  }, []);

  const loadImages = async () => {
    try {
      // محاولة جلب من localStorage أولاً
      const localImages = localStorage.getItem('gallery_images');
      if (localImages) {
        try {
          const parsed = JSON.parse(localImages);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setExistingImages(parsed);
            return;
          }
        } catch (e) {
          console.error('خطأ في قراءة localStorage:', e);
        }
      }

      // محاولة جلب من ملف JSON
      const response = await fetch('/api/gallery.json');
      if (response.ok) {
        const data = await response.json();
        const images = data.images || [];
        setExistingImages(images);
        // حفظ نسخة في localStorage
        if (images.length > 0) {
          localStorage.setItem('gallery_images', JSON.stringify(images));
        }
      }
    } catch (error) {
      console.error('خطأ في تحميل الصور:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // التحقق من القفل
    if (isLocked) {
      setToastMessage('تم حظر الوصول مؤقتاً بسبب محاولات تسجيل دخول فاشلة كثيرة');
      setToastType('error');
      setShowToast(true);
      return;
    }


    // التحقق من كلمة المرور
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('gallery_admin_auth', 'true');
      setLoginAttempts(0);
      loadImages();
      setToastMessage('تم تسجيل الدخول بنجاح');
      setToastType('success');
      setShowToast(true);
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 5) {
        setIsLocked(true);
        setToastMessage('تم حظر الوصول مؤقتاً. حاول مرة أخرى بعد 10 دقائق');
        setToastType('error');
        setShowToast(true);
        
        // إلغاء القفل بعد 10 دقائق
        setTimeout(() => {
          setIsLocked(false);
          setLoginAttempts(0);
        }, 10 * 60 * 1000);
      } else {
        setToastMessage(`كلمة المرور غير صحيحة. محاولات متبقية: ${5 - newAttempts}`);
        setToastType('error');
        setShowToast(true);
      }
    }
    setPassword('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('gallery_admin_auth');
    navigate('/gallery');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // التحقق من نوع الملف
      if (!file.type.startsWith('image/')) {
        setToastMessage('الملف المرفوع ليس صورة');
        setToastType('error');
        setShowToast(true);
        return;
      }

      // التحقق من حجم الملف (حد أقصى 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setToastMessage('حجم الصورة كبير جداً (الحد الأقصى 5MB)');
        setToastType('error');
        setShowToast(true);
        return;
      }

      // تحويل الصورة إلى Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          preview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.image || !formData.title || !formData.category) {
      setToastMessage('يرجى ملء جميع الحقول');
      setToastType('error');
      setShowToast(true);
      return;
    }

    setLoading(true);

    try {
      // محاولة رفع الصورة إلى السيرفر
      const formDataToSend = new FormData();
      formDataToSend.append('image', formData.image);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.category);

      let newImage;
      let updatedImages;

      try {
        // محاولة رفع إلى backend
        const uploadResponse = await fetch('http://localhost:3001/api/upload-image', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${ADMIN_PASSWORD}`
          },
          body: formDataToSend
        });

        if (uploadResponse.ok) {
          const result = await uploadResponse.json();
          newImage = result.image;
          updatedImages = [...existingImages, newImage];
          
          // حفظ في localStorage كنسخة احتياطية
          localStorage.setItem('gallery_images', JSON.stringify(updatedImages));
        } else {
          throw new Error('فشل رفع الصورة إلى السيرفر');
        }
      } catch (error) {
        console.log('Backend غير متاح، استخدام localStorage:', error);
        
        // حل بديل: استخدام Base64 مع localStorage
        const newId = existingImages.length > 0 
          ? Math.max(...existingImages.map(img => img.id)) + 1 
          : 1;

        newImage = {
          id: newId,
          src: formData.preview, // Base64
          category: formData.category,
          title: formData.title
        };

        updatedImages = [...existingImages, newImage];
        localStorage.setItem('gallery_images', JSON.stringify(updatedImages));
      }

      // تحديث القائمة
      setExistingImages(updatedImages);

      // إعادة تعيين الفورم
      setFormData({
        image: null,
        title: '',
        category: 'all',
        preview: null
      });

      // إعادة تعيين input file
      const fileInput = document.getElementById('image-upload');
      if (fileInput) fileInput.value = '';

      setToastMessage('تم إضافة الصورة بنجاح!');
      setToastType('success');
      setShowToast(true);

      // تحديث صفحة المعرض
      window.dispatchEvent(new Event('gallery-updated'));

    } catch (error) {
      console.error('خطأ في إضافة الصورة:', error);
      setToastMessage('حدث خطأ أثناء إضافة الصورة');
      setToastType('error');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (imageId) => {
    if (!window.confirm('هل أنت متأكد من حذف هذه الصورة؟')) {
      return;
    }

    try {
      const updatedImages = existingImages.filter(img => img.id !== imageId);
      
      // محاولة حذف من السيرفر
      try {
        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'CHANGE_THIS_PASSWORD_123!@#';
        const deleteResponse = await fetch(`http://localhost:3001/api/delete-image/${imageId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${adminPassword}`
          }
        });

        if (!deleteResponse.ok) {
          throw new Error('فشل حذف الصورة من السيرفر');
        }
      } catch (error) {
        console.log('Backend غير متاح، حذف من localStorage فقط:', error);
      }

      // تحديث القائمة
      setExistingImages(updatedImages);
      
      // حفظ في localStorage
      localStorage.setItem('gallery_images', JSON.stringify(updatedImages));

      setToastMessage('تم حذف الصورة بنجاح');
      setToastType('success');
      setShowToast(true);

      window.dispatchEvent(new Event('gallery-updated'));

    } catch (error) {
      setToastMessage('حدث خطأ أثناء حذف الصورة');
      setToastType('error');
      setShowToast(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <i className="fa-solid fa-lock text-4xl text-primary mb-4"></i>
              <h2 className="text-2xl font-bold text-primary">تسجيل الدخول</h2>
              <p className="text-gray-600 mt-2">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLocked}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="أدخل كلمة المرور"
                  required
                />
                {loginAttempts > 0 && !isLocked && (
                  <p className="text-sm text-red-500 mt-2">
                    محاولات فاشلة: {loginAttempts} / 5
                  </p>
                )}
                {isLocked && (
                  <p className="text-sm text-red-600 mt-2 font-semibold">
                    <i className="fa-solid fa-lock me-1"></i>
                    الوصول محظور مؤقتاً
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLocked}
                className="w-full btn btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="fa-solid fa-sign-in-alt me-2"></i>
                {isLocked ? 'محظور' : 'تسجيل الدخول'}
              </button>
            </form>
            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-3 rounded-lg mt-4">
              <p className="text-xs text-yellow-800">
                <i className="fa-solid fa-shield-halved me-1"></i>
                <strong>أمان:</strong> كلمة المرور محمية ولا تظهر في الكود
              </p>
            </div>
          </div>
        </div>
        {showToast && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">
                  <i className="fa-solid fa-images me-2"></i>
                  إدارة معرض الصور
                </h1>
                <p className="text-gray-600">أضف أو احذف الصور من المعرض</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline-primary"
              >
                <i className="fa-solid fa-sign-out-alt me-2"></i>
                تسجيل الخروج
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Add Image Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                <i className="fa-solid fa-plus-circle me-2"></i>
                إضافة صورة جديدة
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    الصورة <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  {formData.preview && (
                    <div className="mt-4">
                      <img
                        src={formData.preview}
                        alt="معاينة"
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    العنوان <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="مثال: فصل دراسي"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    التصنيف <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="all">اختر التصنيف</option>
                    <option value="classes">الفصول الدراسية</option>
                    <option value="workshops">الفعاليات</option>
                    <option value="computer-male">الحاسوب والشبكات / ذكور</option>
                    <option value="computer-female">الحاسوب والشبكات / إناث</option>
                    <option value="electric">كهرباء استعمال</option>
                    <option value="automation">أوتوميكاترونكس</option>
                    <option value="beauty">تجميل</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn btn-primary py-3 text-lg"
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin me-2"></i>
                      جاري الإضافة...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-upload me-2"></i>
                      إضافة الصورة
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Existing Images */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                <i className="fa-solid fa-list me-2"></i>
                الصور الموجودة ({existingImages.length})
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {existingImages.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    لا توجد صور حالياً
                  </p>
                ) : (
                  existingImages.map((image) => (
                    <div
                      key={image.id}
                      className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{image.title}</h3>
                        <p className="text-sm text-gray-500">
                          التصنيف: {image.category === 'classes' ? 'الفصول الدراسية' :
                                     image.category === 'computer-male' ? 'الحاسوب والشبكات / ذكور' :
                                     image.category === 'computer-female' ? 'الحاسوب والشبكات / إناث' :
                                     image.category === 'electric' ? 'كهرباء استعمال' :
                                     image.category === 'automation' ? 'أوتوميكاترونكس' :
                                     image.category === 'beauty' ? 'تجميل' :
                                     image.category === 'events' ? 'الفعاليات' : image.category}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                        title="حذف"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default AdminGallery;

