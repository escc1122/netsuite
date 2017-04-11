/**
 *@NApiVersion 2.x
 *@NScriptType suitelet
 */
 define(['N/record','N/search'],function(record,search) {
	 var tmp ={
	 onRequest: function(options) {
        	var type = record.Type.CUSTOMER;
        	var isDynamic=false; //是否要即時存檔
        	var objRecord = record.create({
        	    type: type,
        	    isDynamic:isDynamic
        	});
        	
            objRecord.setValue({
                fieldId: 'companyname',
                value: 'altest'
            });
            
            objRecord.setValue({
                fieldId: 'subsidiary',
                value: '17' //國家
            });
            
            objRecord.setValue({
                fieldId: 'lastname',
                value: 'dddddd'
            });
            
            objRecord.setValue({
                fieldId: 'firstname',
                value: 'bbbbb'
            });
            
            objRecord.setValue({
                fieldId: 'email',
                value: 'test@gmail.com'
            });

            
        
            
            var internal_id = objRecord.save();
            
            options.response.write(internal_id+"============>"+member_id+"<br>");
     	
     	

	 	}
	 }
	 return tmp;
    
    });
