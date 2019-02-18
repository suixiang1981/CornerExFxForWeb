import { DisplayObjectContainer } from "../../core/displayObjectContainer";
export declare class DialogWindow extends DisplayObjectContainer {
    private backDiv;
    private handle;
    private closeButton;
    protected left0: number;
    protected top0: number;
    private labelDiv;
    private _showCloseButton;
    private _moveEnabled;
    private static isCSSLoaded;
    moveEnabled: boolean;
    showCloseButton: boolean;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    private _label;
    label: string;
    protected setLeft(v: number): void;
    protected setTop(v: number): void;
    toCenter(): void;
    showDialog(isToCenter?: boolean): void;
    show(isToCenter?: boolean): void;
    hide(): void;
    visible: boolean;
}
