/**
 *@NApiVersion 2.x
 *@NScriptType suitelet
 */
 define(['N/record','N/search'],function(record,search) {
	 var tmp ={
	 onRequest: function(options) {
     	options.response.write("aaaaaaaa");

     	var mySalesOrderSearch = search.create({
     	    type: 'customrecord_member_info',
     	    title: 'My SalesOrder Search',
     	    id: 'customsearch_my_so_search',   //save_search必要
     	    columns: [{
     	        name: 'custrecord_mi_credit_id'
     	    }, {
     	        name: 'custrecord_mi_email'
     	    }, {
     	        name: 'custrecord_mi_country_iso'
     	    }],
     	    filters: [{
     	        name: 'custrecord_mi_email',
     	        operator: search.Operator.IS,
     	        values: ['escc1122@gmail.com']
     	    }]
     	});
     	
     	mySalesOrderSearch.save();
     	
        var mySearch = search.load({
            id: 'customsearch_my_so_search'
        });
        mySearch.run().each(function(result) {
            var id = result.getValue({
                name: 'custrecord_mi_credit_id'
            });
            var email = result.getValue({
                name: 'custrecord_mi_email'
            });
            var iso = result.getValue({
                name: 'custrecord_mi_country_iso'
            });
            
            var c = result.columns;
            
            for (var i=0;i<c.length;i++){
                var val = result.getValue({
                    name: c[i]
                });
                options.response.write("=val===>"+val+"<br>");
                var txt = result.getText({
                    name: c[i]
                });
                options.response.write("==txt===>"+txt+"<br>");
                
                
            }
            
            
          
            
            
            options.response.write(id+"=====>"+email+"====>"+iso+"<br>");
        });
     	
     	

	 	}
	 }
	 return tmp;
    
    });
             
