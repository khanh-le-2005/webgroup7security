import React from 'react';
import { FaUserTie, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-brand-navy py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
            Operational Team
          </h2>
          <p className="text-brand-blue font-medium text-lg tracking-wider uppercase mb-2">
            Đội ngũ chuyên gia
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Những chuyên gia hàng đầu với kinh nghiệm sâu rộng trong lĩnh vực an toàn thông tin, vận hành hệ thống giám sát và phản ứng sự cố.
          </p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Lê Văn Khánh",
              role: "Chief Security Officer",
              desc: "Sinh viên năm 3 của trường cao đẳng BTEC FPT. Tìm hiểu và xây dựng  hệ thống OSSIM và phòng chống tấn công mạng AlienVault ."
            },
            {
              name: "Phùng HOàng Long",
              role:"Student",
              // role: "Threat Analyst",
              desc: "Sinh viên năm 3 của trường cao đẳng BTEC FPT. Tìm hiểu và xây dựng  hệ thống OSSIM và phòng chống tấn công mạng AlienVault ."
            },
            {
              name: "Trần Văn Quang",
              role:"Student",
              // role: "Infrastructure Lead",
              desc: "Sinh viên năm 3 của trường cao đẳng BTEC FPT. Tìm hiểu và xây dựng  hệ thống OSSIM và phòng chống tấn công mạng AlienVault."
            },
            {
              name: "Văn Trung Hiếu",
              // role: "SOC Manager",
              role:"Student",
              desc: "Sinh viên năm 3 của trường cao đẳng BTEC FPT. Tìm hiểu và xây dựng  hệ thống OSSIM và phòng chống tấn công mạng AlienVault ."
            },
            {
              name: "Nguyễn Hùng Cường",
              role:"Student",
              // role: "Security Researcher",
              desc: "Sinh viên năm 3 của trường cao đẳng BTEC FPT. Tìm hiểu và xây dựng  hệ thống OSSIM và phòng chống tấn công mạng AlienVault ."
            }
          ].map((member, idx) => (
            <div key={idx} className="w-full md:w-[350px] bg-brand-light p-8 rounded-lg border border-brand-blue/10 hover:border-brand-accent/50 transition-all group text-center hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto bg-brand-navy rounded-full flex items-center justify-center mb-6 border-2 border-brand-blue group-hover:border-brand-accent transition-colors relative overflow-hidden">
                <FaUserTie className="text-4xl text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;