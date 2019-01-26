var B = /** @class */ (function () {
    function B() {
        console.error("B");
    }
    return B;
}());

var C = /** @class */ (function () {
    function C() {
        console.error("C");
    }
    return C;
}());

var t;
(function (t) {
    var A1 = /** @class */ (function () {
        function A1() {
        }
        return A1;
    }());
    t.A1 = A1;
})(t || (t = {}));

var t;
(function (t) {
    var A2 = /** @class */ (function () {
        function A2() {
        }
        return A2;
    }());
    t.A2 = A2;
})(t || (t = {}));

var t;
(function (t) {
    var A3 = /** @class */ (function () {
        function A3() {
        }
        return A3;
    }());
    t.A3 = A3;
})(t || (t = {}));

var t;
(function (t) {
    var A4 = /** @class */ (function () {
        function A4() {
        }
        return A4;
    }());
    t.A4 = A4;
})(t || (t = {}));

var t;
(function (t) {
    var A5 = /** @class */ (function () {
        function A5() {
        }
        return A5;
    }());
    t.A5 = A5;
})(t || (t = {}));

var t;
(function (t) {
    var A6 = /** @class */ (function () {
        function A6() {
        }
        return A6;
    }());
    t.A6 = A6;
})(t || (t = {}));

var t;
(function (t) {
    var A7 = /** @class */ (function () {
        function A7() {
        }
        return A7;
    }());
    t.A7 = A7;
})(t || (t = {}));

var t;
(function (t) {
    var A8 = /** @class */ (function () {
        function A8() {
        }
        return A8;
    }());
    t.A8 = A8;
})(t || (t = {}));

