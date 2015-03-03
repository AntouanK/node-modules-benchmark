'use strict';
var app_path = __dirname + '/';
var loop_cnt = parseInt(process.argv[2]);

var Util  = require(app_path + 'lib/util-v2');
var util = new Util({ foo: 'bar' });

var start = process.hrtime();
for (var i = 0; i < loop_cnt; i++) {
    util.yo('man');
}
var end = process.hrtime(start);
var total = end[0] + end[1] / 1000000000;
console.log('Called v2, util.yo("man")', numberWithCommas(i), 'times in', total, 'sec');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
