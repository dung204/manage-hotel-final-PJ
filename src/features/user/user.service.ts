"use client";
import HttpService from "@/common/services/http.service";
import { User } from "./user.types";

class UserApiService extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:8000",
    });
  }
  getUsers() {
    return this.get<User[]>("/user");
  }
  getUser(id: number) {
    return this.get<User>(`/user/${id}`);
  }
  updateUser(user: User) {
    return this.put<User>(`/user/${user._id}`, user);
  }
  createUser(user: Omit<User, "_id">) {
    return this.post<{
      isSuccess: boolean;
      message: string;
      error?: string;
      data?: User;
    }>("/user/create", user);
  }
}

const userApi = new UserApiService();

export default userApi;
