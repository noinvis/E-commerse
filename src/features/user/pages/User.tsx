import { memo } from 'react';

const User = () => {
  return (
    <div className="User">
      <h2 className='text-center text-[22px] pt-[1rem]'>User</h2>
    </div>
  );
};

export default memo(User);