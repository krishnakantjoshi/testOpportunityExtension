sap.ui.controller("cus.crm.opportunity.CRM_OPPRTNTYExtension.view.extS3", {
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
	
	extHookGetDataForDetailScreen : function() {
		
        debugger;
	}
});