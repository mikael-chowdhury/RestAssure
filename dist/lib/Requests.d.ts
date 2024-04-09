import { Assertion, AssureResponse } from "../types/types";
export declare class AssureRequest<T> {
    private url;
    private method;
    private data?;
    assertions: Assertion<T>[];
    constructor(url: string, method: string, data?: object | undefined);
    expect: (thing: any) => {
        to: {
            be: (value: any) => AssureRequest<T>;
            notBe: (value: any) => AssureRequest<T>;
            toEqual: (value: object | any[]) => AssureRequest<T>;
            toBeType: (value: string) => AssureRequest<T>;
            toBeGreaterThan: (value: number) => AssureRequest<T>;
            toBeGreaterThanOrEqual: (value: number) => AssureRequest<T>;
            toBeLessThan: (value: number) => AssureRequest<T>;
            toBeLessThanOrEqual: (value: number) => AssureRequest<T>;
            toExist: () => AssureRequest<T>;
            toHaveLength: (length: number) => AssureRequest<T>;
        };
    };
    done(): Promise<void>;
    then(callback: (response: AssureResponse<T>) => void): Promise<void>;
}
