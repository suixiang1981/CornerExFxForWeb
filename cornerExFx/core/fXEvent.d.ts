import { EventDispatcher } from "./eventDispatcher";
export declare enum CollectionEventKind {
    Add = 0,
    Remove = 1,
    RemoveAll = 2
}
export declare enum ScrollDirection {
    Horizontal = 0,
    Vertical = 1
}
export declare class FXEvent {
    type: string;
    target: EventDispatcher;
    cancel: boolean;
}
export declare class FXDisplayEvent extends FXEvent {
    static readonly Added: string;
    static readonly Removed: string;
}
export declare class FXWindowEvent extends FXEvent {
    static readonly Closing: string;
    static readonly Close: string;
}
export declare class FXProgressEvent extends FXEvent {
    loaded: number;
    total: number;
    state: number;
    static readonly Load: string;
    static readonly Progress: string;
}
export declare class FXMouseEvent extends FXEvent {
    x: number;
    y: number;
    button: number;
    static readonly Click: string;
    static readonly DoubleClick: string;
    static readonly MouseDown: string;
    static readonly MouseUp: string;
    static readonly MouseOver: string;
    static readonly MouseMove: string;
    static readonly MouseOut: string;
}
export declare class FXCalendarLayoutChangeEvent extends FXEvent {
    newDate: Date;
    static readonly Change: string;
}
export declare class FXCollectionEvent<T> extends FXEvent {
    items: Array<T>;
    kind: CollectionEventKind;
    location: number;
    oldLocation: number;
    static readonly Change: string;
}
export declare class FXTreeEvent<T> extends FXEvent {
    item: T;
    static readonly ItemClose: string;
    static readonly ItemOpen: string;
    static readonly ItemOpening: string;
}
export declare class FXListEvent<T> extends FXEvent {
    newItem: T;
    oldItem: T;
    static readonly Change: string;
}
export declare class FXScrollEvent extends FXEvent {
    value: number;
    direction: ScrollDirection;
    static readonly Scroll: string;
}
export declare class FXResizeEvent extends FXEvent {
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
    oldClientWidth: number;
    oldClientHeight: number;
    oldScrollWidth: number;
    oldScrollHeight: number;
    static readonly ResizeStart: string;
    static readonly Resize: string;
    static readonly Resized: string;
}
export declare class FxDropdownEvent extends FXEvent {
    static readonly Open: string;
    static readonly Close: string;
}
