import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import computerandNetworkClassroomIcon from '../../public/images/computerandNetworkClassroomIcon.png';
import computerandNetworkClassroom from '../../public/images/computerandNetworkClassroom.jpg';
import electricalClassroomIcon from '../../public/images/electricalClassroomIcon.png';
import electricalClassroom from '../../public/images/electricalClassroom.jpg';
import automationClassroomIcon from '../../public/images/automationClassroomIcon.png';
import automationClassroom from '../../public/images/automationClassroom.jpg';
import computerandNetworkClassroomFIcon from '../../public/images/computerandNetworkClassroomFIcon.png';
import computerandNetworkClassroomF from '../../public/images/computerandNetworkClassroomF.jpg';
import beautyClassroomIcon from '../../public/images/beautyClassroomIcon.png';
import beautyClassroom from '../../public/images/beautyClassroom.jpg';
import BlurText from "../components/BlurText";
import ScrollAnimation from "../components/ScrollAnimation";
import SpotlightCard from '../components/SpotlightCard';
import ElectricBorder from '../components/ElectricBorder';


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const SpecialtyDetail = () => {
  const { id } = useParams();

  const specialties = {
    'computer-male': {
      title: 'صيانة أجهزة الحاسوب والشبكات',
      subtitle: 'تخصص الذكور',
      icon: computerandNetworkClassroomIcon,
      headerBackGround: computerandNetworkClassroom,
      description: 'يهدف هذا التخصص إلى تأهيل الطلاب في مجال صيانة أجهزة الحاسوب وتركيب الشبكات وأنظمة التشغيل المختلفة، مما يؤهلهم للعمل في القطاع التقني أو الالتحاق بالجامعات التقنية.',
      subjects: [
        'أساسيات الكهرباء و الالكترونيات',
        'الالكترونيات الرقمية',
        'تركيب وصيانة الشبكات',
        'أنظمة التشغيل (Windows, Linux)',
        ' هيكلية الحاسوب',
        'أعطال جهاز الحاسوب ',
        'البرمجة الأساسية',
        'إدارة الخوادم',
        'التشخيص وإصلاح الأعطال',
        'تركيب الشبكات اللاسلكية '
      ],
      careers: [
        'فني صيانة حاسوب',
        'فني شبكات',
        'مسؤول أنظمة',
        'دعم فني',
        'مدير قواعد بيانات',
        'مطور مواقع ويب و موبايل  ',
        'مطور برمجيات',
        'مدير خوادم'
      ],
      university: 'هذا التخصص يؤهل الطلاب للالتحاق ببرامج هندسة الحاسوب، هندسة الشبكات، علوم الحاسوب، وتقنية المعلومات في الجامعات. كما يوفر أساساً قوياً لدراسة الماجستير والدكتوراه في المجالات التقنية المتقدمة.',
      
      workshopDescription: 'مشغل صيانة الحاسوب والشبكات مجهز بأحدث الأجهزة والبرمجيات لتدريب الطلاب على المهارات العملية في بيئة محاكاة للعمل الحقيقي.'
    },
    'electric': {
      title: 'كهرباء استعمال',
      subtitle: 'تخصص الذكور',
      icon: electricalClassroomIcon,
      headerBackGround: electricalClassroom,
      description: 'يهدف هذا التخصص إلى تأهيل الطلاب في مجال التركيبات الكهربائية والتمديدات وسلامة العمل، مما يؤهلهم للعمل في القطاع الكهربائي أو الالتحاق بالجامعات الهندسية.',
      subjects: [
        'أساسيات الكهرباء',
        'التركيبات الكهربائية المنزلية',
        'التركيبات الكهربائية الصناعية',
        'قراءة المخططات الكهربائية',
        'التمديدات الكهربائية',
        'سلامة العمل الكهربائي',
        'صيانة الأجهزة الكهربائية',
        'أنظمة الإنارة',
        'المولدات والمحولات',
        'الكهرباء الذكية'
      ],
      careers: [
        'كهربائي منازل',
        'كهربائي صناعي',
        'فني تركيبات كهربائية',
        'مشرف كهرباء',
        'فني صيانة كهربائية',
        'مدير مشاريع كهربائية',
        'مستشار كهربائي',
        'مقاول كهرباء'
      ],
      university: 'هذا التخصص يؤهل الطلاب للالتحاق ببرامج الهندسة الكهربائية، هندسة الطاقة، والهندسة الصناعية في الجامعات. كما يوفر أساساً قوياً لدراسة الماجستير في مجالات الطاقة المتجددة والأنظمة الكهربائية الذكية.',
      workshopDescription: 'مشغل كهرباء استعمال مجهز بأحدث الأدوات والمعدات الكهربائية لتدريب الطلاب على التركيبات والتمديدات الكهربائية بمعايير السلامة المهنية.'
    },
    'automation': {
      title: 'أوتوميكاترونكس',
      subtitle: 'تخصص الذكور',
      icon: automationClassroomIcon,
      headerBackGround: automationClassroom,
      description: 'يدمج هذا التخصص بين الميكانيك والإلكترونيات وأنظمة التحكم الآلي، مما يؤهل الطلاب للعمل في الصناعات الحديثة أو الالتحاق بالجامعات التقنية.',
      subjects: [
        'أساسيات الميكانيك',
        'الإلكترونيات الصناعية',
        'أنظمة التحكم الآلي',
        'البرمجة والروبوتات',
        'أنظمة الهيدروليك والنيوماتيك',
        'المشغلات والمستشعرات',
        'التحكم في المحركات',
        'الأنظمة المدمجة',
        'الصيانة الصناعية',
        'السلامة الصناعية'
      ],
      careers: [
        'فني أوتوميكاترونكس',
        'فني روبوتات',
        'فني تحكم آلي',
        'فني صيانة صناعية',
        'مهندس تحكم',
        'مشغل أنظمة آلية',
        'فني أنظمة مدمجة',
        'مدير صيانة صناعية'
      ],
      university: 'هذا التخصص يؤهل الطلاب للالتحاق ببرامج هندسة الميكاترونكس، هندسة التحكم، والهندسة الصناعية في الجامعات. كما يوفر أساساً قوياً لدراسة الماجستير في مجالات الروبوتات والذكاء الاصطناعي.',

      workshopDescription: 'مشغل أوتوميكاترونكس مجهز بأحدث أنظمة التحكم الآلي والروبوتات لتدريب الطلاب على التطبيقات الصناعية الحديثة.'
    },
    'computer-female': {
      title: 'صيانة أجهزة الحاسوب والشبكات',
      subtitle: 'تخصص الإناث',
      icon: computerandNetworkClassroomFIcon,
      headerBackGround: computerandNetworkClassroomF,
      description: 'تخصص مخصص للإناث يهدف إلى تأهيل الطالبات في مجال صيانة الحاسوب والشبكات، مما يفتح لهن فرص عمل في القطاع التقني أو الالتحاق بالجامعات التقنية.',
      subjects: [
        'أساسيات الكهرباء و الالكترونيات',
        'الالكترونيات الرقمية',
        'تركيب وصيانة الشبكات',
        'أنظمة التشغيل (Windows, Linux)',
        ' هيكلية الحاسوب',
        'أعطال جهاز الحاسوب ',
        'البرمجة الأساسية',
        'إدارة الخوادم',
        'التشخيص وإصلاح الأعطال',
        'تركيب الشبكات اللاسلكية '
      ],
      careers: [
        'فني صيانة حاسوب',
        'فني شبكات',
        'مسؤول أنظمة',
        'دعم فني',
        'مدير قواعد بيانات',
        'مطور مواقع ويب و موبايل  ',
        'مطور برمجيات',
        'مدير خوادم'
      ],
      university: 'هذا التخصص يؤهل الطالبات للالتحاق ببرامج هندسة الحاسوب، هندسة الشبكات، علوم الحاسوب، وتقنية المعلومات في الجامعات. كما يوفر أساساً قوياً لدراسة الماجستير والدكتوراه في المجالات التقنية المتقدمة.',
      workshopDescription: 'مشغل صيانة الحاسوب والشبكات مجهز بأحدث الأجهزة والبرمجيات لتدريب الطالبات على المهارات العملية في بيئة محاكاة للعمل الحقيقي.'
    },
    'beauty': {
      title: 'التجميل',
      subtitle: 'تخصص الإناث',
      icon: beautyClassroomIcon,
      headerBackGround: beautyClassroom,
      description: 'تخصص مخصص للإناث يهدف إلى تأهيل الطالبات في فنون التجميل والعناية بالبشرة والشعر، مما يؤهلهن للعمل في صالونات التجميل أو فتح مشاريع خاصة.',
      subjects: [
        'فنون التجميل والتزيين',
        'العناية بالبشرة',
        'العناية بالشعر',
        'المكياج الاحترافي',
        'تصفيف الشعر',
        'العناية بالأظافر',
        'العلاجات التجميلية',
        'إدارة صالون التجميل',
        'التسويق والعلاقات العامة',
        'الصحة والسلامة المهنية'
      ],
      careers: [
        'خبيرة تجميل',
        'مديرة صالون تجميل',
        'مدربة تجميل',
        'مستشارة تجميل',
        'مصممة مكياج',
        'خبيرة عناية بالبشرة',
        'مصممة أظافر',
        'رائدة أعمال في مجال التجميل'
      ],
      university: 'هذا التخصص يؤهل الطالبات للالتحاق ببرامج إدارة الأعمال، التسويق، والتصميم في الجامعات. كما يوفر أساساً قوياً لفتح مشاريع خاصة في مجال التجميل والعناية الشخصية.',
      workshopDescription: 'مشغل التجميل مجهز بأحدث الأدوات والمعدات التجميلية لتدريب الطالبات على المهارات العملية في بيئة محاكاة لصالون تجميل حقيقي.'
    }
  };

  const specialty = specialties[id];
  const [galleryImages, setGalleryImages] = useState([]);

  // Load dynamic images from gallery (localStorage or API)
  useEffect(() => {
    const localImages = localStorage.getItem("gallery_images");
    if (localImages) {
      try {
        const parsed = JSON.parse(localImages);
        if (Array.isArray(parsed)) setGalleryImages(parsed);
      } catch (e) {
        console.error("Error reading gallery:", e);
      }
    }
  }, []);
  if (!specialty) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">التخصص غير موجود</h1>
        <Link to="/specialties" className="btn btn-primary">
          العودة إلى التخصصات
        </Link>
      </div>
    );
  }
  
  const filteredImages = galleryImages
  .filter((img) => img.category === id)
  .slice(-3); // latest 3

  return (
    <>

      {/* Hero Section */}
      <header className="hero animate-fade-in pt-16 sm:pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${specialty.headerBackGround})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          minHeight: '50vh'
        }}>
        <div className="hero-content text-center text-light pb-4">
          <div className="animate-bounce-in mb-6">
            <img 
              src={specialty.icon}
              alt="شعار التخصص" 
              className="h-20 md:h-24 lg:h-32 w-auto mx-auto mb-4 object-contain animate-float"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-center flex justify-center w-full">
  <BlurText
    text={specialty.title}
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
          {specialty.subtitle}
          </p>
        </div>
      </header>
          {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Description */}
            <ScrollAnimation>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">عن التخصص</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{specialty.description}</p>
            </div>
            </ScrollAnimation>

            {/* Subjects */}
            <SpotlightCard >
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold mb-6">المواد الدراسية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialty.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white bg-opacity-10 rounded-lg p-3">
                    <i className="fa-solid fa-check-circle text-accent"></i>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
            </SpotlightCard>

            {/* Careers */}
            
            <ElectricBorder
  color="rgb(244 162 97)"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 16 }}
