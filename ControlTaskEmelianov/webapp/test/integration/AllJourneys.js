/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/ControlTaskEmelianov/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/ControlTaskEmelianov/test/integration/pages/Worklist",
	"zjblessons/ControlTaskEmelianov/test/integration/pages/Object",
	"zjblessons/ControlTaskEmelianov/test/integration/pages/NotFound",
	"zjblessons/ControlTaskEmelianov/test/integration/pages/Browser",
	"zjblessons/ControlTaskEmelianov/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.ControlTaskEmelianov.view."
	});

	sap.ui.require([
		"zjblessons/ControlTaskEmelianov/test/integration/WorklistJourney",
		"zjblessons/ControlTaskEmelianov/test/integration/ObjectJourney",
		"zjblessons/ControlTaskEmelianov/test/integration/NavigationJourney",
		"zjblessons/ControlTaskEmelianov/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});