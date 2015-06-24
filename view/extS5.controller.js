sap.ui.controller("cus.crm.opportunity.CRM_OPPRTNTYExtension.view.extS5", {
    onInit : function () {
        //Execute onInit for the base class BaseMasterController
        sap.ca.scfld.md.controller.BaseDetailController.prototype.onInit.call(this);

        // Listener for navigation
//        this.isRoot = true;
//        this.oRouter.attachRouteMatched(function(oEvent) {
//            if (oEvent.getParameter("name") === "fsIssueForm") {
//                this.isRoot = false;
//            }
//        }, this);
    },
    
    extHookSaveOentry : function(oEntry) {
		var oExtensionControl = this.byId("createdByInputS5");
        var extensionValue = oExtensionControl.getValue();
        oEntry.extCreatedBy = extensionValue;
	}
});