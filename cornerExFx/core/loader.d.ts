declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;
declare class Loader {
    private static getRequireUrl;
    static moduleDict: object;
    static loadCSS(url: string): void;
    static loadModule(module: string, loadedCallback?: () => void): void;
    static getModuleClass(module: string, className: any): any;
    private static requireConfig;
    static loadJSModule(module: string, url: string, classes: string[], loadedCallback?: () => void): void;
    static define(moduleNames: string[], onLoad: (...args: any[]) => void): void;
    static setRequireConfig(config: Object): void;
    static loadTXTAsync(url: string, loadCallback: (text: string) => void, progressCallback?: (loaded: number, total: number) => void, startCallback?: () => void, errorCallback?: () => void, isCacheEnabled?: boolean): void;
    private static textDict;
    static loadTXT(url: string, isCacheEnabled?: boolean): string;
}
