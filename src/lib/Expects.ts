import { assert } from "console";
import { Assertion } from "../types/types";
import { getValueByKeyPath } from "../util/ObjectUtil";
import { AssureRequest } from "./Requests";

export function getExpects<T>(req: AssureRequest<T>, thing: any) {
  return {
    to: {
      be: (value: any): AssureRequest<T> => {
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => getValueByKeyPath(thing, response) === value,
        } as Assertion<T>);
        return req;
      },
      notBe: (value: any): AssureRequest<T> => {
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => getValueByKeyPath(thing, response) !== value,
        } as Assertion<T>);
        return req;
      },
      toEqual: (value: object | Array<any>): AssureRequest<T> => {
        console.log();
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => getValueByKeyPath(thing, response) === value,
        } as Assertion<T>);
        return req;
      },
      toBeType: (value: string): AssureRequest<T> => {
        console.log();
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => typeof getValueByKeyPath(thing, response) === value,
        } as Assertion<T>);
        return req;
      },
      toBeGreaterThan: (value: number): AssureRequest<T> => {
        console.log();
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => (getValueByKeyPath(thing, response) as number) > value,
        } as Assertion<T>);
        return req;
      },
      toBeGreaterThanOrEqual: (value: number): AssureRequest<T> => {
        console.log();
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => (getValueByKeyPath(thing, response) as number) > value,
        } as Assertion<T>);
        return req;
      },
      toBeLessThan: (value: number): AssureRequest<T> => {
        console.log();
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => (getValueByKeyPath(thing, response) as number) <= value,
        } as Assertion<T>);
        return req;
      },
      toBeLessThanOrEqual: (value: number): AssureRequest<T> => {
        console.log();
        req.assertions.push({
          key: thing,
          expectedValue: value,
          validator: (response) => (getValueByKeyPath(thing, response) as number) <= value,
        } as Assertion<T>);
        return req;
      },
      toExist: (): AssureRequest<T> => {
        req.assertions.push({
          key: thing,
          validator: (response) => [null, undefined].indexOf(getValueByKeyPath(thing, response)) == -1,
        } as Assertion<T>);
        return req;
      },
      toHaveLength: (length: number): AssureRequest<T> => {
        req.assertions.push({
          key: thing,
          validator: (response) => (getValueByKeyPath(thing, response) as Array<any>).length === length,
        } as Assertion<T>);
        return req;
      },
    },
  };
}
