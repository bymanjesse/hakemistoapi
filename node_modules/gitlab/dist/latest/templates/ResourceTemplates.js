"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceTemplates extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, 'templates', resourceType);
    }
    all(options) {
        return infrastructure_1.RequestHelper.get(this, '', options);
    }
    show(resourceId) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.post(this, `${rId}`);
    }
}
exports.default = ResourceTemplates;
