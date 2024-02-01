import Providers from "@/common/utils/Providers";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import AuthProvider from "@/provider/Auth.provider";
import "@/common/styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["400", "700", "900", "500", "100", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Đặt phòng khách sạn",
  description:
    "Tư vấn nhiệt tình. Thanh toán nhanh gọn. Đặt trực tuyến hoặc gọi ngay tổng đài. Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất. Xem ngay! Hỗ trợ tận tâm. Đảm bảo giá tốt nhất.",
};

interface IRootLayoutpProps extends PropsWithChildren {}

const toastConfig: ToastContainerProps = {
  position: "top-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  theme: "light",
};

export default function RootLayout({ children }: IRootLayoutpProps) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <AuthProvider>
            <ToastContainer {...toastConfig} />
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
