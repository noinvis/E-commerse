import { memo, useState } from "react";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCategory } from "../service/useCategory";
import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  id: number;
  role?: string;
}

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const { getAllCategories, create, update, deleteCategory } = useCategory();
  const { data, isLoading } = getAllCategories();
  const [form] = Form.useForm();

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode<CustomJwtPayload>(token) : null;

  const handleCreate = () => {
    setEdit(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (item: any) => {
    setEdit(item);
    form.setFieldsValue({ name: item.name });
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (edit) {
        update.mutate(
          { id: edit.id, ...values },
          {
            onSuccess: () => setIsModalOpen(false),
          }
        );
      } else {
        create.mutate(values, {
          onSuccess: () => setIsModalOpen(false),
        });
      }
    });
  };

  const handleDelete = (id: string) => {
    deleteCategory.mutate({ id });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 80,
      align: "center" as const,
    },
    {
      title: "Category Title",
      dataIndex: "name",
      render: (text: string) => <p className="font-medium">{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (_: any, item: any) => {                
        return user && (user.role === "owner" || user.id === item.user.id) ? (
          <Space>
            <Button
              icon={<EditOutlined />}
              type="primary"
              ghost
              onClick={() => handleEdit(item)}
            >
              Edit
            </Button>
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
          </Space>
        ) : <Button danger>Tegma kuyasan!</Button>;
      },
    },
  ];

  return (
    <div className="px-4">
      <p className="text-center text-[22px] py-[1rem]">Categories</p>
      <div className="flex justify-end pb-4">
        <Button
          onClick={handleCreate}
          style={{
            backgroundColor: "#BC8E5B",
            borderColor: "#BC8E5B",
            color: "white",
            padding: "16px",
          }}
        >
          Add Category
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data?.data || []}
        rowKey="id"
        loading={isLoading}
        pagination={{ pageSize: 9 }}
        bordered
      />

      <Modal
        title={edit ? "Edit Category" : "Add Category"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        okText={edit ? "Update" : "Create"}
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Category Name"
            name="name"
            rules={[{ required: true, message: "Please input category name" }]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default memo(Categories);
