import { memo } from "react";
import type { FormProps } from "antd";
import { Alert, Button, Form, Input } from "antd";
import { useAuth } from "../service/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setToken } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../../../app/store";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        dispatch(setToken(res.data));
        dispatch(removeUser());
        navigate("/");
      },
    });
  };

  const message = signIn.error?.response?.data?.message;

  const errorMessage =
    typeof message === "string"
      ? message
      : message?.map((i: string, inx: number) => <p key={inx}>{i}</p>);

  return (
    <div className="bg-slate-100 h-screen grid place-items-center">
      <div className="max-w-[450px] w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Sign in</h2>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          initialValues={
            user ? { email: user.email, password: user.password } : {}
          }
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
              <Alert message={errorMessage} type="error" />
            </div>
          )}
          <div className="flex gap-[1rem] items-center">
            <Button
              loading={signIn.isPending}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Submit
            </Button>
            <Link to={"/register"} className="w-full flex justify-center rounded-[10px] py-[5px]">
              Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default memo(Login);
