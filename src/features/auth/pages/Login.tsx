import { memo } from "react";
import type { FormProps } from "antd";
import { Alert, Button, Form, Input } from "antd";
import { useAuth } from "../service/useAuth";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn } = useAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        dispatch(setToken(res.data))
        navigate("/")
      }
    })
  };

  return (
    <div className="bg-slate-100 h-screen grid place-items-center">
      <div className="max-w-[450px] w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign in</h2>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          {signIn.isError && (
            <div className="mb-6">
              <Alert type="error" />
            </div>
          )}
          <Form.Item label={null}>
            <Button loading={signIn.isPending} type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default memo(Login);
