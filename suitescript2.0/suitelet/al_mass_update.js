/**
/**
 *@NApiVersion 2.0
 *@NScriptType MassUpdateScript
 */
define(['N/record','/SuiteScripts/altest/al_plug2'],
    function(record,al_plug) {
        function each(params) {
            var customRecord = record.load({
                type: params.type,
                id: params.id
            });
            
        	var array = customRecord.getFields();
        	for (var i=0;i<array.length;i++){
        		var txt = customRecord.getText({
        			fieldId: array[i]
        		});
        		var value = customRecord.getValue({
        			fieldId: array[i]
        		});
        		log.debug(array[i]+"=====>"+txt+"====>"+value+"<br>");
        	}
        }
        return {
            each: each
        };
    });
