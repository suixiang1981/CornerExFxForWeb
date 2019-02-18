import { DisplayObject } from "../../core/displayObject";
import { MVVMListInfo } from "../../mvvm/mvvmBase";
import { HttpClient } from "../../communication/httpClient";
export declare class WhereBar extends DisplayObject {
    protected httpClient: HttpClient;
    private info;
    private fieldListSelect;
    private operatorListSelect;
    private listSelectValue;
    private logicListSelect;
    private stringValue;
    private dateValue;
    private dateTimeValue;
    private numberValue;
    private button;
    private searchBarAddButton;
    private searchBarDelButton;
    private valuefield;
    addFunction: (whereBar: WhereBar) => void;
    delFunction: (whereBar: WhereBar) => void;
    searchFunction: () => void;
    constructor(info: MVVMListInfo, httpClient: HttpClient);
    private oldType;
    private oldDateDataType;
    private field;
    private oldList;
    private setValueField;
    private _location;
    location: WhereLocation;
    getWhere(): string;
}
export declare enum WhereLocation {
    First = 0,
    Last = 1,
    Middle = 2,
    OnlyOne = 3
}
