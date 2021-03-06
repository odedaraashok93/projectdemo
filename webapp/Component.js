sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "projectdemo/model/models",
        "./controller/ErrorHandler",
    ],
    function (UIComponent, Device, models,ErrorHandler) {
        "use strict";

        return UIComponent.extend("projectdemo.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                this._oErrorHandler = new ErrorHandler(this);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);