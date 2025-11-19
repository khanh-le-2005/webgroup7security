import React from 'react';

const TechIntroSection: React.FC = () => {
  return (
    <section className="bg-brand-navy py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">The Power of Open Source</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-accent shadow-lg hover:bg-brand-light/80 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                 <span className="text-brand-accent mr-3">AlienVault OSSIM</span>
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                Open Source Security Information Management (OSSIM) là nền tảng SIEM mã nguồn mở phổ biến nhất thế giới. Nó cung cấp một cái nhìn toàn diện về an ninh mạng bằng cách tích hợp nhiều công cụ bảo mật vào một nền tảng duy nhất.
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                 <li>Asset Discovery (Khám phá tài sản)</li>
                 <li>Vulnerability Assessment (Đánh giá lỗ hổng)</li>
                 <li>Threat Detection (Phát hiện mối đe dọa)</li>
                 <li>SIEM Event Correlation (Tương quan sự kiện)</li>
              </ul>
           </div>
           
           <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-blue shadow-lg hover:bg-brand-light/80 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                 <span className="text-brand-blue mr-3">OSSEC HIDS</span>
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                OSSEC là hệ thống phát hiện xâm nhập dựa trên máy chủ (Host-based Intrusion Detection System) mạnh mẽ. Nó hoạt động như một "camera an ninh" bên trong hệ thống của bạn, giám sát mọi hoạt động đáng ngờ.
              </p>
               <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                 <li>Log Analysis (Phân tích nhật ký)</li>
                 <li>File Integrity Monitoring (Giám sát toàn vẹn tệp)</li>
                 <li>Rootkit Detection (Phát hiện Rootkit)</li>
                 <li>Active Response (Phản ứng chủ động)</li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TechIntroSection;