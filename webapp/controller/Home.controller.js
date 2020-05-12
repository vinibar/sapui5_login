sap.ui.define([
	"./BaseController",
	"../model/formatter",
	"sap/m/MessageToast"
], function (BaseController, formatter, MessageToast) {
	"use strict";

	return BaseController.extend("vinibar.Login.controller.App", {

		formatter: formatter,

		onInit: function () {
			this.getRouter().getRoute("home").attachPatternMatched(this._onObjectMatched, this);
		},

		onLogout: function () {
			this.getRouter().navTo("logout");
		},

		_onObjectMatched: function (oEvent) {
			this._validateSession();
		},

		_validateSession: function () {
			var sSessionToken = this.getStorage().get("sessionToken") || "";
			if (sSessionToken !== "sjkfhsui3y45723i45hjkrhgoi3u5hjkesfkjh38y4587irthukjsagfbljuw5rg7i54h") {
				MessageToast.show("Ocorreu um erro ao tentar entrar");
				this.getRouter().navTo("login", {}, true);
			}
		}
	});
});