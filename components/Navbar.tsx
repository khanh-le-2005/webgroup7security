import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // If we are not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-brand-navy/90 backdrop-blur-md fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FaShieldAlt className="text-brand-accent text-2xl" />
            <span className="text-white font-bold text-xl tracking-wider">OWP <span className="text-brand-blue font-light">SECURITY</span></span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="hover:text-brand-accent text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Trang chủ</Link>
              
              <button 
                onClick={() => scrollToSection('services')} 
                className="hover:text-brand-accent text-white px-3 py-2 rounded-md text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                Dịch vụ
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-brand-accent text-white px-3 py-2 rounded-md text-sm font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                Liên hệ
              </button>
              
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-brand-accent hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-brand-accent hover:bg-brand-accent/10 transition-all">
                    Dashboard ({user?.name})
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium">Đăng nhập</Link>
                  <Link to="/register" className="bg-brand-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors">Đăng ký</Link>
                </>
              )}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Trang chủ</Link>
            
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Dịch vụ
            </button>

             <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Liên hệ
            </button>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-brand-accent block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">Đăng xuất</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Đăng nhập</Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="text-brand-blue block px-3 py-2 rounded-md text-base font-medium">Đăng ký</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;