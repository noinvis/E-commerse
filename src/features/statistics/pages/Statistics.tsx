import { memo } from 'react';
import StaticBoard from '../components/static-board/StaticBoard';
import Chart from '../components/chart/Chart';

const Statistics = () => {
  return (
    <div className="Statistics px-[30px] py-[30px]">
      <StaticBoard/>
      <div className='h-[450px] w-full'>
        <Chart/>
      </div>
    </div>
  );
};

export default memo(Statistics);