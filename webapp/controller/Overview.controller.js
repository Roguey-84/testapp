sap.ui.define(
    [
      'sap/ui/core/mvc/Controller',
      'sap/ui/model/json/JSONModel',
    ],
    function (Controller, JSONModel) {
      'use strict';
  
      return Controller.extend('testapp.controller.Overview', {
        onInit: function () {
          var oProductsModel = this.getOwnerComponent()
            .getModel('product')
            .getProperty('/продукция');
          var iCountAll = oProductsModel.length;
          var oPriceCalculations = this._getProductCalculation(oProductsModel);
  
          var oViewModel = new JSONModel({
            currency: 'RUB',
            products: oProductsModel,
            countAll: iCountAll,
            priceSum: oPriceCalculations.iSum,
            priceAverage: oPriceCalculations.iAverage,
          });
  
          this.getView().setModel(oViewModel, 'view');
        },
  
        _getProductCalculation: function (products) {
          var iCount = 0;
          var iSum = 0;
          var iAverage = 0;
          for (var i = 0; i < products.length; i++) {
            if (products[i]['цена'] !== NaN) {
              iSum += products[i]['цена'];
              iCount++;
            }
          }
          iAverage = (iSum / iCount).toFixed(1);
          return { iSum, iAverage };
        },
  
        onPress: function (oEvent) {
          var oItem = oEvent.getSource();
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo(
            'detail',
            {
              productPath: oItem.getBindingContext('view').getPath().slice(-1),
            },
            false,
          );
        },
      });
    },
  );
  