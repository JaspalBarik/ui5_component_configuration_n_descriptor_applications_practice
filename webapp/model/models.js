sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        // New function: Creates the employee model
        createEmployeeModel: function() {

           // Create an empty JSONModel
            var oModel = new JSONModel();

            // Load employee data from employee.json
            oModel.loadData(
                sap.ui.require.toUrl(
                     "componentconfigurationpractice/model/employee.json"
                )
            );

           // Return the employee model
            return oModel;

        }
    };

});