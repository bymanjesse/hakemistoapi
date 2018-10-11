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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var infrastructure_1 = require("../infrastructure");
var PagesDomains = /** @class */ (function (_super) {
    __extends(PagesDomains, _super);
    function PagesDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagesDomains.prototype.all = function (_a) {
        var projectId = (_a === void 0 ? {} : _a).projectId;
        var url = projectId ? "projects/" + encodeURIComponent(projectId) + "/" : '';
        return infrastructure_1.RequestHelper.get(this, url + "pages/domains");
    };
    PagesDomains.prototype.create = function (projectId, domain, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.post(this, "projects/" + pId + "/pages/domains", __assign({ domain: domain }, options));
    };
    PagesDomains.prototype.edit = function (projectId, domain, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/pages/domains/" + domain, options);
    };
    PagesDomains.prototype.show = function (projectId, domain) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/pages/domains/" + domain);
    };
    PagesDomains.prototype.remove = function (projectId, domain) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/pages/domains/" + domain);
    };
    return PagesDomains;
}(infrastructure_1.BaseService));
exports.default = PagesDomains;
