/**
 * @NApiVersion 2.0
 * @NScriptType suitelet
 */
require.config({
	baseUrl:'/define-require',
	paths: {
        'plugin': 'define-require1'
    }
});


define(['plugin'], function(plugin) {
	var tmp={
			onRequest: function(options) {
				options.response.write(typeof(plugin.plugin2)+"<br>");
				options.response.write(plugin.plugin2.otherMethod()+"<br>");
				options.response.write(plugin.aaaa()+"<br>");
			}
	};
	
	
	return tmp;
});

//輸出
//  object
//  foo
//  foo
