import { memo } from 'react';
import logo from '../assets/icon.png'

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
        <div className='size-[400px] duration-300'>
            <img src={logo}/>
        </div>
    </div>
  );
};

export default memo(Loading);