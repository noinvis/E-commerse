import { memo, useState, type FC } from "react";
import { useProduct } from "../../service/useProduct";
import image from "../../assets/image.png";
import { Button, Image, Select } from "antd";

const ProductView: FC<any> = ({ showModal }) => {
  const { getAllProducts, deleteProduct } = useProduct();

  const [limit, setLimit] = useState(0);
  const [order, setOrder] = useState<"latest" | "expensive" | "cheapest">(
    "latest"
  );
  const { data, isLoading } = getAllProducts({ limit, order });

  const handleLimit = (value: string) => {
    setLimit(Number(value));
  };
  const handleOrder = (value: "latest" | "expensive" | "cheapest") => {
    setOrder(value);
  };

  const limits = [
    {
      value: "",
      label: "All",
    },
    {
      value: "10",
      label: "10 Products",
    },
    {
      value: "50",
      label: "50 Products",
    },
    {
      value: "100",
      label: "100 Products",
    },
  ];
  const orders = [
    {
      value: "latest",
      label: "Latest",
    },
    {
      value: "expensive",
      label: "Expensive",
    },
    {
      value: "cheapest",
      label: "Cheapest",
    },
  ];

  if (isLoading) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col">
        <img src={image} alt="" width={300} />
        <p className="text-[30px] text-center max-[450px]:text-[25px]">
          No Products
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Select
            defaultValue={""}
            className="w-[200px]"
            placeholder="Select limit"
            optionFilterProp="label"
            onChange={handleLimit}
            options={limits}
          />
          <Select
            defaultValue={"latest"}
            className="w-[200px]"
            placeholder="Select Order"
            optionFilterProp="label"
            onChange={handleOrder}
            options={orders}
          />
        </div>
        <Button
          style={{
            backgroundColor: "#BC8E5B",
            borderColor: "#BC8E5B",
            color: "white",
            padding: "16px",
          }}
          onClick={showModal}
        >
          Add Product
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {data?.data?.allProducts?.map((item: any) => {
          const card =
            item.images?.length > 0
              ? `https://api.errorchi.uz/product/image/${item.images[0]}`
              : image;
          return (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
              <div className="pb-4 flex items-center justify-center">
                <Image
                  src={card}
                  alt=""
                  height={220}
                  className="object-cover"
                  width={"100%"}
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div>
                <p className="line-clamp-1 font-semibold">{item.title}</p>
                <p className="line-clamp-1 font-medium">{item.description}</p>
                <p className="font-medium">{item.price} USD</p>
                <p className="font-medium">{item.category.name}</p>
                <p className="mt-4 font-semibold">{item.user.fname}</p>
                <p className="line-clamp-1 font-medium">{item.user.email}</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <Button
                  type="primary"
                  className="w-full"
                  style={{
                    backgroundColor: "#BC8E5B",
                    borderColor: "#BC8E5B",
                    color: "white",
                    padding: "16px",
                  }}
                >
                  Update
                </Button>
                <Button
                  danger
                  onClick={() => deleteProduct.mutate({ id: item.id })}
                  className="w-full"
                  style={{
                    backgroundColor: "crimson",
                    borderColor: "crimson",
                    color: "white",
                    padding: "16px",
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(ProductView);
