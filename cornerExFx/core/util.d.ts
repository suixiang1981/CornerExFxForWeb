import { DisplayObject } from "./displayObject";
export declare class Util {
    private static remove_ie_header_and_footer;
    static print(div: HTMLDivElement): void;
    static stringToDateDataType(str: string): DateDataType;
    static isNullStringValue(value: string): boolean;
    static isNullNumberValue(value: number): boolean;
    static skin: string;
    static getElementChildrenNamedItem(e: Element, name: string): Element;
    static getExtension(url: string): string;
    static getFileName(url: string): string;
    private static S4;
    static newGuid(): string;
    private static toString;
    static isMobile(): boolean;
    static stringToXml(str: string): XMLDocument;
    static xmlToString(xml: XMLDocument): string;
    static dateToString(date: Date, format?: DateFormat, dataType?: DateDataType): string;
    static addPreZero(num: number, len: number): string;
    static stringToDate(dateString: string): Date;
    static stringToNumber(numberString: string, decimals?: number): number;
    static numberToString(num: number, decimals?: number): string;
    static setElementStringAttribute(element: Element, attribute: string, value?: string): void;
    static setElementNumberAttribute(element: Element, attribute: string, value?: number): void;
    static setElementBooleanAttribute(element: Element, attribute: string, value?: boolean): void;
    static base64(obj: any): string;
    static setElementDateAttribute(element: Element, attribute: string, value?: Date): void;
    static getElementStringAttribute(element: Element, attribute: string, defaultValue?: string): string;
    static getElementNumberAttribute(element: Element, attribute: string, defaultValue?: number): number;
    static getElementBooleanAttribute(element: Element, attribute: string, defaultValue?: boolean): boolean;
    static getStringAttribute(obj: Object, attribute: string, defaultValue?: string): string;
    static getNumberAttribute(obj: Object, attribute: string, defaultValue?: number): number;
    static getBooleaAttribute(obj: Object, attribute: string, defaultValue?: boolean): boolean;
    static getElementById(id: string, element: HTMLElement): HTMLElement;
    static getElementByClass(className: string, element: HTMLElement): HTMLElement;
    static removeElement(parent: Element, element: Element): void;
    static appendElement(parent: Element, element: Element): void;
    static insertElement(newElement: HTMLElement, targetElement: HTMLElement, isAfter?: boolean): void;
    static removeDislayObject(parent: Element, displayObject: DisplayObject): void;
    static appendDisplayObject(parent: Element, displayObject: DisplayObject): void;
    static htmlElementToTop(htmlElement: HTMLElement): void;
    static htmlElementToBottom(htmlElement: HTMLElement): void;
    private static getZArr;
    private static getScrollbarWidth;
    static getWorldPosition(element: HTMLElement): Point;
}
export declare class Point {
    constructor(x: number, y: number);
    x: number;
    y: number;
}
export declare enum DateFormat {
    Default = 0,
    UnitedStates = 1,
    China = 2
}
export declare enum DateDataType {
    Date = 0,
    DateTime = 1,
    Time = 2,
    DateTimeHM = 3,
    TimeHM = 4
}
export declare class MIME {
    static readonly doc: string;
    static readonly docx: string;
    static readonly xls: string;
    static readonly xlsx: string;
    static readonly ppt: string;
    static readonly pptx: string;
    static readonly pdf: string;
    static readonly jpg: string;
    static readonly png: string;
    static readonly gif: string;
    static readonly tif: string;
    static readonly bmp: string;
    static readonly txt: string;
}
