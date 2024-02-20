"use client";
import { HeaderStyle } from "./Header.style";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { useAppSelector } from "@/common/lib/hooks";
import { useRouter } from "next/navigation";
import localStorageService from "@/common/services/localStorage.service";
import StoreKeys from "@/common/constants/storekeys";
import { User } from "@/features/user/user.types";

const navItems: { name: string; link: string }[] = [
  {
    name: "Khách sạn",
    link: "/",
  },
  {
    name: "Cẩm nang du lịch",
    link: "/",
  },
];

export const Header = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);

  useLayoutEffect(() => {
    // check login with default access token
  }, []);

  useEffect(() => {
    const setCloseDropDown = () => {
      setIsDropdown(false);
    };

    window.addEventListener("click", setCloseDropDown);

    return () => {
      window.removeEventListener("click", setCloseDropDown);
    };
  }, []);

  return (
    <HeaderStyle className="header">
      <ContentWrapper>
        <div className="header__wrapper">
          <Link href="/">
            <div className="header__logo">
              <Image src="/logo.svg" alt="" width={0} height={0} priority />
            </div>
          </Link>
          <nav className="header__nav">
            <ul className="header__nav__list">
              {navItems.map((navItem, index) => {
                return (
                  <li key={index}>
                    <Link className="nav__item" href={navItem.link}>
                      {navItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="block_right">
              <div
                className="block_right__user"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdown((prev) => !prev);
                }}
              >
                <Image
                  className="avatar"
                  alt="avatar"
                  src={
                    "https://res.ivivu.com/hotel/img/avatars/avatar-default-white.svg"
                  }
                  width={25}
                  height={25}
                ></Image>
                {auth.isAuth ? (
                  <Link href={`/auth/${auth.user?._id}`}>
                    {auth.user?.username}
                  </Link>
                ) : (
                  <div className="dropdown">
                    Tài khoản
                    <div
                      className={clsx("dropdown__menu", !isDropdown && "hide")}
                    >
                      <Link href="/sign-in" className="dropdown__button">
                        Đăng nhập
                      </Link>
                      <span className="dropdown__register">
                        <p>Chưa có tài khoản?</p>
                        <Link href="/register">Đăng kí ngay</Link>
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="block_right__contact">
                <p>Liên hệ</p>
                <p>1900 1870</p>
              </div>
            </div>
          </nav>
        </div>
      </ContentWrapper>
    </HeaderStyle>
  );
};
