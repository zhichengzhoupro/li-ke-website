const {override, fixBabelImports, addDecoratorsLegacy} = require('customize-cra');


module.exports = override(
    addDecoratorsLegacy()
);