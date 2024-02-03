"use client";
import { useQuery } from "@tanstack/react-query";
import userApi from "./user.service";

const useGetUser = () => {
  const queryData = useQuery(["user/get"], {
    queryFn: () => userApi.getUsers(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetUser;
