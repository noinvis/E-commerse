import { memo } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <main className='flex-1 p-[1rem]'>
        <Header/>
        <div className='bg-[#e4e4e4] rounded-2xl min-h-[100%] overflow-y-auto'>
          <Outlet/>
        </div>
      </main>
    </div>
  );
};

export default memo(DashboardLayout);