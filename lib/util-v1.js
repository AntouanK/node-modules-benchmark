'use strict';
var app_path = __dirname + '/../';

var util = function (options) {
    var opts = options || {};
    return {
        yo: function (message) {
            return message;
        }
    };
};
module.exports = util;

