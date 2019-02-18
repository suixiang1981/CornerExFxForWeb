export declare class Dictionary<TKey, TValue> {
    private keyArray;
    private object;
    readonly keys: Array<TKey>;
    add(key: TKey, value: TValue): void;
    remove(key: TKey): void;
    containsKey(key: TKey): boolean;
    getValue(key: TKey): TValue;
    clear(): void;
}
