"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
(0, console_wrapper_1.log)('tracker loaded.', 2 /* DebugLevelEnum.BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spreadArray([], __read(inds), false));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        (0, console_wrapper_1.setDebugLevel)(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!(0, event_1.isTrackerEvent)(evData)) {
                    (0, event_1.objectToTrackerEvent)(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;
//# sourceMappingURL=tracker.js.map