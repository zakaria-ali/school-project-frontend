import { Link } from 'react-router-dom';
import apprenticeshipIcon from '../../public/images/apprenticeshipIcon.png';
import apprenticeshipbg from '../../public/images/apprenticeship.jpeg';
import BlurText from "../components/BlurText";
import ScrollAnimation from "../components/ScrollAnimation";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Apprenticeship = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${apprenticeshipbg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '50vh'
        }}>
        <div className="hero-content text-center text-light pb-4">
          <div className="animate-bounce-in mb-6">
            <img 
              src={apprenticeshipIcon} 
              alt="شعار مسار التلمذة المهنية" 
              className="h-20 md:h-24 lg:h-32 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-center flex justify-center w-full">
  <BlurText
    text="مسار التلمذة المهنية"
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
          نظام تعليمي يجمع بين التعليم النظري والتدريب العملي في بيئة العمل
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <ScrollAnimation>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">ما هو مسار التلمذة المهنية؟</h2>
              <p className="text-gray-600 text-lg mb-4">
              مساق التلمذة المهنية في فلسطين هو جزء من <strong> نظام التعليم والتدريب المهني والتقني (TVET)</strong>، ويهدف إلى تأهيل الشباب الفلسطيني بالمهارات العملية والنظرية اللازمة لدخول سوق العمل. يشرف على هذا النظام جهات متعددة، أبرزها وزارة العمل ووزارة التربية والتعليم العالي والهيئة الوطنية للتعليم والتدريب المهني والتقني.
                </p>
              <p className="text-gray-600 text-lg">
                في فلسطين، تم تنفيذ برامج التلمذة المهنية لدعم الطلاب والطالبات الباحثين عن عمل، حيث يتم توفير فرص تدريب مجانية بهدف خلق فرص عمل لائقة في قطاعات متنوعة.
              </p>
            </div>
            </ScrollAnimation>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ScrollAnimation direction="left" delay={100}>
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl shadow-lg">
              <i className="fa-solid fa-lightbulb fa-2x mb-3 text-accent"></i>
                <h3 className="text-xl font-bold mb-3">المزايا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-100">
                  <li>اكتساب خبرة عملية حقيقية</li>
                  <li>التعرف على بيئة العمل الفعلية</li>
                  <li>بناء شبكة علاقات مهنية</li>
                  <li>زيادة فرص التوظيف</li>
                  <li>تطوير المهارات العملية</li>
                </ul>
              </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={100}>
              <div className="bg-gradient-to-br from-accent to-orange-600 text-white p-6 rounded-xl shadow-lg">
                <i className="fa-solid fa-graduation-cap fa-2x mb-3 text-white"></i>
                <h3 className="text-xl font-bold mb-3">كيف يعمل البرنامج؟</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-100">
                  <li>دراسة نظرية في المدرسة</li>
                  <li>تدريب عملي في المؤسسات</li>
                  <li>إشراف من قبل مدربين محترفين</li>
                  <li>تقييم مستمر للأداء</li>
                  <li>شهادة معتمدة بعد الإتمام</li>
                </ul>
              </div>
              </ScrollAnimation>
            </div>

            {/* Program Structure */}
            <ScrollAnimation>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">هيكل البرنامج</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">المرحلة النظرية</h3>
                    <p className="text-gray-600">
                    يلتحق الطالب بمسار التلمذةالمهنية بعد انهائه للصف العاشر بنجاح حيث ياخذ مادة الفصل الدراسي الاول لمنهاج الحادي عشر المهني على مدار عام دراسي كامل ليترفع بعدها الى الصف التالي.ليأخذ مادة الفصل الدراسي الثاني لمنهاج الحادي عشر المهني  خلال العام الدراسي ايضا فيكون بذلك قد انهى مادة الصف الحادي عشر المهني خلال عامين للمواد النظرية.اما مواد الاختصاص فتعطى للطالب كاملة كباقي زملائه في المسار المهني.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">المرحلة العملية</h3>
                    <p className="text-gray-600">
                    يتلقى الطالب التدريب العملي خلال ثلاث ايام من الاسبوع في سوق العمل تحت اشراف معلمين مختصين  من المدرسة بعد توقيع اتفاقيات شراكة وعقود تمهن بين المدرسة والطالب  ومؤسسةالعمل.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">التقييم والشهادة</h3>
                    <p className="text-gray-600">
                    يحصل طالب التلمذة المهنية بعد تخرجه على شهادة مدرسية تمكنه من الانخراط بسوق العمل, وكذلك يستطيع الحصول على شهادة مزاولة المهنة بالتعاون مع وزارة العمل.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Call to Action */}
            <ScrollAnimation>
            <div className="text-center bg-primary text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">هل أنت مهتم بمسار التلمذة المهنية؟</h2>
              <p className="mb-6 text-gray-100">
                تواصل معنا لمعرفة المزيد عن برامج التلمذة المهنية المتاحة وكيفية التسجيل
              </p>
              <Link to="/contact" className="btn btn-accent px-6 py-3 text-lg inline-block ripple">
                <i className="fa-solid fa-arrow-left me-2 icon-rotate"></i>
                تواصل معنا
              </Link>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apprenticeship;

