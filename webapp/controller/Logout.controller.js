sap.ui.define([
	"./BaseController"
], function (
	BaseController
) {
	"use strict";

	return BaseController.extend("vinibar.Login.controller.Logout", {

		onInit: function () {
			this.getRouter().getRoute("logout").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			this.getStorage().remove("sessionToken");
			this.getRouter().navTo("login", {}, true);
		}

	});
});