var type = record.Type.VENDOR;
var objRecord = record.load({
    type: type, 
    id: '3292'
});

objRecord.insertLine({
    sublistId: 'addressbook',
    line: 0,
    ignoreRecalc: false
});

var addressRecord = objRecord.getSublistSubrecord({
    sublistId: 'addressbook',
    fieldId: 'addressbookaddress',
    line: 0
});
addressRecord.setValue({
    fieldId: 'country',
    value: 'TW',
    ignoreFieldChange: false
});

addressRecord.setValue({
    fieldId: 'addressee',
    value: 'dddddddddd',
    ignoreFieldChange: false
});

addressRecord.setValue({
    fieldId: 'addr1',
    value: 'ggggggggg',
    ignoreFieldChange: false
});
addressRecord.setValue({
    fieldId: 'zip',
    value: '555',
    ignoreFieldChange: false
});

objRecord.save();
