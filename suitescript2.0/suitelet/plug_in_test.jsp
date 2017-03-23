/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 ＊ plugin路徑 //netsuite/suitescript2.0/plugin/plugin.js
 ＊
 */
define(['N/plugin'], function(plugin) {
	var tmp = {
        onRequest: function(options) {
                options.response.write('aaaaaaaaaaaaaa'+ '\n');
      
		//netsuite/suitescript2.0/plugin/plugin.js
                    var pl = plugin.loadImplementation({
                        type: 'customscript433'//plugin的id
                    });
                    options.response.write(pl.doTheMagic({
                        operand1: 10,
                        operand2: 20
                    }) + '\n');
                   
            	});
                
        }
    };
	
	
    return tmp;
});
