import React, { memo } from "react";
import { Table, Space, Tag, Button, Popconfirm } from "antd";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface ProductType {
  key: string;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  images: string[];
  stock: number;
  brand?: string;
}

const columns: TableProps<ProductType>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => `$${price}`,
  },
  {
    title: "Category ID",
    dataIndex: "categoryId",
    key: "categoryId",
  },
  {
    title: "Images",
    dataIndex: "images",
    key: "images",
    render: (images: string[]) => (
      <>
        {images.map((img, i) => (
          <Tag key={i} color="blue">
            {img}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="primary"
            ghost
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure delete this category?"
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
  },
];

const data: ProductType[] = [
  {
    key: "1",
    title: "iPhone 14",
    description: "Apple smartfoni",
    price: 999,
    categoryId: 1,
    images: ["iphone14-front.jpg", "iphone14-back.jpg"],
    stock: 20,
    brand: "Apple",
  },
  {
    key: "2",
    title: "Samsung Galaxy S23",
    description: "Samsung flagman smartfoni",
    price: 899,
    categoryId: 1,
    images: ["s23-front.jpg"],
    stock: 15,
    brand: "Samsung",
  },
  {
    key: "3",
    title: "AirPods Pro",
    description: "Simsiz quloqchinlar",
    price: 249,
    categoryId: 2,
    images: ["airpods-pro.jpg"],
    stock: 50,
    brand: "Apple",
  },
];

const ProductTable: React.FC = () => (
  <Table<ProductType> columns={columns} dataSource={data} />
);

export default memo(ProductTable);
