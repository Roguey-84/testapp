sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("testapp.controller.View1", {
            onInit: function () {
                const oData = {
                    recipient: {
                        name: "World"
                    }
                };
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

            },
            onShowHello: function () {
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
