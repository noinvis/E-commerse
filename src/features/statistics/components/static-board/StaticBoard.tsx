import { memo } from 'react';
import icon from '../../../../shared/assets/Icon.png'
import icon1 from '../../../../shared/assets/Icon (1).png'
import icon2 from '../../../../shared/assets/Icon (2).png'
import icon3 from '../../../../shared/assets/Icon (3).png'
import up from '../../../../shared/assets/ic-trending-up-24px.png'
import down from '../../../../shared/assets/ic-trending-down-24px.png'

const StaticBoard = () => {
  return (
    <div className="flex items-center justify-between">
        <div className='bg-white rounded-[14px] p-4 w-[350px]'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold text-[#777]'>Total User</p>
                    <p className='text-[28px] text-[#202224] font-semibold mt-3'>40,689</p>
                </div>
                <div>
                    <img src={icon} alt="icon" />
                </div>
            </div>
            <div className='flex items-center gap-[5px] mt-[30px]'>
                <img src={up} alt="up" />
                <span className='text-[#00B69B] font-semibold'>8.5%</span>
                <p className='text-[#606060] font-semibold'>Up from yesterday</p>
            </div>
        </div>
        <div className='bg-white rounded-[14px] p-4 w-[350px]'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold text-[#777]'>Total Order</p>
                    <p className='text-[28px] text-[#202224] font-semibold mt-3'>10,293</p>
                </div>
                <div>
                    <img src={icon1} alt="icon" />
                </div>
            </div>
            <div className='flex items-center gap-[5px] mt-[30px]'>
                <img src={up} alt="up" />
                <span className='text-[#00B69B] font-semibold'>1.3%</span>
                <p className='text-[#606060] font-semibold'>Up from past week</p>
            </div>
        </div>
        <div className='bg-white rounded-[14px] p-4 w-[350px]'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold text-[#777]'>Total Sales</p>
                    <p className='text-[28px] text-[#202224] font-semibold mt-3'>$89,000</p>
                </div>
                <div>
                    <img src={icon2} alt="icon" />
                </div>
            </div>
            <div className='flex items-center gap-[5px] mt-[30px]'>
                <img src={down} alt="up" />
                <span className='text-[#F93C65] font-semibold'>4.3%</span>
                <p className='text-[#606060] font-semibold'>Down from yesterday</p>
            </div>
        </div>
        <div className='bg-white rounded-[14px] p-4 w-[350px]'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold text-[#777]'>Total Pending</p>
                    <p className='text-[28px] text-[#202224] font-semibold mt-3'>2040</p>
                </div>
                <div>
                    <img src={icon3} alt="icon" />
                </div>
            </div>
            <div className='flex items-center gap-[5px] mt-[30px]'>
                <img src={up} alt="up" />
                <span className='text-[#00B69B] font-semibold'>1.8%</span>
                <p className='text-[#606060] font-semibold'>Up from yesterday</p>
            </div>
        </div>
        
    </div>
  );
};

export default memo(StaticBoard);