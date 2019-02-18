import { EventDispatcher } from "./eventDispatcher";
export declare class ArrayCollection<T> extends EventDispatcher {
    protected _items: Array<T>;
    readonly count: number;
    addItem(item: T): void;
    toArray(): Array<T>;
    addItemAt(item: T, index: number): void;
    removeItem(item: T): void;
    removeItemAt(index: number): void;
    getItemAt(index: number): T;
    removeAll(): void;
    contains(item: T): boolean;
    getItemIndex(item: T): number;
}
