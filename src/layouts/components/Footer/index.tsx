"use client";
import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import { FooterStyle } from "./Footer.style";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyle className="w-100">
      <ContentWrapper>
        <div className="grid grid-cols-3 gap-y-10 gap-x-44 py-6">
          <div className="flex flex-row col-span-2 py-10 justify-between">
            <div className="flex gap-x-20">
              <div className="flex flex-col gap-4 text-[#666666]">
                <h1 className="fs-3 text-black font-semibold">iVivu</h1>
                <p>Chúng tôi</p>
                <p>iViVu Blog</p>
                <p>Contact</p>
              </div>
              <div className="flex flex-col gap-4 text-[#666666]">
                <h1 className="fs-3 text-black font-semibold">Thông tin cần biết</h1>
                <p>Điều kiện & Điều khoản</p>
                <p>Quy chế hoạt động</p>
                <p>Câu hỏi thường gặp</p>
              </div>
              <div className="flex flex-col gap-4 text-[#666666]">
                <h1 className="fs-3 text-black font-semibold">Đối tác</h1>
                <p>Quy chế bảo hiểm Cathay</p>
                <p>Yêu cầu bồi thường Cathay</p>
                <p>Quy chế trả góp</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <p>thành viên của</p>
              <b>Thiên Minh Group</b>
              <Link href="https://tmgroup.vn/">
                <Image
                  alt="image"
                  src="https://res.ivivu.com/img/tmg_logo.webp"
                  width={500}
                  height={0}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-x-3">
            <b>Được chứng nhận</b>
            <div className="flex flex-row gap-4">
              <Link href="http://online.gov.vn/Home/WebDetails/21863">
                <Image
                  src="/logoCCDV.png"
                  alt="image"
                  className=""
                  width={300}
                  height={100}
                  style={{ objectFit: "none" }}
                />
              </Link>
              <Link href="#" className="">
                <Image
                  alt="image"
                  src="https://res.ivivu.com/img/iata_logo.webp"
                  width={300}
                  height={0}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row col-span-2 justify-between">
            <div className="flex flex-row w-100 gap-x-20">
              <Link
                href="https://www.worldtravelawards.com/profile-38227-ivivucom"
                className="flex flex-row gap-3 items-center text-black"
              >
                <Image
                  src="https://res.ivivu.com/hotel/img/ivv-agency-winner.svg"
                  alt="image"
                  className="w-24"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
                <b className="text-[#666666]">
                  Đại lý Du lịch Trực<br/> tuyến Hàng đầu<br/> Việt Nam
                </b>
              </Link>
              <Link
                href="https://www.worldtravelawards.com/profile-38227-ivivucom"
                className="flex flex-row gap-3 items-center text-black text-decoration-none"
              >
                <Image
                  src="https://res.ivivu.com/img/hraa-logo.png"
                  alt="image"
                  className="w-14"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
                <b className=" text-[#666666]">Best Companies<br/> to Work for in Asia </b>
              </Link>
              <Link
                href="https://www.worldtravelawards.com/profile-38227-ivivucom"
                className="flex flex-row gap-3 items-center text-black text-decoration-none"
              >
                <Image
                  src="https://res.ivivu.com/hotel/img/apea.png"
                  alt="image"
                  className="w-10"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
                <b className=" text-[#666666]">APEA Inspirational<br/> Brand Award </b>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <p className="text-[#666666] whitespace-nowrap font-semibold">Bạn cần trợ giúp? Hãy gọi ngay!</p>
            <Link href="tel:1900 1870">
              <p className="text-5xl font-bold text-[#f79321] hover:text-[#003c71] transition-all">1900 1870</p>
            </Link>
            <p className="text-xl">Tư vấn với Olivia - chatbot của iVIVU </p>
          </div>
          <div className="flex flex-col col-span-2 gap-y-5 text-2xl">
            <p>DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch đầu tư thành phố Hồ Chí Minh </p>
            <p><b>HCM:</b> Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh</p>
            <p><b>HN:</b> P308, Tầng 3, tòa nhà The One, số 2 Chương Dương Độ, P.Chương Dương, Q.Hoàn Kiếm, Hà Nội</p>
            <p><b>Cần Thơ:</b> Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ</p>
          </div>
          <div>
            <b>Đặt phòng dễ dàng hơn qua ứng dụng iVIVU</b>
            <div className="mt-10">
              <Image
                alt="image"
                src={"https://cdn1.ivivu.com/app-icon/iVIVUcode.png"}
                width={100}
                height={100}
                className="w-32"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </FooterStyle>
  );
};

export default Footer;
