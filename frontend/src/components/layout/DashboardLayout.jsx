// components/layout/DashboardLayout.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/SignIn');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`${!isSidebarOpen && 'hidden'} font-bold text-xl`}>Dashboard</h2>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h14M3 10h14M3 15h14" strokeWidth={2} strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            <button onClick={() => navigate('/dashboard')} className="w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Dashboard
            </button>
            <button onClick={() => navigate('/profile')} className="w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Profile
            </button>
            <button onClick={() => navigate('/saved-jobs')} className="w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Saved Jobs
            </button>
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-blue-700 rounded">
              Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Welcome, {user?.name}</h1>
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full"/>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;