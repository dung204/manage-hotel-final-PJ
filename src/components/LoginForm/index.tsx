import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Button from "../Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/common/lib/hooks";
import { loginThunk } from "@/common/lib/features/auth/authSlide";

export interface ILoginForm {
  username: string;
  password: string;
}

const LoginFormSchema = Yup.object().shape<
  Record<keyof ILoginForm, Yup.AnySchema>
>({
  username: Yup.string().trim().required("Vui lòng nhập tên đăng nhập!"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
});

const initLoginFormValue: ILoginForm = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [isPasswordShow, setIsPasswordShow] = React.useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) router.push("/");
  }, [auth]);

  const handleSubmitLogin = async (
    value: ILoginForm,
    formikHelpers: FormikHelpers<ILoginForm>,
  ) => {
    try {
      dispatch(loginThunk(value));
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra!");
    }
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
