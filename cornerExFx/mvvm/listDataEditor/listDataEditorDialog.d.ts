import { ListView } from "../../controls/listView/listView";
import { DataForm } from "../../mvvm/dataForm/dataForm";
import { TitleWindow } from "../../containers/titleWindow/titleWindow";
export declare class ListDataEditorDialog extends TitleWindow {
    private listDataAddDialogInnerPanel;
    private buttonOK;
    private buttonCancel;
    private _dataForm;
    private scrollPanel;
    private listDataName;
    private httpClient;
    private info;
    private listDataAddDialogBottom;
    private static isListDataEditorDialogCSSLoaded;
    readonly dataForm: DataForm;
    constructor(listDataName: string, isEditMode?: boolean, port?: number);
    private edit;
    private getXMLStr;
    private add;
    addingCallback: (xml: Element) => void;
    listSelectFieldWhereFunction: (field: string) => string;
    addCallback: (data: Element) => void;
    editCallback: (data: Element) => void;
    private isEditMode;
    private listView;
    showDialog(isToCenter?: boolean, listView?: ListView): void;
    private isControlsLoad;
}
