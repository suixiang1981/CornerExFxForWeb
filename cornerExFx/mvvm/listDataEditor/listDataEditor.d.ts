import { ListDataView } from "../../mvc/listDataView/listDataView";
import { Dictionary } from "../../core/dictionary";
import { DataForm } from "../dataForm/dataForm";
export declare class ListDataEditor extends ListDataView {
    private listDataEditorAdd;
    private listDataEditorEdit;
    private listDataEditorDel;
    private addDialog;
    private editDialog;
    dataFormFunction: (dataForm: DataForm) => void;
    private port;
    constructor(name: string, port?: number, multiLine?: boolean);
    loadData(page?: number, where?: string): void;
    protected loadToolbar(): void;
    private edit;
    private del;
    private add;
    private addFunction;
    private addingFunction;
    private editFunction;
    private _additionalData;
    additionalData: Dictionary<string, string>;
    listSelectFieldWhereFunction: (field: string) => string;
    private listSelectFieldWhere;
}
