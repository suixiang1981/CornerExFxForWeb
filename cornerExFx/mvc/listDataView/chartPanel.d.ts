import { DisplayObject } from "../../core/displayObject";
import { Charts } from "../../controls/charts/charts";
import { ListSelectField } from "../../controls/fields/listSelectField";
import { ArrayCollection } from "../../core/arrayCollection";
import { MVVMListInfo } from "../../mvvm/mvvmBase";
import { SeriesEditor } from "./seriesEditor";
export declare class ChartPanel extends DisplayObject {
    charts: Charts;
    private panel;
    private seriesBar;
    typeField: ListSelectField;
    recordField: ListSelectField;
    valueField: ListSelectField;
    private info;
    private static isCSSLoaded;
    protected _dataElement: Element;
    xmlDataProvider: Element;
    constructor(info: MVVMListInfo);
    private displayObjectAC;
    private typeString;
    private newXField;
    private newSeriesBar;
    private newValueField;
    seriesEditorAC: ArrayCollection<SeriesEditor>;
    addSeriesEditor(): SeriesEditor;
    removeSeriesEditor(): void;
    private type_change;
    private setControls;
    private setData;
}
export declare class SeriesBar extends DisplayObject {
    private static isCSSLoaded;
    private add;
    private del;
    addFunction: () => void;
    delFunction: () => void;
    constructor();
    delButtonVisible: boolean;
}
