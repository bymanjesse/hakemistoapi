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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_join_1 = __importDefault(require("url-join"));
var infrastructure_1 = require("../infrastructure");
var ResourceTemplates = /** @class */ (function (_super) {
    __extends(ResourceTemplates, _super);
    function ResourceTemplates(resourceType, baseParams) {
        var _this = _super.call(this, baseParams) || this;
        _this.url = url_join_1.default(_this.url, 'templates', resourceType);
        return _this;
    }
    ResourceTemplates.prototype.all = function (options) {
        return infrastructure_1.RequestHelper.get(this, '', options);
    };
    ResourceTemplates.prototype.show = function (resourceId) {
        var rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, "" + rId);
    };
    return ResourceTemplates;
}(infrastructure_1.BaseService));
exports.default = ResourceTemplates;
