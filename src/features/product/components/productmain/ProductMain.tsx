import { memo } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Product from "../../pages/Product";
import Category from "../../pages/Category";

const onChange = (key: string) => {
  console.log("Active tab:", key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Products",
    children: <Product />,
  },
  {
    key: "2",
    label: "Categories",
    children: <Category />,
  },
];

const ProductMain = () => {
  return (
    <div className="pt-4 px-4">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}/>
    </div>
  );
};

export default memo(ProductMain);
