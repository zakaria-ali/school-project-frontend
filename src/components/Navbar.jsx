import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar py-2 sm:py-3 fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link 
            className="text-white font-bold text-sm md:text-base lg:text-lg hover:text-accent transition-all duration-300 flex items-center gap-2 group flex-shrink-0" 
            to="/"
          >
            <div className="relative h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="شعار المدرسة" 
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <i className="fa-solid fa-school text-lg md:text-xl lg:text-2xl icon-rotate group-hover:scale-110 transition-transform duration-300 absolute" style={{display: 'none'}}></i>
            </div>
            <span className="hidden xl:inline">مدرسة محمود خليل أبو الرب المهنية</span>
            <span className="xl:hidden hidden md:inline">المدرسة المهنية</span>
            <span className="md:hidden">المدرسة</span>
          </Link>
          <button 
            className="lg:hidden text-white border-0 bg-transparent p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          <div className={`${isOpen ? 'block animate-slide-down' : 'hidden'} lg:flex lg:items-center lg:flex-1 lg:justify-end`}>
            <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-1 w-full lg:w-auto">
            <li>
              <Link 
                className={`nav-link px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/') ? 'text-accent font-semibold' : 'hover:text-accent'}`} 
                to="/"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-home me-2"></i>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/about') ? 'text-accent font-semibold' : 'hover:text-accent'}`} 
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-school me-2"></i>
                عن المدرسة
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/industrial') ? 'text-accent font-semibold' : 'hover:text-accent'}`} 
                to="/industrial"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-industry me-2"></i>
                الفرع الصناعي
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/specialties') ? 'text-accent font-semibold' : 'hover:text-accent'}`} 
                to="/specialties"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-graduation-cap me-2"></i>
                التخصصات
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/gallery') ? 'text-accent font-semibold' : 'hover:text-accent'}`} 
                to="/gallery"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-images me-2"></i>
                معرض الصور
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link px-3 py-2 rounded-md transition-colors duration-200 ${isActive('/contact') ? 'text-accent font-semibold' : 'hover:text-accent'}`} 
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-envelope me-2"></i>
                تواصل معنا
              </Link>
            </li>
            <li className="flex items-center mt-2 lg:mt-0">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="nav-link flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 hover:text-accent"
                aria-label="تبديل الوضع الليلي"
              >
                <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                <span className="hidden lg:inline">{darkMode ? 'فاتح' : 'داكن'}</span>
              </button>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

