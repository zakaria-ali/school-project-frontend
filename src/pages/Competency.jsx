import { Link } from 'react-router-dom';
import BlurText from "../components/BlurText";
import ScrollAnimation from "../components/ScrollAnimation";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Competency = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80')",
          minHeight: '50vh'
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
    text="الكفاءة المهنية"
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
          شهادات معتمدة تثبت مستوى المهارة والقدرة في المجال المهني
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
              <h2 className="text-3xl font-bold text-primary mb-4">ما هي الكفاءة المهنية؟</h2>
              <p className="text-gray-600 text-lg mb-4">
                <strong>الكفاءة المهنية</strong> تشير إلى مستوى المهارة والمعرفة التي يمتلكها الفرد في مجال مهني معين، مما يؤهله لأداء مهام محددة بكفاءة وفعالية. في فلسطين، يُعتبر التعليم والتدريب المهني والتقني من الأدوات الأساسية لتخفيف حدة البطالة، حيث يُسهم في تزويد الأفراد بالمهارات المطلوبة لسوق العمل.
                حيث انه مسار تعليمي تدريبي يُركّز على تطوير المهارات العملية لدى الطلبة من خلال مشروع تدريبي يتم تنفيذه خلال عام دراسي وهو الصف الثاني الثانوي ويهدف إلى تخريج كادر فني يلتحق بسوق العمل بشكل مباشر أو يؤسس عمل خاص به .
              </p>
              <p className="text-gray-600 text-lg">
                تقدم مدرستنا برامج الكفاءة المهنية التي تؤهل الطلاب والطالبات للحصول على شهادات معتمدة تثبت كفاءتهم في تخصصاتهم المختلفة.
              </p>
            </div>
            </ScrollAnimation>
            {/* Program Details */}
            <ScrollAnimation>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">تفاصيل البرنامج</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">1. متى يتم الالتحاق بهذا المسار ؟ </h3>
                  <p className="text-gray-600">
                  يُشترط أن ينهي الطالب/ة الصف الحادي عشر المهني فقط ( صناعي ، اقتصاد منزلي ، زراعي …الخ ) وليس المسار الأكاديمي بنجاح ومن ثم يلتحق بهذا المسار عند بدء العام الدراسي الجديد في الصف الثاني الثانوي فقط .
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">2. هل يُمكن الالتحاق بهذا المسار كدارسة خاصة ؟</h3>
                  <p className="text-gray-600">
                  لا يُمكن ذلك ، لأنه يعتمد بشكل أساسي على المهارات والكفايات التي يتم إكتسابها خلال عامين دراسيين ، وبحاجة لمتابعة وتوجيهات حثيثة من معلم المشغل المشرف على المشروع التدريبي .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">3. المواد المطلوبة في هذا المسار</h3>
                  <p className="text-gray-600">
                  جميع المواد النظرية ومواد التخصص للفرع المهني ( المواد النظرية ومواد التخصص )، أي يتلقى الطالب التعليم المهني المدرسي النظامي في جميع المواد النظرية ومواد التخصص كأي طالب في مثل تخصصه .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">4. شروط النجاح في هذا المسار</h3>
                  <p className="text-gray-600">
                  النجاح في المواد النظرية من خلال العلامات والامتحانات المدرسية ( لا يتقدم الطالب/ة لامتحان شهادة الثانوية العامة / الوزاري في هذه المواد ) بل تُرصّد على الشهادة علامة المدرسة ويجب أن يكون ناجح في جميع المواد النظرية بعلامات المدرسة ، أما مواد التخصص وتشمل ( علم الصناعة/ المهني  ، التدريب العملي ، الرسم الصناعي/ المهني  ، المشروع ) فيتقدم الطالب/ة لامتحان الثانوية العامة ( الوزاري ) مع بقية طلبة فرعه ويخضع لنفس الإمتحان ، ويجب أن ينجح الطالب في جميع هذه المواد لكي يتسلم شهادة الثانوية العامة .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">5. ماذا يحدث في حال لم ينجح الطالب في أي مادة ؟</h3>
                  <p className="text-gray-600">
                  إذا كانت المادة نظرية ( دين ، عربي ، ….الخ) يُكمل الطالب في المدرسة من خلال امتحان مدرسي ولا يتسلم شهادة الثانوية العامة إلا بعد أداء امتحان الإكمال المدرسي .
                  أما إذا كانت المادة إحدى مواد التخصص باستثناء المشروع يُكمل الطالب في الدورة الثانية للحصول على شهادة الثانوية العامة كطالب ناجح .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">6. من يتابع مشروع الطالب أثناء العام الدراسي ؟</h3>
                  <p className="text-gray-600">
                  يُطلب من الطالب/ة تزويد إدارة المدرسة بمقترح وفكرة مشروع يتم الموافقة عليها من خلال مدير المدرسة والمعلم المهني للطالب في المشغل ليتم العمل على تنفيذها خلال العام الدراسي في الصف الثاني الثانوي ضمن مواعيد محددة لتسليم مقترح المشروع وخطة التنفيذ ومناقشة المشروع من خلال لجنة وزارية في نهاية العام الدراسي .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">7. من الذي يلتحق بهذا المسار ؟</h3>
                  <p className="text-gray-600">
                  أي طالب/ة يرغب بالالتحاق بسوق العمل ولا يرغب بالتعليم الأكاديمي الجامعي ، أو الذي يرغب بافتتاح مشروعه الذاتي .
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">8. ما هي المجالات الأكاديمية المتاحة لطالب الكفاءة المهنية بعد إنهاءه الصف الثاني الثانوي ؟</h3>
                  <p className="text-gray-600">
                  فقط برامج الدبلوم في الكليات والجامعات ويُشترط أن تكون بنفس مسار تخصصه أو مشتقة عن تخصصه ويوجد على موقع وزارة التربية والتعليم العالي نشرة توضيحية للبرامج المتاحة لكل تخصص مهني .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">9. هل يمكن التجسير بعد إنهاء الدبلوم ؟</h3>
                  <p className="text-gray-600">
                  لا يمكن ذلك .                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">10. هل بإمكان الطالب الذي حصل على شهادة الثانوية العامة / مسار الكفاءة المهنية الحصول على شهادة الثانوية العامة / المهني .</h3>
                  <p className="text-gray-600">
                  نعم ، في نفس العام الدراسي فقط بحيث يتقدم للامتحانات الوزارية في المواد النظرية خلال الدورة الثانية من امتحانات الثانوية العامة .
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">11. كيف يُحسب المعدل للطالب للالتحاق بالكليات الجامعية او كليات التعليم المتوسط ؟</h3>
                  <p className="text-gray-600">
                  من خلال مجموع علامات مواد التخصص الأربعة ( علم الصناعة/ العلوم المهنية  / العلوم الزراعية ، الرسم الصناعي / الرسم المهني ، التدريب العملي ، المشروع ) حيث أن مجموعها يكون من 500 علامة بالقسمة على 5، فمثلا طالب مجموعه في هذه المواد 450 يكون معدله 90 وهكذا ..
                  </p>
                </div>
                
              </div>
            </div>
            </ScrollAnimation>
            {/* Available Competencies */}
            <ScrollAnimation>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">شهادات الكفاءة المتاحة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-primary rounded-lg p-4">
                <h3 className="font-bold text-lg mb-3 text-primary">للذكور</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>كفاءة في صيانة الحاسوب والشبكات</li>
                    <li>كفاءة في كهرباء استعمال</li>
                    <li>كفاءة في أوتوميكاترونكس</li>
                  </ul>
                </div>
                <div className="border-2 border-accent rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 text-accent">للإناث</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>كفاءة في صيانة الحاسوب والشبكات</li>
                    <li>كفاءة في التجميل</li>
                  </ul>
                </div>
              </div>
            </div>
            </ScrollAnimation>
            {/* Importance */}
            <ScrollAnimation>
            <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">أهمية الكفاءة المهنية</h2>
              <p className="mb-4 text-gray-100">
                في سوق العمل التنافسي اليوم، أصبحت شهادات الكفاءة المهنية ضرورية لإثبات المهارات والقدرات. هذه الشهادات:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>تزيد من فرص الحصول على وظائف أفضل</li>
                <li>تعزز الثقة في القدرات المهنية</li>
                <li>تفتح أبواب التقدم الوظيفي</li>
                <li>تساعد في بناء سمعة مهنية قوية</li>
                <li>تؤهل للعمل في القطاع الخاص والحكومي</li>
              </ul>
            </div>
            </ScrollAnimation>
            {/* Call to Action */}
            <ScrollAnimation>
            <div className="text-center bg-primary text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">ابدأ رحلتك نحو الكفاءة المهنية</h2>
              <p className="mb-6 text-gray-100">
                تواصل معنا لمعرفة المزيد عن برامج الكفاءة المهنية وكيفية التسجيل
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

export default Competency;

