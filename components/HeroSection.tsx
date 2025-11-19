import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaExclamationTriangle, FaSearch } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "Open Source Security",
      subTitle: "Powered by AlienVault & OSSEC",
      mainTitleLine1: "OSSIM &",
      mainTitleLine2: "OSSEC",
      mainTitleLine3: "INTEGRATED SECURITY",
      desc: "Complete Visibility. Unified Threat Detection.",
      icon: <FaShieldAlt className="text-7xl text-brand-accent drop-shadow-[0_0_15px_rgba(100,255,218,0.5)] mb-4" />,
      statusLines: ["OSSIM CORE: ONLINE", "OSSEC AGENT: ACTIVE"]
    },
    {
      id: 2,
      badge: "Real-time Monitoring",
      subTitle: "Advanced Threat Intelligence",
      mainTitleLine1: "PHÁT HIỆN",
      mainTitleLine2: "TẤN CÔNG",
      mainTitleLine3: "THỜI GIAN THỰC",
      desc: "Giám sát liên tục. Cảnh báo tức thì các hành vi đáng ngờ.",
      icon: <FaExclamationTriangle className="text-7xl text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] mb-4" />,
      statusLines: ["INTRUSION: DETECTED", "FIREWALL: BLOCKING"]
    },
    {
      id: 3,
      badge: "Asset Management",
      subTitle: "Vulnerability Scanning",
      mainTitleLine1: "QUẢN LÝ",
      mainTitleLine2: "TÀI SẢN &",
      mainTitleLine3: "LỖ HỔNG BẢO MẬT",
      desc: "Tự động quét và kiểm kê toàn bộ thiết bị trong hệ thống.",
      icon: <FaSearch className="text-7xl text-brand-blue drop-shadow-[0_0_15px_rgba(0,180,216,0.5)] mb-4" />,
      statusLines: ["SCANNING: 192.168.1.0/24", "VULNERABILITIES: FOUND"]
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden h-[800px] md:h-[700px] flex items-center">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-light to-transparent opacity-20 transform skew-x-12 translate-x-20 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-blue/5 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Slider Container */}
      <div className="w-full h-full absolute top-0 left-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                  <div className="inline-block">
                    <div className="bg-yellow-500 text-brand-navy font-bold px-4 py-1 transform -rotate-2 shadow-lg uppercase text-xs tracking-widest mb-4">
                      {slide.badge}
                    </div>
                  </div>
                  
                  <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm md:text-base mb-2">
                    <FaShieldAlt className="inline-block mr-2 mb-1" /> {slide.subTitle}
                  </h2>
                  
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
                    <span className="text-brand-blue block">{slide.mainTitleLine1}</span>
                    <span className="text-white block">{slide.mainTitleLine2}</span>
                    <span className="text-white block text-3xl md:text-5xl mt-2">{slide.mainTitleLine3}</span>
                  </h1>
                  
                  <p className="text-brand-blue/80 font-medium text-lg md:text-xl tracking-widest uppercase border-l-4 border-brand-accent pl-4">
                    {slide.desc}
                  </p>
                  
                  <div className="pt-8">
                    <Link to="/register" className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-sm shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all transform hover:scale-105 uppercase tracking-wider">
                      Triển khai ngay
                    </Link>
                  </div>
                </div>

                {/* Dynamic Graphic per Slide */}
                <div className="relative hidden md:flex justify-center items-center">
                  <div className="relative w-96 h-96">
                    <div className="absolute inset-0 border-4 border-brand-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border-2 border-brand-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
                      {slide.icon}
                      <div className="text-center font-mono text-xs text-brand-blue/80">
                          {slide.statusLines.map((line, idx) => (
                            <div key={idx}>{line}</div>
                          ))}
                      </div>
                    </div>
                    {/* Connecting Lines */}
                    <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent transform -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls (Dots) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-brand-accent shadow-[0_0_10px_#64ffda]' : 'bg-gray-600 hover:bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;