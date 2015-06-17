// Jerry 2015-06-03: this line below is mandatory to successfully load component.js of standard application
// if it is missing, the component.js loading triggered by jQuery.sap.require("cus.crm.opportunity.Component");
// will be loaded via the folder /ui2/ushell/resources/cus/crm/opportunity/Component.js, which is definitely wrong!

jQuery.sap.registerModulePath("cus.crm.opportunity",'/sap/bc/ui5_ui5/sap/crm_opprtnty');
jQuery.sap.declare("cus.crm.opportunity.CRM_OPPRTNTYExtension.Component");
jQuery.sap.require("cus.crm.opportunity.Component");

// use the load function for getting the optimized preload file if present
/* Jerry 2015-06-02 18:23PM not need to use sap.ui.component.load explicitly to load standard opportunity
component, use jQuery.sap.require("cus.crm.opportunity.Component") instead.
sap.ui.component.load({
	name: "cus.crm.opportunity",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	// url: "/sap/bc/ui5_ui5/sap/CRM_OPPRTNTY"
	// Jerry fixed on 2015-06-02 12:57PM change to lower case to be adhere to component.js in My Opportunity application
	url: "/sap/bc/ui5_ui5/sap/crm_opprtnty"
	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});
*/

this.cus.crm.opportunity.Component.extend("cus.crm.opportunity.CRM_OPPRTNTYExtension.Component", {
	metadata: {
		version : "1.0",
		
		config: {
		},
			
		customizing: {
		    
		    "sap.ui.viewModifications":{
             "cus.crm.opportunity.view.S3":{
            "opportunityProspectName":{
                "visible": false
            } // end of salesTeam
        } // end of S3
      }, // end of viewModifications,
      "sap.ui.controllerExtensions" : {
				"cus.crm.opportunity.view.S3" : {
					controllerName : "cus.crm.opportunity.CRM_OPPRTNTYExtension.view.extS3"
				}
			}
		}// end of  customizing			
	} // end of metadata
});