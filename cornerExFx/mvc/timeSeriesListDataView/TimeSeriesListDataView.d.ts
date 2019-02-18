import { ListDataView } from "../listDataView/listDataView";
export declare class TimeSeriesListDataView extends ListDataView {
    private startingTime;
    private endingTime;
    constructor(name: string, port?: number, isDark?: boolean, multiLine?: boolean);
    private timeBarLabelDiv;
    private addTimeBar;
    protected _loadDataXMLFunction(xml: XMLDocument): void;
}
