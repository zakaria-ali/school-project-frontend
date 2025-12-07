import { Link } from 'react-router-dom';
 import specialtiesIcon from '../../public/images/specialtiesIcon.png';
import specialtiesbg from '../../public/images/specialties.jpeg';
import BlurText from "../components/BlurText";
import ScrollAnimation from "../components/ScrollAnimation";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Specialties = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${specialtiesbg})`,
          minHeight: '50vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        <div className="hero-content text-center text-light pb-4">
          <div className="animate-bounce-in mb-6">
            <img 
              src={specialtiesIcon} 
              alt="شعار التخصصات" 
              className="h-20 md:h-24 lg:h-32 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-center flex justify-center w-full">
  <BlurText
    text="التخصصات المتاحة"
    delay={70}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
  />
</div>

<div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full animate-scale-in"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-200 animate-slide-up px-4">
          مدرسة مختلطة تقدم تخصصات متنوعة للذكور والإناث
          </p>
        </div>
      </header>
      

      {/* Male Specializations */}
      <section className="py-12" id="male-specialties">
        <div className="container mx-auto px-4">
        <ScrollAnimation>

          <h2 className="section-title">تخصصات الذكور</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Computer Maintenance */}
            <ScrollAnimation>
            <div id="computer" className="bg-white p-6 rounded-xl shadow-lg feature-card text-center md:text-right">
              <i className="fa-solid fa-computer fa-3x mb-4 text-accent"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">صيانة أجهزة الحاسوب والشبكات</h3>
              <p className="text-gray-600 mb-4">
                يهدف هذا التخصص إلى تأهيل الطلاب في مجال صيانة أجهزة الحاسوب وتركيب الشبكات وأنظمة التشغيل .
              </p>
              <h4 className="font-bold mb-2 text-primary">المهارات المكتسبة:</h4>
              <ul className="list-disc list-inside md:list-outside text-gray-600 mb-4 space-y-1 text-center md:text-right">
                <li>صيانة وتركيب أجهزة الحاسوب</li>
                <li>تركيب وصيانة الشبكات</li>
                <li>إدارة أنظمة التشغيل</li>
                <li>حل المشاكل التقنية</li>
                <li>الأمان السيبراني</li>
              </ul>
              <h4 className="font-bold mb-2 text-primary">فرص العمل:</h4>
              <p className="text-gray-600 mb-4">
                فني حاسوب، فني شبكات، مسؤول أنظمة، دعم فني، أو الالتحاق بالجامعات التقنية.
              </p>
              <Link to="/specialty/computer-male" className="btn btn-outline-primary inline-block p-4 ">
                عرض التفاصيل الكاملة
              </Link>
            </div>
            </ScrollAnimation>

            {/* Electrical */}
            <ScrollAnimation>
            <div id="electric" className="bg-white p-6 rounded-xl shadow-lg feature-card text-center md:text-right">
              <i className="fa-solid fa-bolt fa-3x mb-4 text-accent"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">كهرباء استعمال</h3>
              <p className="text-gray-600 mb-4">
                يهدف هذا التخصص إلى تأهيل الطلاب في مجال التركيبات الكهربائية والتمديدات وسلامة العمل.
              </p>
              <h4 className="font-bold mb-2 text-primary">المهارات المكتسبة:</h4>
              <ul className="list-disc list-inside md:list-outside text-gray-600 mb-4 space-y-1 text-center md:text-right">
                <li>التركيبات الكهربائية المنزلية والصناعية</li>
                <li>قراءة المخططات الكهربائية</li>
                <li>التمديدات الكهربائية</li>
                <li>سلامة العمل الكهربائي</li>
                <li>صيانة الأجهزة الكهربائية</li>
              </ul>
              <h4 className="font-bold mb-2 text-primary">فرص العمل:</h4>
              <p className="text-gray-600 mb-4">
                كهربائي، فني تركيبات، مشرف كهرباء، أو الالتحاق بالجامعات الهندسية.
              </p>
              <Link to="/specialty/electric" className="btn btn-outline-primary inline-block p-4 ">
                عرض التفاصيل الكاملة
              </Link>
            </div>
            </ScrollAnimation>

            {/* Automation */}
            <ScrollAnimation>
            <div id="auto" className="bg-white p-6 rounded-xl shadow-lg feature-card text-center md:text-right">
              <i className="fa-solid fa-cogs fa-3x mb-4 text-accent"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">أوتوميكاترونكس</h3>
              <p className="text-gray-600 mb-4">
                يدمج هذا التخصص بين الميكانيك والإلكترونيات وأنظمة التحكم الآلي.
              </p>
              <h4 className="font-bold mb-2 text-primary">المهارات المكتسبة:</h4>
              <ul className="list-disc list-inside md:list-outside text-gray-600 mb-4 space-y-1 text-center md:text-right">
                <li>أنظمة التحكم الآلي</li>
                <li>البرمجة والروبوتات</li>
                <li>الإلكترونيات الصناعية</li>
                <li>الميكانيك التطبيقي</li>
                <li>أنظمة الهيدروليك والنيوماتيك</li>
              </ul>
              <h4 className="font-bold mb-2 text-primary">فرص العمل:</h4>
              <p className="text-gray-600 mb-4">
                فني أوتوميكاترونكس، فني روبوتات، فني تحكم آلي، أو الالتحاق بالجامعات التقنية.
              </p>
              <Link to="/specialty/automation" className="btn btn-outline-primary inline-block p-4 ">
                عرض التفاصيل الكاملة
              </Link>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Female Specializations */}
      <section className="py-12 bg-gray-100" id="female-specialties">
        <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="section-title">تخصصات الإناث</h2>
        </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Computer Maintenance for Females */}
            <ScrollAnimation>
            <div id="computer-female" className="bg-white p-6 rounded-xl shadow-lg feature-card text-center md:text-right">
              <i className="fa-solid fa-laptop-code fa-3x mb-4 text-accent"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">صيانة أجهزة الحاسوب والشبكات</h3>
              <p className="text-gray-600 mb-4">
                تخصص مخصص للإناث يهدف إلى تأهيل الطالبات في مجال صيانة الحاسوب والشبكات، مما يفتح لهن فرص عمل في القطاع التقني.
              </p>
              <h4 className="font-bold mb-2 text-primary">المهارات المكتسبة:</h4>
              <ul className="list-disc list-inside md:list-outside text-gray-600 mb-4 space-y-1 text-center md:text-right">
                <li>صيانة وتركيب أجهزة الحاسوب</li>
                <li>تركيب وصيانة الشبكات</li>
                <li>إدارة أنظمة التشغيل</li>
                <li>حل المشاكل التقنية</li>
                <li>الأمان السيبراني</li>
              </ul>
              <h4 className="font-bold mb-2 text-primary">فرص العمل:</h4>
              <p className="text-gray-600 mb-4">
                فنية حاسوب، فنية شبكات، مسؤولة أنظمة، دعم فني، أو الالتحاق بالجامعات التقنية.
              </p>
              <Link to="/specialty/computer-female" className="btn btn-outline-primary inline-block p-4 ">
                عرض التفاصيل الكاملة
              </Link>
            </div>
            </ScrollAnimation>

            {/* Beauty/Cosmetology */}
            <ScrollAnimation>
            <div id="beauty" className="bg-white p-6 rounded-xl shadow-lg feature-card text-center md:text-right">
              <i className="fa-solid fa-spa fa-3x mb-4 text-accent"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">التجميل</h3>
              <p className="text-gray-600 mb-4">
                تخصص مخصص للإناث يهدف إلى تأهيل الطالبات في فنون التجميل والعناية بالبشرة والشعر.
              </p>
              <h4 className="font-bold mb-2 text-primary">المهارات المكتسبة:</h4>
              <ul className="list-disc list-inside md:list-outside text-gray-600 mb-4 space-y-1 text-center md:text-right">
                <li>فنون التجميل والتزيين</li>
                <li>العناية بالبشرة</li>
                <li>العناية بالشعر</li>
                <li>المكياج الاحترافي</li>
                <li>إدارة صالون التجميل</li>
              </ul>
              <h4 className="font-bold mb-2 text-primary">فرص العمل:</h4>
              <p className="text-gray-600 mb-4">
                خبيرة تجميل، مديرة صالون، مدربة تجميل، أو فتح صالون تجميل خاص.
              </p>
              <Link to="/specialty/beauty" className="btn btn-outline-primary inline-block p-4 ">
                عرض التفاصيل الكاملة
              </Link>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 className="section-title">برامج إضافية</h2>
        </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <Link to="/apprenticeship" className="bg-primary text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all feature-card">
              <i className="fa-solid fa-user-graduate fa-2x mb-3"></i>
              <h3 className="text-xl font-bold mb-2">مسار التلمذة المهنية</h3>
              <p>تعرف على برنامج التلمذة المهنية</p>
            </Link>
            <Link to="/competency" className="bg-accent text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all feature-card">
              <i className="fa-solid fa-certificate fa-2x mb-3"></i>
              <h3 className="text-xl font-bold mb-2">الكفاءة المهنية</h3>
              <p>تعرف على برنامج الكفاءة المهنية</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialties;

