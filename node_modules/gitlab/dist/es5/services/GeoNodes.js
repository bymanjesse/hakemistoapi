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
var GeoNodes = /** @class */ (function (_super) {
    __extends(GeoNodes, _super);
    function GeoNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeoNodes.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'geo_nodes', options);
    };
    GeoNodes.prototype.create = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.post(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.edit = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.put(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.failures = function (options) {
        return infrastructure_1.RequestHelper.post(this, 'geo_nodes/current/failures', options);
    };
    GeoNodes.prototype.repair = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.delete(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.show = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.get(this, "geo_nodes/" + gId, options);
    };
    GeoNodes.prototype.status = function (geonodeId, options) {
        var gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.get(this, "geo_nodes/" + gId + "/status", options);
    };
    GeoNodes.prototype.statuses = function (options) {
        return infrastructure_1.RequestHelper.get(this, 'geo_nodes/statuses', options);
    };
    return GeoNodes;
}(infrastructure_1.BaseService));
exports.default = GeoNodes;
