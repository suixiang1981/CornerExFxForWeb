import { DisplayObject } from "../../core/displayObject";
export declare class EChartBase extends DisplayObject {
    private eChart;
    private oldWidth;
    private oldHeight;
    constructor();
    private loadJScript;
    setOption(option?: object): void;
    init(callback: () => void): void;
}
