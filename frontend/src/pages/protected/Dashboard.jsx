// pages/protected/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) {
      navigate('/SignIn');
    }
    setUser(userData);
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {user?.role === 'employee' ? (
            <>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3>Posted Jobs</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3>Applications</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3>Active Jobs</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3>Applied Jobs</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3>Saved Jobs</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3>Interviews</h3>
                <p className="text-2xl font-bold">0</p>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;