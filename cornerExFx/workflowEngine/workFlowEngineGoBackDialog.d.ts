import { DialogWindow } from "../containers/dialogWindow/dialogWindow";
import { WorkFlowGoBackEditor } from "./workFlowGoBackEditor";
export declare class WorkFlowEngineGoBackDialog extends DialogWindow {
    private workFlowGoBackEditor;
    goBackEditorFunction: () => WorkFlowGoBackEditor;
    private buttonGoback;
    private buttonCancel;
    goBackCallback: (text: string) => void;
    loadEditor(): void;
    constructor();
}
