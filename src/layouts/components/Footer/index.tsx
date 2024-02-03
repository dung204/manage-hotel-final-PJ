"use client"
import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import { FooterStyle } from "./Footer.style";
import Image from "next/image";

const Footer = () => {
  return <FooterStyle className="w-100">
    <ContentWrapper>
      <div className="d-flex py-4 ">
        <div className="d-flex gap-5">
          <div className="d-flex flex-column gap-4">
            <h1 className="fs-3">iVivu</h1>
            <p>Chúng tôi</p>
            <p>iViVu Blog</p>
            <p>Contact</p>
          </div>
          <div className="d-flex flex-column gap-4">
            <h1 className="fs-3">Thông tin cần biết</h1>
            <p>Điều kiện & Điều khoản</p>
            <p>Quy chế hoạt động</p>
            <p>Câu hỏi thường gặp</p>
          </div>
          <div className="d-flex flex-column gap-4">
            <h1 className="fs-3">Đối tác</h1>
            <p>Quy chế bảo hiểm Cathay</p>
            <p>Yêu cầu bồi thường Cathay</p>
            <p>Quy chế trả góp</p>
          </div>
        </div>
        
      </div>
    </ContentWrapper>
  </FooterStyle>;
};

export default Footer;
