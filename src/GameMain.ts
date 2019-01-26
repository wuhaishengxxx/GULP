import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class TestUI extends ui.test.TestPageUI {

	constructor() {
		super();

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
	}
}






class GameMain {


	constructor(w: number = 640, h: number = 1136) {
		//程序入口
		Laya.init(w, h, WebGL);
		//激活资源版本控制
		Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

		function beginLoad() {
			Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
		}

		function onLoaded(): void {
			//实例UI界面
			var testUI: TestUI = new TestUI();
			Laya.stage.addChild(testUI);
		}
	}
}

new GameMain();