>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">الوظائف المستقبلية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialty.careers.map((career, index) => (
                  <div key={index} className="flex items-center gap-3 border-r-4 border-accent pr-4 py-2">
                    <i className="fa-solid fa-briefcase text-accent"></i>
                    <span className="text-gray-700 font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </div>
            </ElectricBorder>
            {/* University */}
            <ScrollAnimation>

            <div className="bg-gradient-to-br from-accent to-orange-600 text-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold mb-4">كيف يساعدك التخصص في الجامعة؟</h2>
              <p className="text-lg leading-relaxed text-gray-100">{specialty.university}</p>
            </div>
            </ScrollAnimation>

            {/* Workshop */}
            <ScrollAnimation>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6">صور من مشغل التخصص</h2>
              <p className="text-gray-600 text-lg mb-6">{specialty.workshopDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredImages.length > 0 ? (
                filteredImages.map((img) => (
                  <div
                    key={img.id}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">
                  لا توجد صور متاحة لهذا التخصص في المعرض.
                </p>
              )}
            </div>
          </div>
          </ScrollAnimation>

            {/* Back Button */}
            <div className="text-center">
              <Link to="/specialties" className="btn btn-primary px-6 py-3 text-lg inline-block">
                <i className="fa-solid fa-arrow-right me-2"></i>
                العودة إلى التخصصات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialtyDetail;

