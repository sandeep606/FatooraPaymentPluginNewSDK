var exec = require('cordova/exec');

module.exports.presentPaymentModule = function (arg0, success, error) {
    exec(success, error, 'FatooraPaymentPluginNewSDK', 'presentPaymentModule', [arg0]);
};

module.exports.testMethod =  function (arg0, success, error) {
    exec(success, error, 'FatooraPaymentPluginNewSDK', 'testMethod', [arg0]);
};

module.exports.payNow = function (arg0, success, error) {
    exec(success, error, 'FatooraPaymentPluginNewSDK', 'payNow', [arg0]);
};
