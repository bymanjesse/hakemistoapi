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
var UserImpersonationTokens = /** @class */ (function (_super) {
    __extends(UserImpersonationTokens, _super);
    function UserImpersonationTokens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserImpersonationTokens.prototype.all = function (userId) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, "users/" + uId + "/impersonation_tokens");
    };
    UserImpersonationTokens.prototype.add = function (userId, name, scopes, expiresAt) {
        var uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.post(this, "users/" + uId + "/impersonation_tokens", {
            name: name,
            expiresAt: expiresAt,
            scopes: scopes,
        });
    };
    UserImpersonationTokens.prototype.show = function (userId, tokenId) {
        var _a = [userId, tokenId].map(encodeURIComponent), uId = _a[0], tId = _a[1];
        return infrastructure_1.RequestHelper.get(this, "users/" + uId + "/impersonation_tokens/" + tId);
    };
    UserImpersonationTokens.prototype.revoke = function (userId, tokenId) {
        var _a = [userId, tokenId].map(encodeURIComponent), uId = _a[0], tId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "users/" + uId + "/impersonation_tokens/" + tId);
    };
    return UserImpersonationTokens;
}(infrastructure_1.BaseService));
exports.default = UserImpersonationTokens;
