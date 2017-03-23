/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 ＊ plugin路徑 //netsuite/suitescript2.0/plugin/plugin.js
 * 使用 plugin & redirect Modules 利用plugin讀取資料並進行轉頁
 ＊
 */
define(['N/plugin','N/redirect'], function(plugin,redirect) {
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
//                }
                    
                	redirect.redirect({
            	    url: 'https://www.google.com.tw',
            	    parameters: {'productId':pl.getPI()} 
            	});
                
        }
    };
	
	
    return tmp;
});
