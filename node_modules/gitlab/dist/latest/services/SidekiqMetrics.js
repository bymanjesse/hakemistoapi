"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class SidekiqMetrics extends infrastructure_1.BaseService {
    queueMetrics() {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/queue_metrics');
    }
    processMetrics() {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/process_metrics');
    }
    jobStats() {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/job_stats');
    }
    compoundMetrics() {
        return infrastructure_1.RequestHelper.get(this, 'sidekiq/compound_metrics');
    }
}
exports.default = SidekiqMetrics;
