import { AssureRequest } from "./Requests";
export declare function getExpects<T>(req: AssureRequest<T>, thing: any): {
    to: {
        be: (value: any) => AssureRequest<T>;
        notBe: (value: any) => AssureRequest<T>;
        toEqual: (value: object | Array<any>) => AssureRequest<T>;
        toBeType: (value: string) => AssureRequest<T>;
        toBeGreaterThan: (value: number) => AssureRequest<T>;
        toBeGreaterThanOrEqual: (value: number) => AssureRequest<T>;
        toBeLessThan: (value: number) => AssureRequest<T>;
        toBeLessThanOrEqual: (value: number) => AssureRequest<T>;
        toExist: () => AssureRequest<T>;
        toHaveLength: (length: number) => AssureRequest<T>;
    };
};
