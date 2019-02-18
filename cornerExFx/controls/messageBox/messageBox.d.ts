export declare class MessageBox {
    private static messageBox;
    private static messageBoxOKYesButton;
    private static messageBoxNoButton;
    private static messageBoxCancelButton;
    private static messageBoxLabel;
    private static messageBoxErrorIcon;
    private static messageBoxWarningIcon;
    private static messageBoxInformationIcon;
    private static messageBoxBottom;
    private static backDiv;
    private static timeHandler;
    private static callback;
    private static buttons;
    static show(text: string, title: string, buttons?: MessageBoxButtons, icon?: MessageBoxIcon, callback?: (button: MessageBoxButton) => void, width?: number, height?: number): void;
    static hide(): void;
}
export declare enum MessageBoxButton {
    OK = 0,
    Yes = 1,
    No = 2,
    Cancel = 3
}
export declare enum MessageBoxButtons {
    OK = 0,
    OKCancel = 1,
    YesNo = 2,
    YesNoCancel = 3
}
export declare enum MessageBoxIcon {
    Information = 0,
    Warning = 1,
    Error = 2
}
