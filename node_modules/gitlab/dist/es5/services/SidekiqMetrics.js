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
var SidekiqMetrics = /** @class */ (function (_super) {
    __extends(SidekiqMetrics, _super);
    function SidekiqMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidekiqMetrics.prototype.queueMetrics = function () {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/queue_metrics');
    };
    SidekiqMetrics.prototype.processMetrics = function () {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/process_metrics');
    };
    SidekiqMetrics.prototype.jobStats = function () {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/job_stats');
    };
    SidekiqMetrics.prototype.compoundMetrics = function () {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/compound_metrics');
    };
    return SidekiqMetrics;
}(infrastructure_1.BaseService));
exports.default = SidekiqMetrics;
