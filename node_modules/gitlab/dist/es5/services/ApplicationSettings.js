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
var ApplicationSettings = /** @class */ (function (_super) {
    __extends(ApplicationSettings, _super);
    function ApplicationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationSettings.prototype.all = function () {
        return infrastructure_1.RequestHelper.get(this, 'application/settings');
    };
    ApplicationSettings.prototype.edit = function (options) {
        return infrastructure_1.RequestHelper.put(this, 'application/settings', options);
    };
    return ApplicationSettings;
}(infrastructure_1.BaseService));
exports.default = ApplicationSettings;
