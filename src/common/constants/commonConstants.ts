import { TypeForm } from "@/app/(private)/login/page";

export const LOGIN_HEADING: {
  title: string;
  data: TypeForm;
}[] = [
  {
    title: "Đăng nhập",
    data: "login",
  },
  {
    title: "Đăng ký",
    data: "register",
  },
] as const;

export const BASE_API_URL = "http://localhost:8000";