"use strict";
var values;
(function (values) {
    values[values["PI"] = 3.14] = "PI";
    values[values["g"] = 9.8] = "g";
})(values || (values = {}));
// enums are contant values with reversable feature in it
function abc() {
    console.log(values[3.14]);
    console.log(values.PI);
}
abc();
