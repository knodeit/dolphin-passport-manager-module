### Passport 

### Installation
```npm install dolphin-passport-manager-module --save```

### PassportManagerConfigurationFactory

methods:
* addModule - registration custom module


When you call "addModule" the plugin will know all your passports:
```
package_folder
   server
      config
         passports
```


### Example
```
var Module = require('dolphin-core-modules').Module;
var test = new Module('Test', __dirname);

test.configureFactories(function (PassportManagerConfigurationFactory) {
    PassportManagerConfigurationFactory.addModule(test);
});
```

