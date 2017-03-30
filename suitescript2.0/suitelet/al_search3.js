/**
 *@NApiVersion 2.x
 *@NScriptType suitelet
 */
 define(['N/record','N/search'],function(record,search) {
	 var tmp ={
	 onRequest: function(options) {
        	
        	var recordSearch = search.load({
         	    type: search.Type.CUSTOMER,
         	    id:'customsearch204'
         	});
        	
        	
           	
           	var recordSet=recordSearch.run();
            
         	
         	var objRecord;
        	var type = record.Type.CUSTOMER;
        	var isDynamic=false;
        	
        	
        	var page =recordSet.getRange({
        	    start:0,
        	    end:10
        	}
        	);
        	for (var i = 0; i < page.length; i++) {
                var internal_id = page[i].getValue({
                    name: 'internalid'
                });
                options.response.write("==internal_id===>"+internal_id+"<br>");
        	}
        	
        	
        	options.response.write("========================"+"<br>");
        	
        	recordSet.each(function(result) {
 	            var internal_id = result.getValue({
 	                name: 'internalid'
 	            });
 	            
                options.response.write("==internal_id===>"+internal_id+"<br>");
                return true;   //很重要 不寫會只作一次
 	            
        });
     	
     	

	 	}
	 }
	 return tmp;
    
    });
