import { AxiosResponse } from "axios";
import { RestAssure } from "../lib/RestAssure";
import { AssureRequest } from "../lib/Requests";
export declare type EmptyAssureCallback = (assure: RestAssure) => void;
export declare type AssureResponse<T> = AxiosResponse & {
    data: T;
};
export declare type Assertion<T> = {
    key: string;
    expectedValue: any;
    validator: (response: AssureResponse<T>) => boolean;
};
export declare type Expects<T> = {
    status: {
        to: {
            be: (value: number) => AssureRequest<T>;
        };
    };
};
