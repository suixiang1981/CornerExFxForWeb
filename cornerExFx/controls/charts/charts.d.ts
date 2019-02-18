import { EChartBase } from "./eChartsBase";
export declare class Charts extends EChartBase {
    constructor();
    protected _dataElement: Element;
    xmlDataProvider: Element;
    private _xAxis;
    private _yAxis;
    xAxis: Axis[];
    yAxis: Axis[];
    private _series;
    series: Series[];
    private _object;
    private timeHandler;
    draw(): void;
    private drawExec;
    private getData;
}
export declare class Axis {
    private _label;
    label: string;
    private _field;
    field: string;
    private _show;
    show: boolean;
    private _scale;
    scale: boolean;
    private _type;
    type: AxisType;
    private _min;
    min: number;
    private _max;
    max: number;
    private _logBase;
    logBase: number;
}
export declare enum AxisType {
    value = 0,
    category = 1,
    time = 2,
    log = 3
}
export declare class Series {
    protected _type: SeriesType;
    type: SeriesType;
    protected _label: string;
    label: string;
    protected _field: string;
    field: string;
    protected _yAxisIndex: number;
    yAxisIndex: number;
    protected _xAxisIndex: number;
    xAxisIndex: number;
}
export declare enum SeriesType {
    line = 0,
    bar = 1,
    pie = 2,
    annulus = 3,
    area = 4
}
export declare class PieSeries extends Series {
    protected _nameField: string;
    nameField: string;
    protected __type: SeriesType;
    readonly type: SeriesType;
}
export declare class AnnulusSeries extends PieSeries {
    protected _insideRadius: number;
    insideRadius: number;
    protected _outsideRadius: number;
    outsideRadius: number;
    protected __type: SeriesType;
    readonly type: SeriesType;
}
