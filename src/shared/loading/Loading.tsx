import { memo } from 'react';
import logo from '../assets/icon.png'

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
        <img src={logo} width={500} height={500}/>
    </div>
  );
};

export default memo(Loading);