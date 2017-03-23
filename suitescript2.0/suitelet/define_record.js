/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 */
define(['N/record'], function(record) {
	var tmp = {
        onRequest: function(options) {
                
		//原生record
        	var type = record.Type.EMPLOYEE;
		//custom record
		//var type = 'customrecord_member_info';
        	var objRecord = record.load({
        	    type: type, 
        	    id: '130'
        	});
        	var array = objRecord.getFields();
        	for (var i=0;i<array.length;i++){
        		var txt = objRecord.getText({
        			fieldId: array[i]
        		});
        		var value = objRecord.getValue({
        			fieldId: array[i]
        		});
        		options.response.write(array[i]+"=====>"+txt+"====>"+value+"<br>");
        	}
        }
    };
	
    return tmp;
});
