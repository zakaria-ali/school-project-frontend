import { useState } from 'react';
import emailjs from "@emailjs/browser";
import Toast from '../components/Toast';
import contactIcon from '../../public/images/contactIcon.png';
import contactbg from '../../public/images/contact.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'الموضوع مطلوب';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToastMessage('يرجى ملء جميع الحقول المطلوبة بشكل صحيح');
      setToastType('error');
      setShowToast(true);
      return;
    }

    // ---------------------------
    // EMAILJS INTEGRATION
    // ---------------------------
    emailjs.send(
      "service_9t741f4",
      "template_2fvkq3k",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "gE5QNjK46bAHVHRpy"
    )
    .then(() => {
        setToastMessage(
          'شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسنرد عليك قريباً على البريد الإلكتروني: ' 
          + formData.email
        );
        setToastType('success');
        setShowToast(true);

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
    })
    .catch(() => {
        setToastMessage('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
        setToastType('error');
        setShowToast(true);
    });
  };

  return (
    <>
      {/* Hero Section */}
      <header 
        className="hero"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '50vh'
        }}
      >
        <div className="hero-content text-center text-light">
          <div className="mb-4">
            <img 
              src={contactIcon} 
              alt="شعار تواصل معنا" 
              className="h-16 md:h-24 lg:h-28 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-lg md:text-xl text-gray-200">
            نحن هنا للإجابة على استفساراتك ومساعدتك
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">معلومات التواصل</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">العنوان</h3>
                    <p className="text-gray-600">فلسطين - قباطية - اسكان أبو الرب</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                    <p className="text-gray-600" style={{ direction: 'ltr'}}>+972 56 250 3457</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">najib_jaber@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">فيسبوك</h3>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61566083144882" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      صفحتنا على فيسبوك
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">موقع المدرسة</h3>
                <div className="bg-gray-200 rounded-lg h-64 overflow-hidden mb-2">  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2141.5308101791156!2d35.27786554826466!3d32.40205190216875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2s!4v1765091973195!5m2!1sar!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع المدرسة"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="أدخل اسمك الكامل"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+970 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    الموضوع <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="admission">التسجيل والقبول</option>
                    <option value="specialties">التخصصات</option>
                    <option value="apprenticeship">التلمذة المهنية</option>
                    <option value="competency">الكفاءة المهنية</option>
                    <option value="general">استفسار عام</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    الرسالة <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="اكتب رسالتك هنا..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary py-3 text-lg"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-12 bg-gray-50 p-8 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">ساعات العمل</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <i className="fa-solid fa-clock fa-2x text-accent mb-3"></i>
                <h3 className="font-bold text-lg mb-2">أيام الأسبوع</h3>
                <p className="text-gray-600">الأحد - الأربعاء</p>
                <p className="text-gray-600 font-semibold">8:00 صباحاً - 1:00 ظهراً</p>
              </div>
              <div className="text-center">
                <i className="fa-solid fa-calendar-days fa-2x text-accent mb-3"></i>
                <h3 className="font-bold text-lg mb-2">عطلة نهاية الأسبوع</h3>
                <p className="text-gray-600">الخميس - السبت</p>
                <p className="text-gray-600 font-semibold">مغلق</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Contact;
