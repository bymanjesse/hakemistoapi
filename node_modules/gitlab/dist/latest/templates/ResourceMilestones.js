"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceMilestones extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
    }
    all(resourceId, options) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, `${rId}/milestones`, options);
    }
    create(resourceId, title, options) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, `${rId}/milestones`, Object.assign({ title }, options));
    }
    edit(resourceId, milestoneId, options) {
        const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/milestones/${mId}`, options);
    }
    issues(resourceId, milestoneId) {
        const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/milestones/${mId}/issues`);
    }
    mergeRequests(resourceId, milestoneId) {
        const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/milestones/${mId}/merge_requests`);
    }
    show(resourceId, milestoneId) {
        const [rId, mId] = [resourceId, milestoneId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/milestones/${mId}`);
    }
}
exports.default = ResourceMilestones;
