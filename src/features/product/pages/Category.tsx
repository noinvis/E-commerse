import { memo, useState } from "react";
import { Button, Form, Input, Modal, Popconfirm, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCategory } from "../store/useCategory";

const Categories = () => {
  const { getAllCategories, create, update, deleteCategory } = useCategory();
  const { data, isLoading } = getAllCategories();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const [form] = Form.useForm();

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
      render: (text: string) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      width: 200,
      render: (_: any, record: any) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="primary"
            ghost
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure delete this category?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="px-4">
        <p className="text-center text-[22px] py-[1rem]">Categories</p>
        <div className="flex justify-end pb-4">
            <Button onClick={handleCreate} style={{ backgroundColor: "#BC8E5B", borderColor: "#BC8E5B", color: "white", padding: "16px" }} >+ Add</Button>
        </div>
        <Table
            columns={columns}
            dataSource={data?.data || []}
            rowKey="id"
            loading={isLoading}
            pagination={{ pageSize: 8 }}
            bordered
        />

        <Modal
            title={edit ? "Edit Category" : "Add Category"}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={handleSubmit}
            okText="Create"
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
