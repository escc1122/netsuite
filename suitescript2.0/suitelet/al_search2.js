/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 */
define(['N/plugin','N/record','N/search'], function(plugin,record,search) {
      var tmp = {
        onRequest: function(options) {
            var recordSearch = search.create({
                type: search.Type.CUSTOMER,
                title: 'al_search',
                columns: ['currency','internalid'],
                filters: [{
                    name: 'email',
                    operator: search.Operator.IS,
                    values: ['zzz@gmail.com']
                }]
            });


            var isRecord=recordSearch.run();


            for (var i=0 ;i<isRecord.columns.length;i++){
                  options.response.write(isRecord.columns[i].name+"<br>");
            }
              
            options.response.write(isRecord.columns[0].name+"<br>");

            isRecord.each(function(result) {
                var email = result.getValue({
                    name: 'internalid'
                });          
                options.response.write(email+"<br>");
            });


        }
    };
      
    return tmp;
});
