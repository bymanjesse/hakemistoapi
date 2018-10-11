"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class GeoNodes extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'geo_nodes', options);
    }
    create(geonodeId, options) {
        const gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.post(this, `geo_nodes/${gId}`, options);
    }
    edit(geonodeId, options) {
        const gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.put(this, `geo_nodes/${gId}`, options);
    }
    failures(options) {
        return infrastructure_1.RequestHelper.post(this, 'geo_nodes/current/failures', options);
    }
    repair(geonodeId, options) {
        const gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.delete(this, `geo_nodes/${gId}`, options);
    }
    show(geonodeId, options) {
        const gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.get(this, `geo_nodes/${gId}`, options);
    }
    status(geonodeId, options) {
        const gId = encodeURIComponent(geonodeId);
        return infrastructure_1.RequestHelper.get(this, `geo_nodes/${gId}/status`, options);
    }
    statuses(options) {
        return infrastructure_1.RequestHelper.get(this, 'geo_nodes/statuses', options);
    }
}
exports.default = GeoNodes;
