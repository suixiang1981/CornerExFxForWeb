export declare class Progress {
    private static timerHandle;
    private static arcProgressBar;
    static show(label?: string, value?: number): void;
    private static clearTimer;
    static hide(): void;
}
