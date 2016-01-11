'use strict';
var Module = require('dolphin-core-modules').Module;
var Dolphin = require('dolphin-core');
var passportManager = new Module('PassportManager', __dirname);
var Q = require('q');
var FSUtil = require('dolphin-core-utils').FS;
var PathUtil = require('path');
var passport = require('passport');
var deferred = Q.defer();
var PASSPORT_FOLDER = 'server/config/passports';

passportManager.configureFactories(function (WebServerConfigurationFactory) {
    WebServerConfigurationFactory.addPromise(deferred.promise);
});

passportManager.getPassport = function () {
    return passport;
};

function loadFiles(module) {
    var deferred = Q.defer();

    //load all angular modules
    FSUtil.readDir(module.resolvePath(PathUtil.join(PASSPORT_FOLDER, '/**/*.js'))).then(function (files) {
        files.forEach(function (file) {
            Dolphin.resolveObjects(require(file));
        });

        //exit
        deferred.resolve();
    });
    return deferred.promise;
}

passportManager.run(function (PassportManagerConfigurationFactory) {
    var funcs = [];
    var modules = PassportManagerConfigurationFactory.getModules();
    for (var i in modules) {
        funcs.push(loadFiles(modules[i]));
    }
    Q.all(funcs).then(deferred.resolve);
});