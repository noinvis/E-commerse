import React, { memo } from "react";
import { Table, Space, Tag } from "antd";
import type { TableProps } from "antd";

interface UserType {
  key: string;
  id: number;
  fname: string;
  lname: string;
  isActive: boolean;
  address: string;
  email: string;
  role: string;
}

const columns: TableProps<UserType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "fname",
    key: "fname",
  },
  {
    title: "Surname",
    dataIndex: "lname",
    key: "lname",
  },
  {
    title: "Status",
    dataIndex: "isActive",
    key: "isActive",
    render: (isActive: boolean) =>
      isActive ? (
        <Tag color="green">Active</Tag>
      ) : (
        <Tag color="red">Inactive</Tag>
      ),
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role: string) => (
      <Tag color={role === "admin" ? "blue" : "orange"}>{role}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <button className="bg-green-500 text-white p-[5px] rounded-[4px]">
          Edit
        </button>
        <button className="bg-red-500 text-white p-[5px] rounded-[4px]">
          Delete
        </button>
      </Space>
    ),
  },
];

const data: UserType[] = [
  {
    key: "1",
    id: 4,
    fname: "Ali",
    lname: "Valiyev",
    isActive: false,
    address: "Tashkent, Uzbekistan",
    email: "muhammadsodiqmuhammadjanov36@gmail.com",
    role: "user",
  },
  {
    key: "2",
    id: 7,
    fname: "Muhammadyusuf",
    lname: "Latifov",
    isActive: false,
    address: "Tashkent, Uzbekistan",
    email: "muhammadyusuf_2008m1@icloud.com",
    role: "user",
  }
];

const UserTable: React.FC = () => (
  <Table<UserType> columns={columns} dataSource={data} />
);

export default memo(UserTable);
