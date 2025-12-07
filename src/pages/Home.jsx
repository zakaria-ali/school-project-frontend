import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Counter from '../components/Counter';
import { GALLERY_CONFIG } from '../config/gallery';
import BlurText from "../components/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Home = () => {
  const [latestImages, setLatestImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [galleryError, setGalleryError] = useState(null);

  const sliceLatest = (images) => images.slice(-4).reverse();

  useEffect(() => {
    const fetchLatestImages = async () => {
      setGalleryLoading(true);
      setGalleryError(null);

      try {
        // 1) حاول استخدام الصور من localStorage
        const localImages = localStorage.getItem('gallery_images');
        if (localImages) {
          try {
            const parsed = JSON.parse(localImages);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setLatestImages(sliceLatest(parsed));
              setGalleryLoading(false);
              return;
            }
          } catch (err) {
            console.error('خطأ في قراءة صور localStorage:', err);
          }
        }

        // 2) جلب من API (نفس إعدادات صفحة المعرض)
        if (GALLERY_CONFIG.USE_API && GALLERY_CONFIG.API_URL) {
          const headers = {
            'Content-Type': 'application/json',
          };

          if (GALLERY_CONFIG.API_KEY) {
            headers['X-Master-Key'] = GALLERY_CONFIG.API_KEY;
            headers['X-Access-Key'] = GALLERY_CONFIG.API_KEY;
          }

          const response = await fetch(GALLERY_CONFIG.API_URL, {
            method: 'GET',
            headers,
          });

          if (!response.ok) {
            throw new Error(`فشل في جلب الصور: ${response.status}`);
          }

          const data = await response.json();
          let fetchedImages = [];

          if (data.record) {
            fetchedImages = data.record.images || data.record || [];
          } else if (data.images) {
            fetchedImages = data.images;
          } else if (Array.isArray(data)) {
            fetchedImages = data;
          }

          if (Array.isArray(fetchedImages) && fetchedImages.length > 0) {
            setLatestImages(sliceLatest(fetchedImages));
            setGalleryLoading(false);
            return;
          }
        }

        // 3) استخدام الصور الافتراضية
        setLatestImages(sliceLatest(GALLERY_CONFIG.FALLBACK_IMAGES));
      } catch (error) {
        console.error('خطأ في جلب صور المعرض:', error);
        setGalleryError(error.message);
        setLatestImages(sliceLatest(GALLERY_CONFIG.FALLBACK_IMAGES));
      } finally {
        setGalleryLoading(false);
      }
    };

    fetchLatestImages();
    const handleGalleryUpdate = () => fetchLatestImages();
    window.addEventListener('gallery-updated', handleGalleryUpdate);

    return () => window.removeEventListener('gallery-updated', handleGalleryUpdate);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        <div className="hero-content text-center text-light pb-4">
          <div className="animate-bounce-in mb-6">
            <img 
              src="/logo.png" 
              alt="شعار المدرسة" 
              className="h-20 md:h-24 lg:h-32 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-center flex justify-center w-full">
  <BlurText
  text="  مرحبًا بكم في مدرسة محمود خليل أبو الرب المهنية"
    delay={50}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
  />
</div>
          </div>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-200 animate-slide-up px-4">
            مدرسة مختلطة — منارة التعليم الصناعي والمهني في فلسطين<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            إعداد جيل مبدع من الذكور والإناث يمتلك المهارات التقنية والعملية لخدمة مجتمعه.
          </p>
          <Link 
            to="/about" 
            className="btn btn-accent px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg mt-4 inline-block ripple animate-scale-in"
          >
            <i className="fa-solid fa-arrow-left me-2 icon-rotate"></i>
            <span className="hidden sm:inline">تعرف أكثر على مدرستنا</span>
            <span className="sm:hidden">تعرف أكثر</span>
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <h2 className="section-title">عن المدرسة</h2>
          </ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ScrollAnimation direction="right" delay={100}>
              <div className="md:w-1/2">
              <p className="text-gray-600 mb-3 text-base sm:text-lg">
                تأسست <strong>مدرسة محمود خليل أبو الرب المهنية</strong> لتكون منارة للتعليم الصناعي والمهني في فلسطين. <strong>مدرسة مختلطة</strong> تضم تخصصات متنوعة للذكور والإناث تواكب تطورات سوق العمل.
              </p>
              <p className="text-gray-600 mb-3 text-base sm:text-lg">
                للذكور: صيانة الحاسوب والشبكات، كهرباء استعمال، وأوتوميكاترونكس. للإناث: صيانة الحاسوب والتجميل. كما تقدم المدرسة برامج <strong>التلمذة المهنية</strong> و<strong>الكفاءة المهنية</strong> لتأهيل الطلاب لسوق العمل.
              </p>
              <p className="text-gray-600 mb-3 text-base sm:text-lg">
                تهدف المدرسة إلى إعداد جيل مبدع من الذكور والإناث يمتلك المهارات العملية والتقنية التي تتيح له الالتحاق بالجامعة أو العمل في المجالات الصناعية والمهنية المختلفة.
              </p>
              <Link to="/industrial" className="btn btn-primary mt-2 inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                <i className="fa-solid fa-arrow-left me-2"></i>
                <span className="hidden sm:inline">اعرف أكثر عن الفرع الصناعي</span>
                <span className="sm:hidden">اعرف أكثر</span>
              </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={200}>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80" 
                  className="w-full rounded-lg shadow-lg card-hover" 
                  alt="المدرسة الصناعية"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">إحصائيات المدرسة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 icon-pulse animate-float">
                  <i className="fa-solid fa-users fa-3x text-accent"></i>
                </div>
                <div className="text-4xl font-bold mb-2">
                  <Counter end="500+" duration={2000} />
                </div>
                <div className="text-gray-200">طالب وطالبة</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 icon-pulse animate-float" style={{ animationDelay: '0.5s' }}>
                  <i className="fa-solid fa-graduation-cap fa-3x text-accent"></i>
                </div>
                <div className="text-4xl font-bold mb-2">
                  <Counter end="200+" duration={2000} />
                </div>
                <div className="text-gray-200">خريج</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 icon-pulse animate-float" style={{ animationDelay: '1s' }}>
                  <i className="fa-solid fa-book fa-3x text-accent"></i>
                </div>
                <div className="text-4xl font-bold mb-2">
                  <Counter end="5" duration={1500} />
                </div>
                <div className="text-gray-200">تخصص</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 icon-pulse animate-float" style={{ animationDelay: '1.5s' }}>
                  <i className="fa-solid fa-chart-line fa-3x text-accent"></i>
                </div>
                <div className="text-4xl font-bold mb-2">
                  <Counter end="95%" duration={2000} />
                </div>
                <div className="text-gray-200">معدل النجاح</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">التخصصات المتاحة</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            مدرسة مختلطة تقدم تخصصات متنوعة للذكور والإناث
          </p>
          
          {/* Male Specializations */}
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">تخصصات الذكور</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white feature-card p-6 text-center h-full rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
                alt="صيانة الحاسوب"
              />
              <h5 className="mb-3 text-xl font-semibold">صيانة أجهزة الحاسوب والشبكات</h5>
              <p className="text-gray-600 text-sm mb-3">
                تعلم مهارات الحاسوب، تركيب الشبكات، والبرمجة.
              </p>
              <Link to="/specialty/computer-male" className="btn btn-sm btn-outline-primary text-sm px-4 py-2">
                عرض التفاصيل
              </Link>
            </div>
            <div className="bg-white feature-card p-6 text-center h-full rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80" 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
                alt="كهرباء استعمال"
              />
              <h5 className="mb-3 text-xl font-semibold">كهرباء استعمال</h5>
              <p className="text-gray-600 text-sm mb-3">
                تعلم التركيبات الكهربائية، التمديدات، والسلامة المهنية.
              </p>
              <Link to="/specialty/electric" className="btn btn-sm btn-outline-primary text-sm px-4 py-2">
                عرض التفاصيل
              </Link>
            </div>
            <div className="bg-white feature-card p-6 text-center h-full rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
                alt="أوتوميكاترونكس"
              />
              <h5 className="mb-3 text-xl font-semibold">أوتوميكاترونكس</h5>
              <p className="text-gray-600 text-sm mb-3">
                مزيج بين الميكانيك والإلكترونيات وأنظمة التحكم.
              </p>
              <Link to="/specialty/automation" className="btn btn-sm btn-outline-primary text-sm px-4 py-2">
                عرض التفاصيل
              </Link>
            </div>
          </div>

          {/* Female Specializations */}
          <h3 className="text-2xl font-bold text-primary mb-6 text-center mt-12">تخصصات الإناث</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white feature-card p-6 text-center h-full rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
                alt="صيانة الحاسوب للإناث"
              />
              <h5 className="mb-3 text-xl font-semibold">صيانة أجهزة الحاسوب والشبكات</h5>
              <p className="text-gray-600 text-sm mb-3">
                تخصص مخصص للإناث - تعلم مهارات الحاسوب، تركيب الشبكات، والبرمجة.
              </p>
              <Link to="/specialty/computer-female" className="btn btn-sm btn-outline-primary text-sm px-4 py-2">
                عرض التفاصيل
              </Link>
            </div>
            <div className="bg-white feature-card p-6 text-center h-full rounded-xl shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
                alt="التجميل"
              />
              <h5 className="mb-3 text-xl font-semibold">التجميل</h5>
              <p className="text-gray-600 text-sm mb-3">
                تخصص مخصص للإناث - تعلم فنون التجميل والعناية بالبشرة والشعر.
              </p>
              <Link to="/specialty/beauty" className="btn btn-sm btn-outline-primary text-sm px-4 py-2">
                عرض التفاصيل
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vocational Programs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">البرامج المهنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl shadow-xl feature-card">
              <i className="fa-solid fa-user-graduate fa-3x mb-4 text-accent"></i>
              <h3 className="text-2xl font-bold mb-4">مسار التلمذة المهنية</h3>
              <p className="mb-4 text-gray-100">
                نظام تعليمي يجمع بين التعليم النظري والتدريب العملي في بيئة العمل الحقيقية، مما يمكن الطلاب من اكتساب المهارات والخبرات اللازمة لسوق العمل.
              </p>
              <Link to="/apprenticeship" className="btn btn-accent inline-block px-6 py-3">
                <i className="fa-solid fa-arrow-left me-2"></i>
                تعرف أكثر
              </Link>
            </div>
            <div className="bg-gradient-to-br from-accent to-orange-600 text-white p-8 rounded-2xl shadow-xl feature-card">
              <i className="fa-solid fa-certificate fa-3x mb-4 text-white"></i>
              <h3 className="text-2xl font-bold mb-4">الكفاءة المهنية</h3>
              <p className="mb-4 text-gray-100">
                برنامج يؤهل الطلاب للحصول على شهادات الكفاءة المهنية التي تثبت مستوى المهارة والقدرة في مجال مهني معين، مما يؤهلهم لأداء مهام محددة بكفاءة وفعالية.
              </p>
              <Link to="/competency" className="btn bg-white text-accent hover:bg-gray-100 inline-block px-6 py-3">
                <i className="fa-solid fa-arrow-left me-2"></i>
                تعرف أكثر
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">من أجواء المدرسة</h2>
          <div className="min-h-[120px]">
            {galleryLoading ? (
              <div className="text-center py-6 text-gray-500">
                <i className="fa-solid fa-spinner fa-spin me-2"></i>
                جاري تحميل أحدث الصور...
              </div>
            ) : latestImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {latestImages.map((image) => (
                  <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md group">
                    <img
                      src={image.src}
                      alt={image.title || 'من أجواء المدرسة'}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <p className="text-white text-sm font-semibold truncate w-full text-center">
                        {image.title || 'من أجواء المدرسة'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500">
                <i className="fa-solid fa-image me-2"></i>
                لا توجد صور متاحة حالياً
              </div>
            )}
            {galleryError && (
              <p className="text-center text-sm text-yellow-600 mt-3">
                <i className="fa-solid fa-circle-exclamation me-1"></i>
                {galleryError} – يتم عرض الصور الافتراضية
              </p>
            )}
          </div>
          <div className="text-center mt-6">
            <Link to="/gallery" className="btn btn-outline-primary px-6 py-3">
              <i className="fa-solid fa-images me-2"></i>
              مشاهدة المزيد من الصور
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
