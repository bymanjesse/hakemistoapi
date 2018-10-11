"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_join_1 = __importDefault(require("url-join"));
const infrastructure_1 = require("../infrastructure");
class ResourceCustomAttributes extends infrastructure_1.BaseService {
    constructor(resourceType, baseParams) {
        super(baseParams);
        this.url = url_join_1.default(this.url, resourceType);
    }
    all(resourceId) {
        const rId = encodeURIComponent(resourceId);
        return infrastructure_1.RequestHelper.get(this, `${rId}/custom_attributes`);
    }
    set(resourceId, customAttributeId, value) {
        const [rId, cId] = [resourceId, customAttributeId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.put(this, `${rId}/custom_attributes/${cId}`, {
            value,
        });
    }
    remove(resourceId, customAttributeId) {
        const [rId, cId] = [resourceId, customAttributeId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `${rId}/custom_attributes/${cId}`);
    }
    show(resourceId, customAttributeId) {
        const [rId, cId] = [resourceId, customAttributeId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `${rId}/custom_attributes/${cId}`);
    }
}
exports.default = ResourceCustomAttributes;
