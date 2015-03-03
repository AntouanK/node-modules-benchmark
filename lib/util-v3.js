'use strict';
var app_path = __dirname + '/../';

function Util(options) {
    this.opts = options || {};
}

Util.prototype.yo = function yo(message) {
    return message;
};
module.exports = Util;
