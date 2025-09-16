import React, { memo } from "react";
import { Table, Space, Tag, Button, Popconfirm } from "antd";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useUser } from "../../service/useUser";

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

const UserTable: React.FC = () => {
  const { getAllUsers, deleteUser } = useUser();
  const { data: users, isLoading, error } = getAllUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Xatolik yuz berdi</p>;

  const data: UserType[] =
    users?.data?.map((item: any) => ({
      key: String(item.id),
      ...item,
    })) ?? [];

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
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} type="primary" ghost>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure delete this user?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteUser.mutate({ id: record.id })}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table<UserType> columns={columns} dataSource={data} />;
};

export default memo(UserTable);
