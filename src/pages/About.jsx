import { Link } from 'react-router-dom';
import aboutSchool from '../../public/images/aboutSchool.png';
import BlurText from "../components/BlurText";
import ScrollAnimation from "../components/ScrollAnimation";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1400&q=80')",
        minHeight: '65vh',
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
    text="عن المدرسة"
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
          تعرّف على مدرستنا، رسالتنا، ورؤيتنا لتعليم جيل مبدع ومؤهل في المجال الصناعي.
          </p>
        </div>
      </header>
      
      {/* About Content */}
      <section className="py-8 sm:py-12 mt-5">
        <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation>
          <h2 className="section-title">مقدمة عن المدرسة</h2>
        </ScrollAnimation>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-2/5">

          <ScrollAnimation direction="left" delay={100} >
              <p className="text-gray-600 mb-3 text-lg">
                تأسست <strong>مدرسة محمود خليل أبو الرب المهنية</strong> لتكون منارة للتعليم الصناعي والمهني في فلسطين. <strong>مدرسة مختلطة</strong> تقدم بيئة تعليمية متكاملة تدمج بين الجانب النظري والتطبيقي للذكور والإناث.
              </p>
              <p className="text-gray-600 mb-3 text-lg">
                تقدم المدرسة تخصصات متنوعة: للذكور (صيانة الحاسوب والشبكات، كهرباء استعمال، أوتوميكاترونكس) وللإناث (صيانة الحاسوب، التجميل). كما تقدم برامج التلمذة المهنية والكفاءة المهنية لتأهيل الطلاب لسوق العمل.
              </p>
              <p className="text-gray-600 mb-3 text-lg">
                تسعى المدرسة إلى إعداد طلبة مبدعين من الذكور والإناث يمتلكون المهارات التقنية والمهنية اللازمة للالتحاق بالجامعات أو الانخراط في سوق العمل بكفاءة عالية.
              </p>
              <Link to="/industrial" className="btn btn-accent px-6 py-3 text-lg mt-2 inline-block ripple">
                <i className="fa-solid fa-arrow-left me-2 icon-rotate"></i>
                اعرف أكثر عن الفرع الصناعي
              </Link>
            </ScrollAnimation>
            </div>
            <div className="md:w-3/5 text-center">

            <ScrollAnimation direction="right" delay={100}>
              <img 
                src={aboutSchool} 
                className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                alt="عن المدرسة"
              />
            </ScrollAnimation>
            </div>
          </div>
          

          {/* Vision, Mission, Goals */}
          <ScrollAnimation>
          <h2 className="section-title">رسالتنا ورؤيتنا</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>

              <i className="fa-solid fa-bullseye fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">رؤيتنا</h5>
              <p className="text-gray-600 text-sm">
                تكوين جيل قادر على مواجهة تحديات سوق العمل في المجال الصناعي والمهني بكفاءة وإبداع.
              </p>
              </ScrollAnimation>

            </div>
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>

              <i className="fa-solid fa-lightbulb fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">رسالتنا</h5>
              <p className="text-gray-600 text-sm">
                تقديم تعليم صناعي متطور يدمج المعرفة النظرية بالتطبيق العملي ويشجع على الابتكار والإبداع.
              </p>
              </ScrollAnimation>

            </div>
            <div className="bg-white p-6 h-full feature-card text-center rounded-xl shadow-md">
            <ScrollAnimation>

              <i className="fa-solid fa-hand-holding-heart fa-2x mb-3 text-accent"></i>
              <h5 className="mb-3 text-xl font-semibold">أهدافنا</h5>
              <p className="text-gray-600 text-sm">
                تهيئة الطلاب لسوق العمل، تطوير مهاراتهم المهنية، وتحفيزهم على الاستمرار في التعليم والتعلم المستمر.
              </p>
              </ScrollAnimation>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
