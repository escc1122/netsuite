/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 */
define(['N/record'], function(record) {
	var tmp = {
        onRequest: function(options) {
          //get object key      
          for (var key in options.request){
            options.response.write(key+"<br>")
          }
       
          //get parameter id
        	var parameters = options.request.parameters;
        	var id = parameters.id;
          options.response.write(id)
        }
    };
	
    return tmp;
});
