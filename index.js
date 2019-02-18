define(["require", "exports", "./mainFrame/mainFrame", "./cornerExFx/core/util"], function (require, exports, mainFrame_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.body.innerHTML = "";
    var m = new mainFrame_1.MainFrame();
    util_1.Util.appendDisplayObject(document.body, m);
});
//# sourceMappingURL=index.js.map