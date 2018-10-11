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
var url = function (userId) { return (userId ? "users/" + encodeURIComponent(userId) + "/emails" : 'user/emails'); };
var UserEmails = /** @class */ (function (_super) {
    __extends(UserEmails, _super);
    function UserEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserEmails.prototype.all = function (_a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        return infrastructure_1.RequestHelper.get(this, url(userId));
    };
    UserEmails.prototype.add = function (email, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        return infrastructure_1.RequestHelper.post(this, url(userId), {
            email: email,
        });
    };
    UserEmails.prototype.show = function (emailId) {
        var eId = encodeURIComponent(emailId);
        return infrastructure_1.RequestHelper.get(this, "user/emails/" + eId);
    };
    UserEmails.prototype.remove = function (emailId, _a) {
        var userId = (_a === void 0 ? {} : _a).userId;
        var eId = encodeURIComponent(emailId);
        return infrastructure_1.RequestHelper.delete(this, url(userId) + "/" + eId);
    };
    return UserEmails;
}(infrastructure_1.BaseService));
exports.default = UserEmails;
