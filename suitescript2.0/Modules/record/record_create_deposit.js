/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/record'],
function(record) {
    function onRequest(context) {
    	var type = record.Type.DEPOSIT;
    	var isDynamic=false;
    	var objRecord = record.create({
    	    type: type,
    	    isDynamic:isDynamic
    	});
        objRecord.setValue({
            fieldId: 'account',
            value: '1800'
        });
    	
         objRecord.setValue({
              fieldId: 'subsidiary',
              value: '1'
          });
         
         objRecord.setText({
             fieldId: 'customform',
             value: 'aaaaaaaa'
         });
           		
    	objRecord.setSublistValue({
    	    sublistId: 'payment',
    	    fieldId: 'id',
    	    line: 1,
    	    value: "1610"
    	});
    	
    	objRecord.setSublistValue({
    	    sublistId: 'payment',
    	    fieldId: 'deposit',
    	    line: 1,
    	    value: true
    	});
    	    	   	
    	var id = objRecord.save();
    	
    	context.response.write("====id==>"+id)
    	
    }

    return {
        onRequest: onRequest
    };
    
});
