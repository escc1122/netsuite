/**
 * @NApiVersion 2.0
 * @NScriptType plugintypeimpl
 */
require.config({
	baseUrl:'/plugin',
	paths: {
        'al_plug2': 'plugin'
    }
});

define(['al_plug2'], function(al_plug2) {
	var tmp={
			plugin2:al_plug2,
			aaaa:function(){
				return al_plug2.otherMethod();
			}
	};
	
	
	return tmp;
});
