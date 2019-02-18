import { HttpClient } from "../communication/httpClient";
import { Dictionary } from "../core/dictionary";
import { ArrayCollection } from "../core/arrayCollection";
export declare class WorkFlowEngine {
    static userId: string;
    private static firstStepListCache;
    static getfirstStep(callback: (stepList: Dictionary<string, WorkFlowStepDefinition>) => void, isCache?: boolean, port?: number): void;
    static goBackFunction: (stepId: string, formId: string, formYear: number, formMonth: number, text: string) => string;
    static goBack(stepId: string, formId: string, formYear: number, formMonth: number, text: string, callback: (r: boolean) => void, port?: any): any;
    static submitFunciont: (stepId: string, formId: string, formYear: number, formMonth: any) => Dictionary<string, string>;
    static submit(stepId: string, formId: string, formYear: number, formMonth: number, callback: (r: boolean) => void, port?: any): any;
    static saveFunciont: (stepId: string, formId: string, formYear: number, formMonth: number, data: Dictionary<string, string>) => Dictionary<string, string>;
    static save(stepId: any, formId: any, formYear: number, formMonth: number, data: Dictionary<string, string>, callback: (time: Date, formId: string, userId: string, userLabel: string) => void, port?: number): void;
    private static stepList;
    static loadStepList(callback: (data: Array<WorkFlowStepDefinition>) => void, port?: number): void;
    private static loadStepBaseList;
    static close(stepId: any, formId: any, formYear: number, formMonth: number, port?: number): void;
    static editHeartbeat(stepId: any, formId: any, formYear: number, formMonth: number, port?: number): void;
    static load(stepId: any, formId: any, formYear: number, formMonth: number, callback: (workFlow: WorkFlowInfo) => void, isOpen?: boolean, port?: number): void;
    protected static httpClient: HttpClient;
    static createWorkFlowDataFunction: (stepId: string) => Dictionary<string, string>;
    static create(stepId: string, callback: (r: boolean, recordId: number, formId: string, year: number, month: number) => void, port?: number): void;
}
export declare class WorkFlowStepDefinition {
    stepId: string;
    stepLabel: string;
    workFlowId: string;
    workFlowLabel: string;
    number: number;
}
export declare class WorkFlowInfo {
    workFlowId: string;
    workFlowLabel: string;
    stepList: ArrayCollection<WorkFlowStepInfo>;
    readOnly: boolean;
    editingUserLabel: string;
}
export declare class WorkFlowStepInfo {
    recordId: number;
    formId: string;
    userId: string;
    stepLabel: string;
    context: string;
    createTime: Date;
    updateTime: Date;
    userLabel: string;
    state: WorkFlowState;
    stepId: string;
    formName: string;
    goBackEnabled: boolean;
    dataElement: Element;
    formMonth: number;
    formYear: number;
    port: number;
    users: string[];
    visible: boolean;
}
export declare enum WorkFlowState {
    NONE = 0,
    SAVE = 1,
    SUBMIT = 9,
    GOBACK = -1,
    COMPLETE = 10
}
