/**
 * @NApiVersion 2.0
 * @NScriptType plugintypeimpl
 */
define(function() {
        var tmp = {
    	doTheMagic: function(inputObj) {
    		return this.doTheMagicCode(inputObj);
    	},
        getPI : function(){
    		return this.getPICode();
    	},
        otherMethod : function(){
            return 'foo';
        },
        doTheMagicCode: function(inputObj) {
            var operand1 = parseFloat(inputObj.operand1);
            var operand2 = parseFloat(inputObj.operand2);
            if (!isNaN(operand1) && !isNaN(operand2)) {
                return operand1 + operand2;
            }
        },
        getPICode: function() {
            return 'PI20170213000006';
        }
        });
    return tmp;
});
