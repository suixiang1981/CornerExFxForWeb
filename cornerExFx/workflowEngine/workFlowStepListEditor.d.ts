import { TitleWindow } from "../containers/titleWindow/titleWindow";
export declare class WorkFlowStepListEditor extends TitleWindow {
    private workFlowUserListEditor;
    private workFlowNextListEditor;
    constructor();
    private listDataEditor;
    private workFlowId;
    load(workFlowId: number): void;
}
