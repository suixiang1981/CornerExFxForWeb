import { EventDispatcher } from "../core/eventDispatcher";
import { ContentType } from "./contentType";
export declare class HttpClient extends EventDispatcher {
    static postFunction: (data: any, contentType: ContentType) => any;
    static getFunction: (data: any, contentType: ContentType) => any;
    static callbackFunction: (data: any) => any;
    constructor(port?: number, host?: string);
    protected _port: number;
    readonly port: number;
    protected _host: string;
    post(data: any, contentType: ContentType, loadCallback?: (data: any) => void, progressCallback?: (loaded: number, total: number) => void, startCallback?: () => void, errorCallback?: () => void): void;
    get(data: any, contentType: ContentType, loadCallback?: (data: any) => void, progressCallback?: (loaded: number, total: number) => void, startCallback?: () => void, errorCallback?: () => void): void;
    private send;
}
