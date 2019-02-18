import { DisplayObject } from "../cornerExFx/core/displayObject";
import { Button } from "../cornerExFx/controls/button/button";
import { FXMouseEvent } from "../cornerExFx/core/fXEvent";
import { DialogWindow } from "../cornerExFx/containers/dialogWindow/dialogWindow";

export class MainFrame extends DisplayObject{
    protected button:Button;
    private dialogWindow:DialogWindow;
    constructor(){
        super();
        this.button.addEventListener(FXMouseEvent.Click,(e:FXMouseEvent)=>{
            alert("Hallo World");
            this.dialogWindow.hide();
        });
    }
    createDisplayObject(className:string,element :HTMLDivElement):DisplayObject{
        switch (className) {
            case "Button":
                return new Button(element); 
            case "DialogWindow":
                return new DialogWindow(element);  
            default:
            return null;
        }
    }
    getHtmlPath():string{
       return "./mainFrame/mainFrame.html";
    }
}