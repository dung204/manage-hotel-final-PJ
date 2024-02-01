"use client";
import { BASE_ROUTE } from "@/common/enum/enum";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useLayoutEffect } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true);

  const router = useRouter();

  useLayoutEffect(() => {
    // isAuthenticated
    //   ? router.push(BASE_ROUTE.HOME)
    //   : router.push(BASE_ROUTE.LOGIN);
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default AuthProvider;
