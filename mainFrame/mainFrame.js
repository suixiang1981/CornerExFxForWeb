var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../cornerExFx/core/displayObject", "../cornerExFx/controls/button/button", "../cornerExFx/core/fXEvent", "../cornerExFx/containers/dialogWindow/dialogWindow"], function (require, exports, displayObject_1, button_1, fXEvent_1, dialogWindow_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MainFrame = /** @class */ (function (_super) {
        __extends(MainFrame, _super);
        function MainFrame() {
            var _this = _super.call(this) || this;
            _this.button.addEventListener(fXEvent_1.FXMouseEvent.Click, function (e) {
                alert("Hallo World");
                _this.dialogWindow.hide();
            });
            return _this;
        }
        MainFrame.prototype.createDisplayObject = function (className, element) {
            switch (className) {
                case "Button":
                    return new button_1.Button(element);
                case "DialogWindow":
                    return new dialogWindow_1.DialogWindow(element);
                default:
                    return null;
            }
        };
        MainFrame.prototype.getHtmlPath = function () {
            return "./mainFrame/mainFrame.html";
        };
        return MainFrame;
    }(displayObject_1.DisplayObject));
    exports.MainFrame = MainFrame;
});
//# sourceMappingURL=mainFrame.js.map