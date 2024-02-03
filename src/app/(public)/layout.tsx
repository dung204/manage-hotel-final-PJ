import Footer from "@/layouts/components/Footer";
import { Header } from "@/layouts/components/Header";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <div style={{minHeight: "100vh"}}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
