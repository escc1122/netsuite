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
		 
record.attach({
    record: {
        type: 'customrecord211',
        id: '5'
    },
    to: {
        type: 'customrecord_shantest',
        id: '503'
    },attributes:{
    	'field' : 'custrecord99'  //如果自訂關連 要寫出關聯欄位
    		}
});
		 

		 
	 }
	 return tmp;
    
});
