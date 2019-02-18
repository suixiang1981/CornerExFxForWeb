import { MainFrame } from "./mainFrame/mainFrame";
import { Util } from "./cornerExFx/core/util";
document.body.innerHTML="";
let m:MainFrame=new MainFrame();
Util.appendDisplayObject(document.body,m);