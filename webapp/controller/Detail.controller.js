sap.ui.define(
    [
      'sap/ui/core/mvc/Controller',
      'sap/ui/core/UIComponent',
      'sap/ui/core/routing/History',
    ],
    function (Controller, UIComponent, History) {
      'use strict';
  
      return Controller.extend('testapp.controller.Detail', {
        onInit: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute('detail')
            .attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
          this.getView().bindElement({
            path: '/продукция/' + oEvent.getParameter('arguments').productPath,
            model: 'product',
          });
        },
        onNavBack: function () {
          var oHistory = History.getInstance();
          var sPreviousHash = oHistory.getPreviousHash();
  
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            var oRouter = UIComponent.getRouter(this);
            oRouter.navTo('overview', {}, true);
          }
        },
      });
    },
  );
  