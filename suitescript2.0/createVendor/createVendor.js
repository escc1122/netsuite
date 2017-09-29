/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(['N/plugin','N/record'],
/**
 * @param {plugin} plugin
 */
function(plugin,record) {
   
    /**
     * Definition of the Suitelet script trigger point.
     *
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
    function onRequest(context) {   
        
        var aaaaa = plugin.loadImplementation({
            type: 'customscript_vendor_plugin',
            implementation: 'default'
        });
        
        var Vendor = aaaaa.createBaseVendor({
        	iso:'tw',
        	email:'abcd@gmail.com',
        	entityid:'A12345',
        	companyname:'A12345'
        });
        
        Vendor.setAltphone('12345678');
        Vendor.setIsPersonValue("F");
        
        var id = Vendor.save();
        
  context.response.write("=========id=========>"+id+"<br>");
        
    }

    return {
        onRequest: onRequest
    };
    
});
