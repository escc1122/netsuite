/**
 *@NApiVersion 2.x
 *@NScriptType suitelet
 */
 define(['N/record','N/search'],function(record,search) {
	 var tmp ={
	 onRequest: function(options) {
     	options.response.write(search.Operator.IS+"<br>");
     	options.response.write(search.Type.EMPLOYEE+"<br>");
     	
	//如果沒有要用save serach 就不要給save_id
     	var mySalesOrderSearch = search.create({
     	    type: search.Type.EMPLOYEE, // or customer record id
     	    title: 'al_search',
     	    columns: ['email','altname'],
     	    filters: [{
     	        name: 'email',
     	        operator: search.Operator.IS,
     	        values: ['escc1122@gmail.com']
     	    }]
     	});
     
     	
     	var resultSet=mySalesOrderSearch.run();
 		
     	resultSet.each(function(result) {
     		
            var name = result.getValue({
                name: 'altname'
            });
            var email = result.getValue({
                name: 'email'
            });

            options.response.write(name+"=====>"+email+"<br>");
		return true;   //很重要 不寫會只作一次
        });
     	
     	

	 	}
	 }
	 return tmp;
    
    });
