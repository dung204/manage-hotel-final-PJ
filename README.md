## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Quy chuẩn code
+ cameoCase: tên biến, tên hàm.
+ kebab-case: tên url/link
+ PascalCase: tên class, components.
+ UPPER_CASE: hằng số, biến enum....

Sử dụng yarn add/install, không sử dụng package manager khác.
Không push package.json, yarn.lock or package-lock.json, env, 
Format code trước khi push, theo .prettierrc, .eslintrc.js, .eslintrc.json.
Import package sử dụng path prefix @/, thay vì ./ hoặc ../ 

## Cấu trúc thư mục
1. __tests__ : test UI
2. @types : defined ra các global type trong PJ
3. app : app router (next14) [XEM Ở ĐÂY](https://nextjs.org/docs)
4. common : chứa các config thư viện, constants, custom hook, API service (thao tác với API, trong PJ có sử dụng reactQuery), utils chứa các function helpers
5. components : chứa common component
6. features : ví dụ về việc dùng react query để call API
7. layouts : chứa các components trong layout như header, footer, sidebar,...
8. support đa ngôn ngữ
