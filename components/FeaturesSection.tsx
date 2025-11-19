import React from 'react';
import { FaSearch, FaBug, FaExclamationTriangle, FaNetworkWired, FaChartBar, FaFileCode } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-16 relative overflow-hidden scroll-mt-20" id="services">
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
          Unified Security
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-12 uppercase">
          Management Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
           {[
             { icon: <FaSearch />, title: "Asset Discovery", desc: "Tự động phát hiện và kiểm kê các thiết bị đang hoạt động trong mạng của bạn." },
             { icon: <FaBug />, title: "Vulnerability Assessment", desc: "Quét và xác định các lỗ hổng bảo mật tiềm ẩn trong hệ thống để vá kịp thời." },
             { icon: <FaExclamationTriangle />, title: "Intrusion Detection", desc: "Phát hiện các cuộc tấn công mạng (NIDS) và xâm nhập máy chủ (HIDS) trong thời gian thực." },
             { icon: <FaNetworkWired />, title: "Behavioral Monitoring", desc: "Giám sát lưu lượng mạng và hành vi hệ thống để phát hiện các bất thường." },
             { icon: <FaChartBar />, title: "SIEM & Correlation", desc: "Thu thập và phân tích log từ nhiều nguồn để liên kết các sự kiện rời rạc thành cảnh báo có ý nghĩa." },
             { icon: <FaFileCode />, title: "File Integrity Monitoring", desc: "Theo dõi sự thay đổi trái phép của các tệp tin hệ thống quan trọng (OSSEC)." },
           ].map((item, index) => (
             <div key={index} className="bg-brand-navy p-6 border border-brand-blue/20 rounded-lg hover:border-brand-accent/50 transition-all hover:-translate-y-1 group">
               <div className="text-brand-accent text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                 {item.icon}
               </div>
               <h3 className="text-white font-bold text-lg uppercase mb-2">{item.title}</h3>
               <p className="text-gray-400 text-sm">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;