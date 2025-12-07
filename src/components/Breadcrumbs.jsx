import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbName = (path) => {
    const names = {
      'about': 'عن المدرسة',
      'industrial': 'الفرع الصناعي',
      'specialties': 'التخصصات',
      'apprenticeship': 'التلمذة المهنية',
      'competency': 'الكفاءة المهنية',
      'contact': 'تواصل معنا',
      'gallery': 'معرض الصور',
      'calendar': 'التقويم الأكاديمي',
      'library': 'المكتبة الرقمية',
      'faq': 'الأسئلة الشائعة',
      'achievements': 'الإنجازات'
    };
    return names[path] || path;
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-100 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-primary transition-colors">
              <i className="fa-solid fa-home me-1"></i>
              الرئيسية
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={routeTo} className="flex items-center">
                <i className="fa-solid fa-chevron-left text-gray-400 mx-2 text-xs"></i>
                {isLast ? (
                  <span className="text-primary font-semibold">{getBreadcrumbName(name)}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-500 hover:text-primary transition-colors">
                    {getBreadcrumbName(name)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

