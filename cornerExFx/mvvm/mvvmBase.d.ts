import { Dictionary } from "../core/dictionary";
import { DateDataType } from "../core/util";
import { HttpClient } from "../communication/httpClient";
import { FXEvent } from "../core/fXEvent";
import { ArrayCollection } from "../core/arrayCollection";
import { SeriesType } from "../controls/charts/charts";
export declare class MVVMListInfo {
    name: string;
    idField: MVVMField;
    labelField: MVVMField;
    iconField: MVVMField;
    colorField: MVVMField;
    orderField: MVVMField;
    isDESC: boolean;
    dataFields: Dictionary<string, MVVMField>;
    chart: MVVMChartInfo;
}
export declare enum MVVMChartType {
    composite = 0,
    pie = 1,
    annulus = 2
}
export declare class MVVMChartInfo {
    type: MVVMChartType;
    show: boolean;
    recordField: string;
    valueField: string;
    percentHeight: number;
    series: Array<MVVMChartSeriesInfo>;
}
export declare class MVVMChartSeriesInfo {
    type: SeriesType;
    field: string;
    axisType: MVVMChartAxisType;
}
export declare enum MVVMChartAxisType {
    major = 0,
    minor = 1
}
export declare class MVVMTreeInfo extends MVVMListInfo {
    parentField: MVVMField;
}
export declare class MVVMField {
    name: string;
    label: string;
    isAdd: boolean;
    isEdit: boolean;
    isView: boolean;
    enabled: boolean;
    type: DatabaseDataType;
    list: string;
    tree: string;
    cellWidth: number;
    maxLenght: number;
    minLenght: number;
    decimals: number;
    maxValue: number;
    minValue: number;
    dateDataType: DateDataType;
    controlType: MVVMControlType;
    controlPath: string;
    controlWidth: number;
    controlHeight: number;
    controlLabelWidth: number;
    controlPercentWidth: number;
    controlPercentHeight: number;
    controlIsNewLine: boolean;
    dialogWidth: number;
    dialogHeight: number;
    controlClass: string;
    inputEnabled: boolean;
    showCallButton: boolean;
}
export declare enum DatabaseDataType {
    Number = "Number",
    String = "String",
    Text = "Text",
    Date = "Date",
    Boolean = "Boolean",
    Buffer = "Buffer"
}
export declare class MVVMInfo {
    static ListInfoDict: Dictionary<string, MVVMListInfo>;
    static TreeInfoDict: Dictionary<string, MVVMTreeInfo>;
    static loadTreeInfo(name: string, httpClient: HttpClient, callback: (info: MVVMTreeInfo) => void): void;
    static loadListInfo(name: string, httpClient: HttpClient, callback: (info: MVVMListInfo) => void): void;
    private static loadInfo;
    static stringToMVVMControlType(str: string): MVVMControlType;
    static stringToDataType(str: string): DatabaseDataType;
}
export declare class FxMVVMEvent<T> extends FXEvent {
    items: ArrayCollection<T>;
    item: T;
    static readonly Load: string;
    static readonly Added: string;
    static readonly Edited: string;
    static readonly Deleted: string;
    xml: XMLDocument;
}
export declare enum MVVMControlType {
    String = "String",
    Text = "Text",
    MultilineText = "MultilineText",
    Date = "Date",
    File = "File",
    Files = "Files",
    ListSelect = "ListSelect",
    Number = "Number",
    Password = "Password",
    TreeSelect = "TreeSelect",
    Browse = "Browse",
    Other = "Other",
    Phone = "Phone"
}
