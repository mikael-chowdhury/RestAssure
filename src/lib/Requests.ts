import axios, { AxiosResponse } from "axios";
import { Assertion, AssureResponse, Expects } from "../types/types";
import url from "url";
import { RestAssure } from "./RestAssure";
import { getExpects } from "./Expects";
import { getValueByKeyPath } from "../util/ObjectUtil";

export class AssureRequest<T> {
  assertions: Assertion<T>[] = [];

  constructor(private url: string, private method: string, private data?: object) {
    this.assertions = [];
  }

  expect = (thing: any) => {
    return getExpects<T>(this, thing);
  };

  done() {
    return this.then((res) => {});
  }

  then(callback: (response: AssureResponse<T>) => void): Promise<void> {
    return (RestAssure.Instance?.sendRequest(this.url, this.method, this.data) as Promise<AssureResponse<T>>)
      .then((response) => {
        this.assertions.forEach((assertion) => {
          if (!assertion.validator(response)) {
            throw new Error(
              `Expected ${assertion.key} to be ${JSON.stringify(
                assertion.expectedValue,
                null,
                4
              )}, found: ${JSON.stringify(getValueByKeyPath(assertion.key, response))}`
            );
          }
        });

        callback(response);
      })
      .catch((error) => {
        throw error;
      });
  }
}
