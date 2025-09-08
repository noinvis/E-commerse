import { memo } from 'react';

const Product = () => {
  return (
    <div className="Product">
      <h2 className='text-center text-[22px] pt-[1rem]'>Product</h2>
    </div>
  );
};

export default memo(Product);