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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var Runners = /** @class */ (function (_super) {
    __extends(Runners, _super);
    function Runners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Runners.prototype.all = function (_a) {
        if (_a === void 0) { _a = {}; }
        var projectId = _a.projectId, options = __rest(_a, ["projectId"]);
        var url = projectId ? "projects/" + encodeURIComponent(projectId) + "/runners" : 'runners/all';
        return infrastructure_1.RequestHelper.get(this, url, options);
    };
    Runners.prototype.allOwned = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'runners', options);
    };
    Runners.prototype.edit = function (runnerId, attributes) {
        var rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.put(this, "runners/" + rId, attributes);
    };
    Runners.prototype.enable = function (projectId, runnerId) {
        var _a = [projectId, runnerId].map(encodeURIComponent), pId = _a[0], rId = _a[1];
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/runners", { runnerId: rId });
    };
    Runners.prototype.disable = function (projectId, runnerId) {
        var _a = [projectId, runnerId].map(encodeURIComponent), pId = _a[0], rId = _a[1];
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/runners/" + rId);
    };
    Runners.prototype.jobs = function (runnerId) {
        var rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.get(this, "runners/" + rId + "/jobs");
    };
    Runners.prototype.remove = function (runnerId) {
        var rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.delete(this, "runners/" + rId);
    };
    Runners.prototype.show = function (runnerId) {
        var rId = encodeURIComponent(runnerId);
        return infrastructure_1.RequestHelper.get(this, "runners/" + rId);
    };
    return Runners;
}(infrastructure_1.BaseService));
exports.default = Runners;
