/**
 * Created by Vadim on 01/11/16.
 */
'use strict';
var _ = require('lodash');
var modules = [];

module.exports = {
    name: 'Configuration',
    entity: {
        addModule: function (module) {
            modules.push(module);
        },
        getModules: function () {
            return _.uniq(modules);
        }
    }
};