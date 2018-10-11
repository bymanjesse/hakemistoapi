"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var ACTION_TYPES = [
    'created',
    'updated',
    'closed',
    'reopened',
    'pushed',
    'commented',
    'merged',
    'joined',
    'left',
    'destroyed',
    'expired',
];
var TARGET_TYPES = [
    'issue',
    'milestone',
    'merge_request',
    'note',
    'project',
    'snippet',
    'user',
];
function validateEventOptions(action, target) {
    if (action && ACTION_TYPES.indexOf(action) === -1) {
        throw new Error("This action is not supported. Pleased use one of following options: " + ACTION_TYPES);
    }
    if (target && TARGET_TYPES.indexOf(target) === -1) {
        throw new Error("This target is not supported. Pleased use one of following options: " + TARGET_TYPES);
    }
}
exports.validateEventOptions = validateEventOptions;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Events.prototype.all = function (options) {
        validateEventOptions(options.action, options.targetType);
        return infrastructure_1.RequestHelper.get(this, 'events', options);
    };
    return Events;
}(infrastructure_1.BaseService));
exports.default = Events;
