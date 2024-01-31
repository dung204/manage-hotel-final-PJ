import Providers from "@/common/utils/Providers";
import Footer from "@/layouts/components/Footer";
import { Header } from "@/layouts/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đặt phòng khách sạn",
  description:
    "Tư vấn nhiệt tình. Thanh toán nhanh gọn. Đặt trực tuyến hoặc gọi ngay tổng đài. Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất. Xem ngay! Hỗ trợ tận tâm. Đảm bảo giá tốt nhất.",
};

interface IRootLayoutpProps extends PropsWithChildren {}

export default function RootLayout({ children }: IRootLayoutpProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
