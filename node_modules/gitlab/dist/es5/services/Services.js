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
var Services = /** @class */ (function (_super) {
    __extends(Services, _super);
    function Services() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Services.prototype.edit = function (projectId, serviceName, options) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.put(this, "projects/" + pId + "/services/" + serviceName, options);
    };
    Services.prototype.remove = function (projectId, serviceName) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.delete(this, "projects/" + pId + "/services/" + serviceName);
    };
    Services.prototype.show = function (projectId, serviceName) {
        var pId = encodeURIComponent(projectId);
        return infrastructure_1.RequestHelper.get(this, "projects/" + pId + "/services/" + serviceName);
    };
    return Services;
}(infrastructure_1.BaseService));
exports.default = Services;
