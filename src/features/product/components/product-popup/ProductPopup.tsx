import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  type FormProps,
  type UploadFile,
  type UploadProps,
} from "antd";
import { memo, useState, type FC } from "react";
import { useCategory } from "../../service/useCategory";
import { useProduct } from "../../service/useProduct";

type FieldType = {
  title: string;
  description: string;
  price: string;
  categoryId: string;
  stock: string;
  brand?: string;
};

const ProductPopup: FC<any> = ({ isModalOpen, handleCancel }) => {
  const { getAllCategories } = useCategory();
  const { createProduct } = useProduct();
  const { data } = getAllCategories();
  console.log(data);
  const [form] = Form.useForm();

  const categories = data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  const formData = new FormData();

  formData.append("title", values.title);
  formData.append("description", values.description);
  formData.append("price", values.price);
  formData.append("categoryId", values.categoryId);
  formData.append("stock", values.stock);
  if (values.brand) {
    formData.append("brand", values.brand);
  }

  files.forEach((file) => {
    formData.append("images", file);
  });

  createProduct.mutate(formData, {
      onSuccess: () => {
        form.resetFields();
        setFileList([]);
        setFiles([]);
        handleCancel();
      },
    });

};


  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const fList = newFileList
      .map((file) => file.originFileObj as File)
      .filter(Boolean);
    setFiles(fList);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      +<div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="flex justify-end">
      <Modal
        title="Create Product"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={handleCancel}
        okText="Create"
        cancelText="Cancel"
        footer={false}
      >
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Stock"
            name="stock"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Enter Stock" type="number" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Enter Description" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Enter Price" type="number" />
          </Form.Item>

          <Form.Item<FieldType> label="Category" name="categoryId" rules={[{ required: true, message: "Please input your password!" }]}>
            <Select options={categories} placeholder="Select Category" />
          </Form.Item>

          <Form.Item<FieldType> label="Brand" name="brand">
            <Input placeholder="Enter Brand" />
          </Form.Item>

          <div className="mb-4">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              fileList={fileList}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </div>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className="w-full" style={{ backgroundColor: "#BC8E5B", borderColor: "#BC8E5B", color: "white", padding: "16px" }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default memo(ProductPopup);
