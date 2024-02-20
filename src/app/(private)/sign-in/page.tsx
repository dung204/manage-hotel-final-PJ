"use client";
import React from "react";
import { LoginPageStyle } from "./Login.style";
import ContentWrapper from "@/components/ContentWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import clsx from "clsx";
import { LOGIN_HEADING } from "@/common/constants/commonConstants";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export type TypeForm = "login" | "register";

const LoginPage = () => {
  const [formState, setFormState] = React.useState<TypeForm>("login");

  return (
    <LoginPageStyle>
      <ContentWrapper>
        <div className="content">
          <div className="row gx-0">
            <div className="col-6">
              <LazyLoadImage
                src="/loginBackground.jpg"
                alt=""
                wrapperClassName="imgWrapper"
                property=""
              />
            </div>
            <div className="col-6">
              <div className="loginForm">
                <div className="heading">
                  {LOGIN_HEADING.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => setFormState(item.data)}
                      className={clsx(formState === item.data && "active")}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

                {/* render form */}
                {formState === "login" ? (
                  <LoginForm />
                ) : (
                  // register form
                  <RegisterForm />
                )}
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </LoginPageStyle>
  );
};

export default LoginPage;
