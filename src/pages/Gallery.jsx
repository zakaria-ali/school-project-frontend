import { useState, useEffect } from 'react';
import { GALLERY_CONFIG } from '../config/gallery';
 import galleryIcon from '../../public/images/galleryIcon.png';
import gallerybg from '../../public/images/gallery.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const galleryCategories = [
    {
      id: 'all',
      name: 'الكل',
      icon: 'fa-images'
    },
    {
      id: 'classes',
      name: 'الفصول الدراسية',
      icon: 'fa-chalkboard'
    },
    {
      id: 'events',
      name: 'الفعاليات',
      icon: 'fa-solid fa-calendar-days'
    },
    {
      id: 'computer-male',
      name: 'الحاسوب والشبكات / ذكور',
      icon: 'fa-computer'
    },
    {
      id: 'computer-female',
      name: 'الحاسوب والشبكات / إناث',
      icon: 'fa-computer'
    },
    {
      id: 'electric',
      name: 'كهرباء استعمال',
      icon: 'fa-bolt'
    },
    {
      id: 'automation',
      name: 'أوتوميكاترونكس',
      icon: 'fa-robot'
    },
    {
      id: 'beauty',
      name: 'تجميل',
      icon: 'fa-spa'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        // أولاً: محاولة جلب من localStorage (الصور المضافة محلياً)
        const localImages = localStorage.getItem('gallery_images');
        if (localImages) {
          try {
            const parsed = JSON.parse(localImages);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setImages(parsed);
              setLoading(false);
              return;
            }
          } catch (e) {
            console.error('خطأ في قراءة localStorage:', e);
          }
        }

        // ثانياً: محاولة جلب من API
        if (GALLERY_CONFIG.USE_API && GALLERY_CONFIG.API_URL) {
          // إعداد headers للطلب
          const headers = {
            'Content-Type': 'application/json',
          };
          
          // إضافة API Key إذا كان موجوداً (مطلوب لـ JSONBin.io)
          if (GALLERY_CONFIG.API_KEY) {
            headers['X-Master-Key'] = GALLERY_CONFIG.API_KEY;
            // لـ JSONBin.io v3
            headers['X-Access-Key'] = GALLERY_CONFIG.API_KEY;
          }
          
          const response = await fetch(GALLERY_CONFIG.API_URL, {
            method: 'GET',
            headers: headers
          });
          
          if (!response.ok) {
            throw new Error(`فشل في جلب الصور من API: ${response.status}`);
          }

          const data = await response.json();
          
          // دعم تنسيقات مختلفة للـ API response
          // JSONBin.io v3: { record: { images: [...] } }
          // Firebase: { images: [...] }
          // Supabase: [...]
          // GitHub/JSON محلي: { images: [...] } أو [...]
          let fetchedImages = [];
          
          if (data.record) {
            // JSONBin.io v3 format
            fetchedImages = data.record.images || data.record || [];
          } else if (data.images) {
            // Firebase أو تنسيق مخصص
            fetchedImages = data.images;
          } else if (Array.isArray(data)) {
            // Supabase أو مصفوفة مباشرة
            fetchedImages = data;
          } else {
            fetchedImages = [];
          }
          
          if (Array.isArray(fetchedImages) && fetchedImages.length > 0) {
            setImages(fetchedImages);
          } else {
            throw new Error('لا توجد صور في API');
          }
        } else {
          // استخدام الصور الافتراضية
          setImages(GALLERY_CONFIG.FALLBACK_IMAGES);
        }
      } catch (err) {
        console.error('خطأ في جلب الصور:', err);
        setError(err.message);
        // استخدام الصور الافتراضية في حالة الخطأ
        setImages(GALLERY_CONFIG.FALLBACK_IMAGES);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    // الاستماع لتحديثات المعرض
    const handleGalleryUpdate = () => {
      fetchImages();
    };
    window.addEventListener('gallery-updated', handleGalleryUpdate);

    return () => {
      window.removeEventListener('gallery-updated', handleGalleryUpdate);
    };
  }, []);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <header 
        className="hero relative overflow-hidden"
        style={{
          backgroundImage: `url(${gallerybg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '50vh'
        }}
      >
        <div className="hero-content text-center text-light">
          <div className="mb-4">
            <img 
              src={galleryIcon} 
              alt="شعار المعرض" 
              className="h-16 md:h-24 lg:h-28 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">معرض الصور</h1>
          <p className="text-lg md:text-xl text-gray-200">
            صور من أجواء المدرسة وأنشطتها ومرافقها
          </p>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <i className={`fa-solid ${category.icon} me-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
              <p className="text-gray-600 text-lg">جاري تحميل الصور...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-lg mb-6">
              <p className="text-yellow-800">
                <i className="fa-solid fa-exclamation-triangle me-2"></i>
                {error} - يتم عرض الصور الافتراضية
              </p>
            </div>
          )}

          {/* Image Grid */}
          {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.length > 0 ? (
                filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group feature-card"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <i className="fa-solid fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <i className="fa-solid fa-images text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-600 text-lg">لا توجد صور متاحة حالياً</p>
                </div>
              )}
          </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors z-10"
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <p className="text-white text-xl font-bold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

