import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-5 pt-5 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
          {/* Column 1: About School */}
          <div className="mb-4">
            <h5 className="font-bold text-light mb-3">مدرستنا</h5>
            <p className="text-gray-300 text-sm">
              مدرسة محمود خليل أبو الرب المهنية – منارة التعليم الصناعي في فلسطين، 
              تُعنى بإعداد الطلبة وتأهيلهم تقنيًا ومهنيًا بما يلائم سوق العمل المحلي والدولي.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb-4">
            <h5 className="font-bold text-light mb-3">روابط سريعة</h5>
            <ul className="list-none text-sm space-y-2">
              <li>
                <Link to="/" className="text-gray-300 no-underline hover:text-accent flex items-center justify-center md:justify-start gap-2 transition-all duration-300">
                  <i className="fa-solid fa-home text-xs"></i>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 no-underline hover:text-accent flex items-center justify-center md:justify-start gap-2 transition-all duration-300">
                  <i className="fa-solid fa-school text-xs"></i>
                  عن المدرسة
                </Link>
              </li>
              <li>
                <Link to="/specialties" className="text-gray-300 no-underline hover:text-accent flex items-center justify-center md:justify-start gap-2 transition-all duration-300">
                  <i className="fa-solid fa-graduation-cap text-xs"></i>
                  التخصصات
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 no-underline hover:text-accent flex items-center justify-center md:justify-start gap-2 transition-all duration-300">
                  <i className="fa-solid fa-images text-xs"></i>
                  معرض الصور
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 no-underline hover:text-accent flex items-center justify-center md:justify-start gap-2 transition-all duration-300">
                  <i className="fa-solid fa-envelope text-xs"></i>
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="mb-4">
            <h5 className="font-bold text-light mb-3">تواصل معنا</h5>
            <p className="text-sm mb-1">
              <i className="fa-solid fa-location-dot me-2 text-accent"></i>
              فلسطين - قباطية - اسكان أبو الرب
            </p>
            <i className="fa-solid fa-phone me-2 text-accent" ></i>
            <p className="text-sm mb-1" style={{ direction: 'ltr', display: 'inline-block'}}>
              +972 56 250 3457
            </p>
            <p className="text-sm mb-1">
              <i className="fab fa-facebook me-2 text-accent"></i>
              <a 
                href="https://www.facebook.com/profile.php?id=61566083144882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 no-underline hover:text-accent"
              >
                صفحتنا على فيسبوك
              </a>
            </p>
          </div>
        </div>

        <hr className="border-gray-600 my-3" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm mb-0 text-light">
            © {currentYear} مدرسة محمود خليل أبو الرب المهنية — جميع الحقوق محفوظة
          </p>
          <p className="text-sm mb-0 text-gray-400 mt-1">
            <i className="fa-solid fa-gear rotating text-accent me-1"></i>
            تصميم وتطوير بواسطة <strong className="text-accent">Eng. Zakaria Wildali</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

