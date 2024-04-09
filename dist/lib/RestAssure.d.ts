import { AssureResponse } from "../types/types";
import { AssureRequest } from "./Requests";
export declare class RestAssure {
    static Instance?: RestAssure;
    private serverURL?;
    constructor();
    private static validate;
    useServer(serverURL: string): RestAssure;
    get<T>(path: string): AssureRequest<T>;
    post<T>(path: string, data: any): AssureRequest<T>;
    sendRequest<T>(url: string, method: string, data?: object): Promise<AssureResponse<T>>;
}
