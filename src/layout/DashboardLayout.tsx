import { memo, useState } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useAuth } from '../features/auth/service/useAuth';

const DashboardLayout = () => {
  const { getProfile } = useAuth();
  const { data: user } = getProfile();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar toggle={toggle}/>
      <main className='flex-1 px-[1rem]'>
        <Header user={user} onToggle={() => setToggle((prev) => !prev)}/>
        <div className='bg-[#e4e4e4] rounded-2xl min-h-[100%] overflow-y-auto'>
          <Outlet/>
        </div>
      </main>
    </div>
  );
};

export default memo(DashboardLayout);