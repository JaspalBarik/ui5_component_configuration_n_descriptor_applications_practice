sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("componentconfigurationpractice.controller.View1", {
        onInit() {
        },

     // Function executed when the button is clicked
        onShowDetails: function() {

             // Get the employee model from the view
            var oModel = this.getView().getModel("employee");

            // Get employee name from JSONModel
            var sName = oModel.getProperty("/employee/name");

             // Get employee department from JSONModel
            var sDepartment = oModel.getProperty("/employee/department");

            // Display employee information
            MessageToast.show(
                sName + " Works in " + sDepartment
            );
        }
    });
});