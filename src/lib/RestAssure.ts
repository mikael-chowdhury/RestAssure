import { AssureResponse } from "../types/types";
import { AssureRequest } from "./Requests";
import url from "url";
import axios from "axios";

export class RestAssure {
  static Instance?: RestAssure;
  private serverURL?: string;

  constructor() {
    RestAssure.Instance = this;

    this.serverURL = undefined;
  }

  private static validate() {
    if (!RestAssure.Instance) throw new Error("Assure has not been initialised!");

    if (!RestAssure.Instance.serverURL)
      throw new Error("Assure Object has not been assigned a server to run tests on!");
  }

  useServer(serverURL: string): RestAssure {
    this.serverURL = serverURL;
    return this;
  }

  get<T>(path: string): AssureRequest<T> {
    RestAssure.validate();
    return new AssureRequest<T>(url.resolve(RestAssure.Instance?.serverURL as string, path), "get");
  }

  post<T>(path: string, data: any): AssureRequest<T> {
    RestAssure.validate();
    return new AssureRequest<T>(url.resolve(RestAssure.Instance?.serverURL as string, path), "post", data);
  }

  sendRequest<T>(url: string, method: string, data?: object): Promise<AssureResponse<T>> {
    return axios.request({
      method,
      url,
      data,
    });
  }
}
