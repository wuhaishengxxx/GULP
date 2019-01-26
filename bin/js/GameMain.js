var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
