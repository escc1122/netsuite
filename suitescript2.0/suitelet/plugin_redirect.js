/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 */
define(['N/plugin','N/redirect'], function(plugin,redirect) {
	var tmp = {
        onRequest: function(options) {
                options.response.write('aaaaaaaaaaaaaa'+ '\n');
      
                    var pl = plugin.loadImplementation({
                        type: 'customscript433'//plugin的id
                    });
                    options.response.write(pl.doTheMagic({
                        operand1: 10,
                        operand2: 20
                    }) + '\n');
//                }
                    
                	redirect.redirect({
            	    url: 'http://tw.shopping99.com/woman/singlepage/index.jsp',
            	    parameters: {'productId':pl.getPI()} 
            	});
                
        }
    };
	
	
    return tmp;
});
