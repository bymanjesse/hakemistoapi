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
var BroadcastMessages = /** @class */ (function (_super) {
    __extends(BroadcastMessages, _super);
    function BroadcastMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BroadcastMessages.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'broadcast_messages', options);
    };
    BroadcastMessages.prototype.create = function (options) {
        return infrastructure_1.RequestHelper.post(this, 'broadcast_messages', options);
    };
    BroadcastMessages.prototype.edit = function (broadcastMessageId, options) {
        var bId = encodeURIComponent(broadcastMessageId);
        return infrastructure_1.RequestHelper.put(this, "broadcast_messages/" + bId, options);
    };
    BroadcastMessages.prototype.remove = function (broadcastMessageId) {
        var bId = encodeURIComponent(broadcastMessageId);
        return infrastructure_1.RequestHelper.delete(this, "broadcast_messages/" + bId);
    };
    BroadcastMessages.prototype.show = function (broadcastMessageId, options) {
        var bId = encodeURIComponent(broadcastMessageId);
        return infrastructure_1.RequestHelper.get(this, "broadcast_messages/" + bId, options);
    };
    return BroadcastMessages;
}(infrastructure_1.BaseService));
exports.default = BroadcastMessages;
