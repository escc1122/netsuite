/**
 *@NApiVersion 2.x
 *@NScriptType suitelet
 */
 define(['N/record','N/search'],function(record,search) {
	 var tmp ={
	 onRequest: function(options) {

            record.attach({
                record: {
                    type: record.Type.CONTACT,
                    id: '3592'
                },
                to: {
                    type: record.Type.VENDOR,
                    id: '3191'
                }
            });                	

	 	}
	 }
	 return tmp;
    
});
