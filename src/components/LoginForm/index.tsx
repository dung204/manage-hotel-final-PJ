import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../Button";
import useGetUser from "@/features/user/useGetUser";
import userApi from "@/features/user/user.service";

export interface ILoginForm {
  username: string;
  password: string;
}

const LoginFormSchema = Yup.object().shape<
  Record<keyof ILoginForm, Yup.AnySchema>
>({
  username: Yup.string().required("Vui lòng nhập tên đăng nhập!"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
});

const initLoginFormValue: ILoginForm = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);

  const handleSubmitLogin = async (
    value: ILoginForm,
    formikHelpers: FormikHelpers<ILoginForm>,
  ) => {
    const response = await userApi.checkLogin(value);
    console.log("🚀 ~ LoginForm ~ response:", response);

    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initLoginFormValue}
      validationSchema={LoginFormSchema}
      onSubmit={handleSubmitLogin}
    >
      {({ errors, touched }) => {
        return (
          <Form className="loginForm__content">
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="username">Tên đăng nhập</label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Tên đăng nhập"
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
            {(errors.username && touched.username) ||
            (errors.password && touched.password) ? (
              <p className="logError">
                Vui lòng kiểm tra lại thông tin đăng nhập!
              </p>
            ) : (
              <></>
            )}
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
                Đăng nhập
              </Button>
              <Button btnStyle="secondary" type="button">
                Quên mật khẩu
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
