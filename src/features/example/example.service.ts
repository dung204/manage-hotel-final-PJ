"use client";
import { Example } from "./example.types";
import HttpService from "@/common/services/http.service";

class ExampleApiService extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:8000",
    });
  }
  getExamples() {
    return this.get<Example[]>("/user");
  }
  getExample(id: number) {
    return this.get<Example>(`/user/${id}`);
  }
  updateExample(example: Example) {
    return this.put<Example>(`/user/${example.id}`, example);
  }
}

const exampleApi = new ExampleApiService();

export default exampleApi;
