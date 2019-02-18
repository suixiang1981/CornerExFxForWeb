import { DisplayObject } from "../core/displayObject";
export declare class WorkFlowStepTitle extends DisplayObject {
    static isCSSLoaded: boolean;
    private workFlowStepTitleNumber;
    private workFlowStepTitleEditLabel;
    private workFlowStepTitleLabel;
    private workFlowStepTitleExpandIcon;
    private workFlowStepTitleExpand;
    constructor();
    color: string;
    number: number;
    titleLabel: string;
    editLabel: string;
    expandFunction: (isExpand: boolean) => void;
    private _expand;
    expand: boolean;
}