var t;
(function (t) {
    var A9 = /** @class */ (function () {
        function A9() {
        }
        return A9;
    }());
    t.A9 = A9;
})(t || (t = {}));

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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "child": [{ "props": { "x": 0, "y": 0, "skin": "comp/bg.png", "sizeGrid": "30,4,4,4", "width": 600, "height": 400 }, "type": "Image" }, { "props": { "x": 41, "y": 56, "skin": "comp/button.png", "label": "点我赋值", "width": 150, "height": 37, "sizeGrid": "4,4,4,4", "var": "btn" }, "type": "Button" }, { "props": { "x": 401, "y": 56, "skin": "comp/clip_num.png", "clipX": 10, "var": "clip" }, "type": "Clip" }, { "props": { "x": 220, "y": 143, "skin": "comp/combobox.png", "labels": "select1,select2,selecte3", "selectedIndex": 1, "sizeGrid": "4,20,4,4", "width": 200, "height": 23, "var": "combobox" }, "type": "ComboBox" }, { "props": { "x": 220, "y": 96, "skin": "comp/tab.png", "labels": "tab1,tab2,tab3", "var": "tab" }, "type": "Tab" }, { "props": { "x": 259, "y": 223, "skin": "comp/vscroll.png", "height": 150 }, "type": "VScrollBar" }, { "props": { "x": 224, "y": 223, "skin": "comp/vslider.png", "height": 150 }, "type": "VSlider" }, { "type": "List", "child": [{ "type": "Box", "child": [{ "props": { "skin": "comp/label.png", "text": "this is a list", "x": 26, "y": 5, "width": 78, "height": 20, "fontSize": 14, "name": "label" }, "type": "Label" }, { "props": { "x": 0, "y": 2, "skin": "comp/clip_num.png", "clipX": 10, "name": "clip" }, "type": "Clip" }], "props": { "name": "render", "x": 0, "y": 0, "width": 112, "height": 30 } }], "props": { "x": 452, "y": 68, "width": 128, "height": 299, "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "var": "list" } }, { "props": { "x": 563, "y": 4, "skin": "comp/btn_close.png", "name": "close" }, "type": "Button" }, { "props": { "x": 41, "y": 112, "skin": "comp/button.png", "label": "点我赋值", "width": 150, "height": 66, "sizeGrid": "4,4,4,4", "labelSize": 30, "labelBold": true, "var": "btn2" }, "type": "Button" }, { "props": { "x": 220, "y": 188, "skin": "comp/checkbox.png", "label": "checkBox1", "var": "check" }, "type": "CheckBox" }, { "props": { "x": 220, "y": 61, "skin": "comp/radiogroup.png", "labels": "radio1,radio2,radio3", "label2'": "", "var": "radio" }, "type": "RadioGroup" }, { "type": "Panel", "child": [{ "props": { "skin": "comp/image.png" }, "type": "Image" }], "props": { "x": 299, "y": 223, "width": 127, "height": 150, "vScrollBarSkin": "comp/vscroll.png" } }, { "props": { "x": 326, "y": 188, "skin": "comp/checkbox.png", "label": "checkBox2", "labelColors": "#ff0000" }, "type": "CheckBox" }, { "type": "Box", "child": [{ "props": { "y": 70, "skin": "comp/progress.png", "width": 150, "height": 14, "sizeGrid": "4,4,4,4", "name": "progress" }, "type": "ProgressBar" }, { "props": { "y": 103, "skin": "comp/label.png", "text": "This is a Label", "width": 137, "height": 26, "fontSize": 20, "name": "label" }, "type": "Label" }, { "props": { "y": 148, "skin": "comp/textinput.png", "text": "textinput", "width": 150, "name": "input" }, "type": "TextInput" }, { "props": { "skin": "comp/hslider.png", "width": 150, "name": "slider" }, "type": "HSlider" }, { "props": { "y": 34, "skin": "comp/hscroll.png", "width": 150, "name": "scroll" }, "type": "HScrollBar" }], "props": { "x": 41, "y": 197, "var": "box" } }], "props": { "width": 600, "height": 400 } };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));

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
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        new t.A1();
        new t.A2();
        new t.A3();
        new t.A4();
        new t.A5();
        new t.A6();
        new t.A7();
        new t.A8();
        new t.A9();
        new t.A10();
        new t.A11();
        new t.A11();
        new t.A12();
        new t.A13();
        new t.A14();
        new t.A15();
        new t.A16();
        return _this;
    }
    return TestUI;
}(ui.test.TestPageUI));
var GameMain = /** @class */ (function () {
    function GameMain(w, h) {
        if (w === void 0) { w = 640; }
        if (h === void 0) { h = 1136; }
        //程序入口
        Laya.init(w, h, WebGL);
        //激活资源版本控制
        Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
        function beginLoad() {
            Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
        }
        function onLoaded() {
            //实例UI界面
            var testUI = new TestUI();
            Laya.stage.addChild(testUI);
        }
    }
    return GameMain;
}());
new GameMain();

var t;
(function (t) {
    var A10 = /** @class */ (function () {
        function A10() {
        }
        return A10;
    }());
    t.A10 = A10;
})(t || (t = {}));

var t;
(function (t) {
    var A11 = /** @class */ (function () {
        function A11() {
        }
        return A11;
    }());
    t.A11 = A11;
})(t || (t = {}));

var t;
(function (t) {
    var A12 = /** @class */ (function () {
        function A12() {
        }
        return A12;
    }());
    t.A12 = A12;
})(t || (t = {}));

var t;
(function (t) {
    var A13 = /** @class */ (function () {
        function A13() {
        }
        return A13;
    }());
    t.A13 = A13;
})(t || (t = {}));

var t;
(function (t) {
    var A14 = /** @class */ (function () {
        function A14() {
        }
        return A14;
    }());
    t.A14 = A14;
})(t || (t = {}));

var t;
(function (t) {
    var A15 = /** @class */ (function () {
        function A15() {
        }
        return A15;
    }());
    t.A15 = A15;
})(t || (t = {}));

var t;
(function (t) {
    var A16 = /** @class */ (function () {
        function A16() {
        }
        return A16;
    }());
    t.A16 = A16;
})(t || (t = {}));
