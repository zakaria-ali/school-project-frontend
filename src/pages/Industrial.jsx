import { Link } from 'react-router-dom';
import vocationalSchool from '../../public/images/vocationalSchool.jpg';
import vocationalIcon from '../../public/images/vocationalIcon.png';
import vocationalClassroom from '../../public/images/vocationalClassroom.jpg';
import BlurText from "../components/BlurText";
import ScrollAnimation from "../components/ScrollAnimation";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


const Industrial = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${vocationalSchool})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '60vh'
        }}>
        <div className="hero-content text-center text-light pb-4">
          <div className="animate-bounce-in mb-6">
            <img 
              src={vocationalIcon} 
              alt="شعار التخصص" 
              className="h-20 md:h-24 lg:h-32 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-center flex justify-center w-full">
  <BlurText
    text="الفرع الصناعي"
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
          تعرف على الفرع الصناعي وأهميته، التخصصات المتاحة وفرص التعليم الجامعي المرتبطة به.
          </p>
        </div>
      </header>
      
      {/* Industrial Branch Content */}
      <section className="py-12 mt-5">
        <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="section-title">مقدمة عن الفرع الصناعي</h2>
          </ScrollAnimation>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
            <ScrollAnimation direction="left" delay={100} >
              <p className="text-gray-600 mb-3 text-lg">
                الفرع الصناعي في مدرسة محمود خليل أبو الرب المهنية يهدف إلى تأهيل الطلبة تقنيًا ومهنيًا في مجالات حيوية مثل صيانة أجهزة الحاسوب والشبكات، كهرباء استعمال، وأوتوميكاترونكس.
              </p>
              <p className="text-gray-600 mb-3 text-lg">
                الطلاب الذين ينهون هذا الفرع يتمتعون بأساس قوي للالتحاق بالجامعات التقنية والمهنية، أو لدخول سوق العمل بكفاءة عالية.
              </p>
              <Link to="/specialties" className="btn btn-accent px-6 py-3 text-lg mt-2 inline-block ripple">
                <i className="fa-solid fa-arrow-left me-2 icon-rotate"></i>
                عرض التخصصات الصناعية
              </Link>
              </ScrollAnimation>
            </div>
            <div className="md:w-1/2 text-center">
            <ScrollAnimation direction="right" delay={100}>
              <img 
                src={vocationalClassroom} 
                className="w-full rounded-lg shadow-lg" 
                alt="صف صناعي"
              />
            </ScrollAnimation>
            </div>
          </div>

          {/* Available Specialties */}
          <ScrollAnimation>
          <h2 className="section-title">التخصصات المتاحة في الفرع الصناعي</h2>
          </ScrollAnimation>
          <ScrollAnimation>
          <p className="text-center text-gray-600 mb-8 text-lg">
            مدرسة مختلطة تقدم تخصصات للذكور والإناث
          </p>
          </ScrollAnimation>
          <ScrollAnimation>
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">تخصصات الذكور</h3>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>
              <i className="fa-solid fa-computer fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">صيانة أجهزة الحاسوب والشبكات</h5>
              <p className="text-gray-600 text-sm">
                تعلم تركيب وصيانة الحاسوب، الشبكات، والبرمجة .
              </p>
              </ScrollAnimation>
            </div>
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>
              <i className="fa-solid fa-bolt fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">كهرباء استعمال</h5>
              <p className="text-gray-600 text-sm">
                تعلم التركيبات الكهربائية والتمديدات وسلامة العمل.
              </p>
              </ScrollAnimation>
            </div>
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>
              <i className="fa-solid fa-cogs fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">أوتوميكاترونكس</h5>
              <p className="text-gray-600 text-sm">
                دمج بين الميكانيك، الإلكترونيات وأنظمة التحكم الآلي.
              </p>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation>
          <h3 className="text-2xl font-bold text-primary mb-6 text-center mt-12">تخصصات الإناث</h3>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>
              <i className="fa-solid fa-laptop-code fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">صيانة أجهزة الحاسوب والشبكات</h5>
              <p className="text-gray-600 text-sm">
                تخصص مخصص للإناث - تعلم تركيب وصيانة الحاسوب، الشبكات، والبرمجة .
              </p>
              </ScrollAnimation>
            </div>
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>
              <i className="fa-solid fa-spa fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">التجميل</h5>
              <p className="text-gray-600 text-sm">
                تخصص مخصص للإناث - تعلم فنون التجميل والعناية بالبشرة والشعر.
              </p>
              </ScrollAnimation>
            </div>
          </div>

          {/* University Opportunities */}
          <ScrollAnimation>
          <h2 className="section-title mt-12">فرص التعليم الجامعي</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
            <ScrollAnimation>
              <i className="fa-solid fa-university fa-2x mb-2 text-accent"></i>
              <p className="text-sm text-gray-600">
                الالتحاق بالكليات التقنية والجامعات الصناعية في فلسطين.
              </p>
              </ScrollAnimation>
            </div>
            <div>
            <ScrollAnimation>
              <i className="fa-solid fa-briefcase fa-2x mb-2 text-accent"></i>
              <p className="text-sm text-gray-600">
                فرص عمل مباشرة في السوق الصناعي المحلي والإقليمي.
              </p>
              </ScrollAnimation>
            </div>
            <div>
            <ScrollAnimation>
              <i className="fa-solid fa-lightbulb fa-2x mb-2 text-accent"></i>
              <p className="text-sm text-gray-600">
                تطوير مهارات الابتكار والإبداع في المجالات التقنية.
              </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industrial;
