import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit logic
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-brand-navy py-20 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-brand-accent font-medium text-lg tracking-wider uppercase mb-2">
            Hỗ trợ 24/7
          </p>
          <div className="w-24 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-accent shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Thông tin văn phòng</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy p-3 rounded-lg text-brand-accent">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">Địa chỉ</h4>
                    <p className="text-gray-400 mt-1">Tòa nhà FPT Polytechnic., Cổng số 2, 13 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy p-3 rounded-lg text-brand-blue">
                    <FaPhone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">Hotline</h4>
                    <p className="text-gray-400 mt-1">+(84) 123-456-789</p>
                    <p className="text-gray-500 text-sm">Hỗ trợ kỹ thuật khẩn cấp (24/7)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-navy p-3 rounded-lg text-purple-400">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">Email</h4>
                    <p className="text-gray-400 mt-1">contact@owpsecurity.com</p>
                    <p className="text-gray-400">support@owpsecurity.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue/10 p-6 rounded-lg border border-brand-blue/30">
              <h4 className="text-brand-blue font-bold uppercase mb-2">Bạn cần tư vấn giải pháp?</h4>
              <p className="text-gray-300 text-sm">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng phân tích nhu cầu bảo mật của doanh nghiệp bạn và đề xuất giải pháp OSSIM/OSSEC tối ưu nhất.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-light p-8 rounded-lg border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Gửi tin nhắn</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="Nhập tên của bạn"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email doanh nghiệp</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Nội dung cần hỗ trợ</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-brand-navy border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder="Mô tả yêu cầu của bạn về triển khai OSSIM hoặc OSSEC..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-accent to-teal-600 hover:from-teal-400 hover:to-teal-700 text-brand-navy font-bold py-4 px-8 rounded-md shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" /> Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
