jQuery.sap.declare("cus.crm.opportunity.CRM_OPPRTNTYExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cus.crm.opportunity",


	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	// url: "/sap/bc/ui5_ui5/sap/CRM_OPPRTNTY"
	// Jerry fixed on 2015-06-02 12:57PM change to lower case to be adhere to component.js in My Opportunity application
	url: "/sap/bc/ui5_ui5/sap/crm_opprtnty"


	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});


this.cus.crm.opportunity.Component.extend("cus.crm.opportunity.CRM_OPPRTNTYExtension.Component", {
	metadata: {
		version : "1.0",
		
		config: {
		},
			
		customizing: {
		}			
	}
});