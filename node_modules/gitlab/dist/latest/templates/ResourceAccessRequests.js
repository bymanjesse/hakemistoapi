"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
exports.ACCESS_LEVELS = {
    GUEST: 10,
    REPORTER: 20,
    DEVELOPER: 30,
    MASTER: 40,
    OWNER: 50,
};
class ResourceAccessRequests extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
        this.ACCESS_LEVELS = exports.ACCESS_LEVELS;
    }
    all(resourceId) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, `${rId}/access_requests`);
    }
    request(resourceId) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, `${rId}/access_requests`);
    }
    approve(resourceId, userId, { accessLevel = 30 }) {
        const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.post(this, `${rId}/access_requests/${uId}/approve`, {
            accessLevel,
        });
    }
    deny(resourceId, userId) {
        const [rId, uId] = [resourceId, userId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/access_requests/${uId}`);
    }
}
exports.default = ResourceAccessRequests;
