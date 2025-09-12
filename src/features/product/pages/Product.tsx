import { memo, useCallback, useState} from "react";
import ProductView from "../components/product-view/ProductView";
import ProductPopup from "../components/product-popup/ProductPopup";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback( () => {
    setIsModalOpen(true)
  }, [])

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, [])

  return (
    <section className="px-4">
      <p className="text-center text-[22px] py-[1rem]">Products</p>
      {
        isModalOpen && <ProductPopup isModalOpen={isModalOpen} handleCancel={handleCancel}/>
      }
      <ProductView showModal={showModal}/>
    </section>
  );
};

export default memo(Product);
