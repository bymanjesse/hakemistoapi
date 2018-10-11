"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class BroadcastMessages extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'broadcast_messages', options);
    }
    create(options) {
        return infrastructure_1.RequestHelper.post(this, 'broadcast_messages', options);
    }
    edit(broadcastMessageId, options) {
        const bId = encodeURIComponent(broadcastMessageId);
        return infrastructure_1.RequestHelper.put(this, `broadcast_messages/${bId}`, options);
    }
    remove(broadcastMessageId) {
        const bId = encodeURIComponent(broadcastMessageId);
        return infrastructure_1.RequestHelper.delete(this, `broadcast_messages/${bId}`);
    }
    show(broadcastMessageId, options) {
        const bId = encodeURIComponent(broadcastMessageId);
        return infrastructure_1.RequestHelper.get(this, `broadcast_messages/${bId}`, options);
    }
}
exports.default = BroadcastMessages;
