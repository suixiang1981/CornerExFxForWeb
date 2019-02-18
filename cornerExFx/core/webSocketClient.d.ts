import { EventDispatcher } from "./eventDispatcher";
export declare class WebSocketClient extends EventDispatcher {
    private timer;
    private socket;
    private url;
    constructor(url: string);
    start(): void;
    stop(): void;
    private connect;
    private closeSocket;
    sendString(str: string): void;
    sendBinary(binary: ArrayBuffer): void;
    private data;
}
