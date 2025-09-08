import { memo } from 'react';
import Tables from '../components/tables.tsx/Tables';

const Product = () => {
  return (
    <div className="Product px-[1rem]">
      <h2 className='text-center text-[22px] py-[1rem]'>Products</h2>
      <Tables/>
    </div>
  );
};

export default memo(Product);

