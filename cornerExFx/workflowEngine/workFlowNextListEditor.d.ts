import { TitleWindow } from "../containers/titleWindow/titleWindow";
export declare class WorkFlowNextListEditor extends TitleWindow {
    constructor();
    private listDataEditor;
    private workFlowId;
    load(stepId: number, workFlowId: number): void;
}
