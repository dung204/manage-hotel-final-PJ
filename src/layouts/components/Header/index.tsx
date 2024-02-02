"use client";
import React from "react";
import { HeaderStyle } from "./Header.style";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";

export const Header = () => {
  return (
    <HeaderStyle className="header">
      <ContentWrapper>
        <div className="header__wrapper">
          <div className="header__logo">
            <Image src="/logo.svg" alt="" width={0} height={0} priority />
          </div>
          <nav></nav>
        </div>
      </ContentWrapper>
    </HeaderStyle>
  );
};
