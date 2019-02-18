import { FXEvent } from "./fXEvent";
export declare class EventDispatcher {
    eventDict: Object;
    private eventId;
    addEventListener(eventType: string, listener: (event: FXEvent) => void): number;
    removeEventListener(eventType: string, listenerId: number): void;
    removeAllEventListener(eventType: string): void;
    dispatchEvent(event: FXEvent): void;
}
