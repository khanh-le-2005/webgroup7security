import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaLock, FaUser } from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('123456'); // Default for easier testing
  const [error, setError] = useState('');
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination path or default to dashboard
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoadingLocal(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
    } finally {
      setIsLoadingLocal(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
       <div className="absolute inset-0 circuit-bg opacity-5 pointer-events-none"></div>
       
      <div className="max-w-md w-full space-y-8 bg-brand-light p-8 rounded-lg border border-brand-blue/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-wider">Đăng nhập</h2>
          <p className="mt-2 text-sm text-gray-400">
            Truy cập vào hệ thống bảo mật OWP
          </p>
          <p className="mt-2 text-xs text-brand-accent bg-brand-accent/10 py-1 px-2 rounded inline-block">
            Demo: admin@gmail.com / 123456
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 text-sm p-3 rounded">
              {error}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative mb-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-500" />
              </div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-700 placeholder-gray-500 text-white bg-brand-navy rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent focus:z-10 sm:text-sm transition-colors"
                placeholder="Địa chỉ Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-700 placeholder-gray-500 text-white bg-brand-navy rounded-md focus:outline-none focus:ring-brand-accent focus:border-brand-accent focus:z-10 sm:text-sm transition-colors"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoadingLocal}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-brand-navy bg-brand-accent hover:bg-brand-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingLocal ? 'Đang xử lý...' : 'Đăng Nhập'}
            </button>
          </div>
        </form>
        
        <div className="text-center text-sm">
           <p className="text-gray-400">
             Chưa có tài khoản?{' '}
             <Link to="/register" className="font-medium text-brand-accent hover:text-brand-blue">
               Đăng ký ngay
             </Link>
           </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;