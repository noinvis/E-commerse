import { memo } from 'react';
import UserTable from '../components/user-table/UserTable';

const User = () => {
  return (
    <div className="User px-[1rem]">
      <h2 className='text-center text-[22px] py-[1rem]'>Users</h2>
        <UserTable/>
    </div>
  );
};

export default memo(User);