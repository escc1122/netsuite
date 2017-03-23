/**
 * @NApiVersion 2.0
 * @NScriptType plugintypeimpl
 */
define(function() {
    return {
        doTheMagic: function(inputObj) {
            var operand1 = parseFloat(inputObj.operand1);
            var operand2 = parseFloat(inputObj.operand2);
            if (!isNaN(operand1) && !isNaN(operand2)) {
                return operand1 + operand2;
            }
        },
        otherMethod: function() {
            return 'foo';
        },
        getPI: function() {
            return 'PI20170213000006';
        }
    };
});
