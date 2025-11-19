import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPaperPlane, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Column 1: Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4">Liên Hệ Hợp Tác</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><span className="block text-white font-semibold mb-1">Điện thoại:</span> 0243.788.00.99</li>
              <li><span className="block text-white font-semibold mb-1">Hotline:</span> <span className="text-brand-accent">08.999.80.818</span></li>
              <li><span className="block text-white font-semibold mb-1">Email:</span> chamsockhachhang@owpsecurity.vn</li>
              <li className="text-white">
                <span className="block font-semibold mb-1">Địa chỉ:</span>
                Trường Cao đẳng FPT Polytechnic, Tòa nhà FPT Polytechnic,
                Cổng số 2, 13 Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội.

                <div className="mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863931182066!2d105.74468687503175!3d21.038129780613545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e940879933%3A0xcf10b34e9f1a03df!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1sen!2sus!4v1763565804364!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </li>

            </ul>
            <div className="mt-8">
              <h4 className="text-white text-sm font-semibold mb-3">Ứng dụng OSSIM Security</h4>
              <div className="flex flex-wrap gap-3">
                {/* Mock App Store Button */}
                <button className="flex items-center bg-black border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-900 transition border-white/20">
                  <FaApple className="text-2xl mr-2" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none text-gray-400">Tải về trên</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </button>
                {/* Mock Google Play Button */}
                <button className="flex items-center bg-black border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-900 transition border-white/20">
                  <FaGooglePlay className="text-xl mr-2 ml-1" />
                  <div className="text-left ml-2">
                    <div className="text-[10px] leading-none text-gray-400">Tải về trên</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Info */}
          <div>
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4">Thông tin</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Các gói dịch vụ</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Phương thức thanh toán</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Chính sách bảo mật và các điều khoản</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Hướng dẫn triển khai</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Các câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Chính sách điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* Column 3: Customer */}
          <div>
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4">Khách hàng</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Đăng nhập dành cho đối tác</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Tài khoản</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Gửi yêu cầu hỗ trợ</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Danh sách sự cố</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Lịch sử bảo trì</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors block">Chương trình Đối tác OWP</a></li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-4">Đăng ký nhận email</h3>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Email của bạn"
                className="bg-brand-navy border border-gray-600 text-sm p-3 rounded-l-md w-full focus:outline-none focus:border-brand-accent text-white placeholder-gray-500"
              />
              <button className="bg-gray-700 hover:bg-brand-accent hover:text-brand-navy px-4 rounded-r-md transition-colors border border-l-0 border-gray-600">
                <FaPaperPlane />
              </button>
            </div>

            <div className="flex space-x-3 mb-8">
              <a href="#" className="w-9 h-9 bg-[#3b5998] rounded flex items-center justify-center hover:opacity-90 transition text-white"><FaFacebookF /></a>
              <a href="#" className="w-9 h-9 bg-[#bd081c] rounded flex items-center justify-center hover:opacity-90 transition text-white"><FaYoutube /></a>
              <a href="#" className="w-9 h-9 bg-[#00acee] rounded flex items-center justify-center hover:opacity-90 transition text-white"><FaTwitter /></a>
              <a href="#" className="w-9 h-9 bg-[#C13584] rounded flex items-center justify-center hover:opacity-90 transition text-white"><FaInstagram /></a>
              <a href="#" className="w-9 h-9 bg-[#0072b1] rounded flex items-center justify-center hover:opacity-90 transition text-white"><FaLinkedinIn /></a>
            </div>

            <div className="text-xs text-gray-500 space-y-3">
              <p className="leading-relaxed">Giấy phép Kinh doanh số 0107641285 do Sở Kế Hoạch & Đầu Tư Thành Phố Hà Nội cấp ngày 21/11/2016</p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="h-10 w-auto bg-contain bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/1/11/Dathongbao.png")', width: '120px' }}></div>
                <div className="border border-gray-600 px-2 py-1 text-[10px] font-bold text-gray-400 hover:text-white cursor-pointer transition-colors">DMCA PROTECTED</div>
              </div>
            </div>
          </div>

        </div>

        {/* <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">Bạn đang truy cập OWP Security Phiên bản Số 21T82024 với địa chỉ IP: 59.153.224.241</p>
            <p className="text-gray-600 text-xs mt-2">© 2023 OWP Security. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;