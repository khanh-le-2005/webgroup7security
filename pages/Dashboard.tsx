import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { FaShieldVirus, FaServer, FaUserShield, FaChartLine } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'T2', threats: 40, blocked: 24 },
  { name: 'T3', threats: 30, blocked: 13 },
  { name: 'T4', threats: 20, blocked: 98 },
  { name: 'T5', threats: 27, blocked: 39 },
  { name: 'T6', threats: 18, blocked: 48 },
  { name: 'T7', threats: 23, blocked: 38 },
  { name: 'CN', threats: 34, blocked: 43 },
];

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-brand-navy text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
          <div className="mb-8 border-b border-gray-700 pb-4">
             <h1 className="text-3xl font-bold text-white">Dashboard</h1>
             <p className="text-gray-400 mt-1">Chào mừng trở lại, <span className="text-brand-accent font-semibold">{user?.name}</span> ({user?.email})</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              { label: 'Mối đe dọa đã chặn', value: '1,284', icon: <FaShieldVirus />, color: 'text-green-400' },
              { label: 'Server Uptime', value: '99.9%', icon: <FaServer />, color: 'text-blue-400' },
              { label: 'Người dùng Active', value: '12', icon: <FaUserShield />, color: 'text-brand-accent' },
              { label: 'Lưu lượng mạng', value: '4.2 TB', icon: <FaChartLine />, color: 'text-purple-400' },
            ].map((stat, i) => (
              <div key={i} className="bg-brand-light overflow-hidden shadow rounded-lg border border-gray-700">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`text-3xl ${stat.color}`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-400 truncate">{stat.label}</dt>
                        <dd className="text-lg font-medium text-white">{stat.value}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-brand-light rounded-lg border border-gray-700 p-6 mb-8">
             <h3 className="text-lg font-medium leading-6 text-white mb-4">Thống kê bảo mật tuần qua</h3>
             <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#112240', borderColor: '#374151', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Bar dataKey="threats" name="Phát hiện" fill="#EF4444" />
                    <Bar dataKey="blocked" name="Đã xử lý" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-brand-light shadow overflow-hidden sm:rounded-lg border border-gray-700">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-white">Thông tin chi tiết</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-400">Thông tin cá nhân và cấu hình tài khoản.</p>
            </div>
            <div className="border-t border-gray-700">
              <dl>
                <div className="bg-brand-navy/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Họ tên</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{user?.name}</dd>
                </div>
                <div className="bg-brand-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Email</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{user?.email}</dd>
                </div>
                 <div className="bg-brand-navy/50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">Vai trò</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2 uppercase">{user?.role}</dd>
                </div>
                <div className="bg-brand-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-400">ID Tài khoản</dt>
                  <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{user?.id}</dd>
                </div>
              </dl>
            </div>
          </div>
       </div>
    </div>
  );
};

export default Dashboard;