import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../Button";
import userApi from "@/features/user/user.service";

export interface IRegisterForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterFormSchema = Yup.object().shape<
  Record<keyof IRegisterForm, Yup.AnySchema>
>({
  username: Yup.string()
    .required("Vui lòng nhập tên đăng nhập!")
    .min(6, "Tên người dùng từ 6 đến 20 kí tự!")
    .max(20, "Tên người dùng từ 6 đến 20 kí tự!"),
  password: Yup.string()
    .required("Vui lòng nhập mật khẩu!")
    .min(6, "Mật khẩu từ 6 đến 20 kí tự!")
    .max(20, "Mật khẩu từ 6 đến 20 kí tự!"),
  confirmPassword: Yup.string()
    .required("Vui lòng nhập lại mật khẩu!")
    .min(6, "Mật khẩu từ 6 đến 20 kí tự!")
    .max(20, "Mật khẩu từ 6 đến 20 kí tự!"),
  email: Yup.string()
    .email("Email không hợp lệ!")
    .required("Vui lòng nhập email!"),
});

const initRegisterFormValue: IRegisterForm = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);

  const handleRegister = async (
    value: IRegisterForm,
    formikHelpers: FormikHelpers<IRegisterForm>,
  ) => {
    if (value.password !== value.confirmPassword) {
      return toast.error("Mật khẩu không trùng khớp!");
    }
    try {
      const response = await userApi.createUser({
        email: value.email,
        username: value.username,
        password: value.password,
      });
      console.log("🚀 ~ RegisterForm ~ response:", response)

      if (response.data.isSuccess) {
        toast.success(response.data.message);
        formikHelpers.resetForm();
      } else toast.error(response.data.message);
    } catch (error) {
      toast.error("Có lỗi xảy ra! Vui lòng thử lại!");
    }
  };

  return (
    <Formik
      initialValues={initRegisterFormValue}
      validationSchema={RegisterFormSchema}
      onSubmit={handleRegister}
    >
      {({ errors, touched }) => {
        return (
          <Form className="loginForm__content">
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              {errors.email && touched.email ? (
                <p className="logError">{errors.email}</p>
              ) : null}
            </div>
            <div className="formGroup">
              <div className="formGroup__wrapper">
                <label htmlFor="username">Tên đăng nhập</label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>
              {errors.username && touched.username ? (
                <p className="logError">{errors.username}</p>
              ) : null}
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
              {errors.password && touched.password ? (
                <p className="logError">{errors.password}</p>
              ) : null}
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
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="logError">{errors.confirmPassword}</p>
              ) : null}
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
