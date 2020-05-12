sap.ui.define([
	"./BaseController",
	"sap/m/MessageToast"
], function (
	BaseController,
	MessageToast
) {
	"use strict";

	return BaseController.extend("vinibar.Login.controller.Login", {

		onInit: function (oEvent) {
			this.getRouter().getRoute("login").attachPatternMatched(this._onObjectMatched, this);
		},

		onLogin: function (oEvent) {
			if (this.getStorage().put("sessionToken", "sjkfhsui3y45723i45hjkrhgoi3u5hjkesfkjh38y4587irthukjsagfbljuw5rg7i54h")) {
				this.getRouter().navTo("home", {}, true);
			} else {
				MessageToast.show("Ocorreu um erro ao tentar entrar");
			}
		},


		_onObjectMatched: function (oEvent) {
			if (this.getStorage().get("sessionToken") === "sjkfhsui3y45723i45hjkrhgoi3u5hjkesfkjh38y4587irthukjsagfbljuw5rg7i54h") {
				this.getRouter().navTo("home", {}, true);
			}
		}

	});
});