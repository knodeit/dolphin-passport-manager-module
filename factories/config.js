/**
 * Created by Vadim on 01/11/16.
 */
'use strict';
var modules = [];

module.exports = {
    name: 'Configuration',
    entity: {
        addModule: function (module) {
            modules.push(module);
        },
        getModules: function () {
            return modules;
        }
    }
};