import { AxiosResponse } from "axios";
import { RestAssure } from "../lib/RestAssure";
import { AssureRequest } from "../lib/Requests";

export type EmptyAssureCallback = (assure: RestAssure) => void;
export type AssureResponse<T> = AxiosResponse & { data: T };
export type Assertion<T> = { key: string; expectedValue: any; validator: (response: AssureResponse<T>) => boolean };

export type Expects<T> = {
  status: {
    to: {
      be: (value: number) => AssureRequest<T>;
    };
  };
};
