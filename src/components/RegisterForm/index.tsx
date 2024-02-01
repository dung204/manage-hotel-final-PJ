import { Field, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../Button";

export interface IRegisterForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterFormSchema = Yup.object().shape<
  Record<keyof IRegisterForm, Yup.AnySchema>
>({
  username: Yup.string().required("Vui lòng nhập tên đăng nhập!"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  confirmPassword: Yup.string().required("Vui lòng nhập lại mật khẩu!"),
  email: Yup.string().email("Email không hợp lệ!"),
});

const initRegisterFormValue: IRegisterForm = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);

  return (
    <Formik
      initialValues={initRegisterFormValue}
      validationSchema={RegisterFormSchema}
      onSubmit={(value: IRegisterForm) => {
        console.log(value);
        toast.success("Đăng ký thành công");
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="loginForm__content">
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="Email">Email</label>
                <Field
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="username">Tên đăn nhập</label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="password">Mật khẩu</label>
                <Field
                  type={isPasswordShow ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="confirmPassword">Xác nhận</label>
                <Field
                  type={isPasswordShow ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                />
              </div>
            </div>
            <div className="showPasswordBox">
              <label htmlFor="showPassword">Hiển thị mật khẩu</label>
              <input
                type="checkbox"
                id="showPassword"
                checked={isPasswordShow}
                onChange={() => setIsPasswordShow(!isPasswordShow)}
              />
            </div>
            <div className="controlGroup">
              <Button btnStyle="primary" type="submit">
                Đăng ký
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
