import { DisplayObject } from "../core/displayObject";
import { TimeSeriesListDataView } from "../mvc/timeSeriesListDataView/TimeSeriesListDataView";
import { WorkFlowInfo, WorkFlowStepDefinition } from "./workFlowEngine";
import { Dictionary } from "../core/dictionary";
import { WorkFlowEditor } from "./workFlowEditor";
import { FXEvent } from "../core/fXEvent";
export declare class WorkFlowList extends DisplayObject {
    private step;
    private port;
    private listDataView;
    private isLoadData;
    loadData(): void;
    readonly listViewControl: TimeSeriesListDataView;
    loadDataFunction: (data: Element) => Element;
    private isToDo;
    private titleNow;
    private _where;
    where: string;
    private whereSys;
    constructor(step: WorkFlowStepDefinition, port?: number, where?: string, multiLine?: boolean);
    private open;
    refresh(): void;
    private addWorkFlowStepField;
    private showWorkFlowStepEditor;
    static editotDict: Dictionary<number, WorkFlowEditor>;
    static workFlowStepListDict: Dictionary<string, WorkFlowList>;
    static loadData(info: WorkFlowInfo): void;
}
export declare class FxWorkFlowEvent extends FXEvent {
    static readonly Show: string;
    editor: WorkFlowEditor;
}
