/**
 * @NApiVersion 2.0
 * @NScriptType plugintypeimpl
 */
define(['N/record','N/search','N/log'],function(record,search,log) {
	var type = record.Type.VENDOR;
	var isDynamic=true;
	var Vendor = {
		createBaseVendor:function(options){return createBaseVendor(options);},
		loadVendor:function(options){return loadVendor(options);}
	};
	
    function createBaseVendor(options){
    	var VendorRecord = record.create({
    	    type: type,
    	    isDynamic:isDynamic
    	});
    	
    	setBaseVendor(VendorRecord,options);   
    	
    	setBaseVendorMethod(VendorRecord);
    	
    	return VendorRecord;
    };
    
    function loadVendor(options){
    	var internal_id = options.id;
    	var VendorRecord = record.load({
    	    type: type,
    	    isDynamic:isDynamic,
    	    id:internal_id
    	});
    	
//    	setBaseVendor(VendorRecord,options);
    	
    	setBaseVendorMethod(VendorRecord);
    	
    	return VendorRecord;
    };
    
    
    
    
    
    function setBaseVendor(VendorRecord,options){
    	   	      
     	VendorRecord.setValue({
            fieldId: 'autoname',
            value: false
        });
    	VendorRecord.setValue({
            fieldId: 'subsidiary',
            value: getSubsidiaryInternalCode(options.iso)
        });
 	VendorRecord.setValue({
            fieldId: 'email',
            value: options.email
        });
 	VendorRecord.setValue({
            fieldId: 'entityid',
            value: options.entityid
        });
        
 	VendorRecord.setValue({
            fieldId: 'companyname',
            value: options.companyname
        });
 	
    };
    
    function setBaseVendorMethod(VendorRecord){
    	VendorRecord.setIsPersonValue = function(isperson){
            this.setValue({
                fieldId: 'isperson',
                value: isperson
            });
       };
       
       VendorRecord.setAltphone =function(altphone){
       	log.debug("setAltphone",altphone);
    	   this.setValue({
               fieldId: 'altphone',
               value: altphone
           });
      };
    }
    
    
    function getSubsidiaryInternalCode(iso){
    	var internal_id=-99;
    	if (iso==='ph'){
    		internal_id=17;
    	}else if (iso==='tw'){
    		internal_id=1;
    	}
    	return internal_id;
    }
       
    return Vendor;
    });
