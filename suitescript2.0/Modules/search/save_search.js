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


            recordSearch.save();
        }
    };
      
    return tmp;
});
