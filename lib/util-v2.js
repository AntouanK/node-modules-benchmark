'use strict';
var app_path = __dirname + '/../',
    opts = {};

function Util(options) {
    opts = options || {};
}

Util.prototype.yo = function yo(message) {
    return message;
};
module.exports = Util;
