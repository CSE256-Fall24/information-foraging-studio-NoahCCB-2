"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = noop;
exports.now = now;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("funcs loaded.", 2 /* DebugLevelEnum.BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
function now() {
    return new Date().getTime();
}
//# sourceMappingURL=funcs.js.map