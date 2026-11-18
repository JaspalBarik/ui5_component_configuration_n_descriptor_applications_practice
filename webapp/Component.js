sap.ui.define([
    "sap/ui/core/UIComponent",
    "componentconfigurationpractice/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("componentconfigurationpractice.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

             // New: Set employee model at Component level
            this.setModel(models.createEmployeeModel(), "employee");

            // enable routing
            this.getRouter().initialize();
        }
    });
});