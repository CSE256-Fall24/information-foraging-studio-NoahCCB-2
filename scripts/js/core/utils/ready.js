"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReady = isReady;
exports.waitUntilReady = waitUntilReady;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("ready loaded", 2 /* DebugLevelEnum.BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    (0, console_wrapper_1.log)("document is ready", 3 /* DebugLevelEnum.DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}
//# sourceMappingURL=ready.js.map