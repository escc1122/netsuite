/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 */
define(['N/record'], function(record) {
	var tmp = {
        onRequest: function(options) {
        	var parameters = options.request.parameters;
        	
        	var id = parameters.id;
                
//        	var type = 'customrecord_aaaaa_bbbb';
        	var type = record.Type.SALES_ORDER;
//        	var type = record.Type.CUSTOMER;
        	var objRecord = record.load({
        	    type: type, 
        	    id: id
        	});
        	var array = objRecord.getFields();
        	for (var i=0;i<array.length;i++){
        		var txt = objRecord.getText({
        			fieldId: array[i]
        		});
        		var value = objRecord.getValue({
        			fieldId: array[i]
        		});
//        		var objField = objRecord.getField({
//        		    fieldId: array[i]
//        		});
        		options.response.write(array[i]+"==type:"+typeof(value)+"===>"+txt+"====>"+value+"<br>");
        	}

			options.response.write("=======================================sublist=============================================<br>");
			options.response.write("=======================================sublist=============================================<br>");
    		//取得sublist name
    		var sublistNames = objRecord.getSublists();
    		for (var i=0;i<sublistNames.length;i++){
    			
    			var sublistName = sublistNames[i];
    			options.response.write("==============================sublistName============================================"+sublistName+"<br>");
    			
    			//取得sublistLineCount
        		var numLines = objRecord.getLineCount({
        		    sublistId: sublistName
        		});
        		
        		var SublistSubrecord = objRecord.getSublistFields({
        		    sublistId: sublistName
        		});
        		
        		for (var k=0;k<numLines;k++){
        			options.response.write("==============================numLines============================================"+k+"<br>");
            		for (var j=0;j<SublistSubrecord.length;j++){
                		var getSublistValue = objRecord.getSublistValue({
                		    sublistId: sublistName,
                		    fieldId: SublistSubrecord[j],
                		    line: k  
                		});
                		
                		var getSublistText = objRecord.getSublistText({
                		    sublistId: sublistName,
                		    fieldId: SublistSubrecord[j],
                		    line: k  
                		});
            			
            			
            			options.response.write(SublistSubrecord[j]+"======type : "+typeof(getSublistValue)+"========Value : "+getSublistValue+"===========Text : "+getSublistText+"<br>");
            		}
        		}
    		}
    		

    		   	
        	
        	
        }
    };
	
    return tmp;
});
