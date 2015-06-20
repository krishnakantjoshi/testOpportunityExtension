sap.ui.controller("cus.crm.opportunity.CRM_OPPRTNTYExtension.view.extS4", {
    onInit : function () {
        //Execute onInit for the base class BaseMasterController
        sap.ca.scfld.md.controller.BaseDetailController.prototype.onInit.call(this);
    },
	
	extHookAddCustomHeaderFields : function(oEntry) {
        var oExtensionControl = this.byId("createdByInput");
        var extensionValue = oExtensionControl.getValue();
        oEntry.extCreatedBy = extensionValue;
	}
});