"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
const url = userId => (userId ? `users/${encodeURIComponent(userId)}/keys` : 'user/keys');
class UserKeys extends infrastructure_1.BaseService {
    all({ userId }) {
        return infrastructure_1.RequestHelper.get(this, url(userId));
    }
    create(title, key, { userId } = {}) {
        return infrastructure_1.RequestHelper.post(this, url(userId), {
            title,
            key,
        });
    }
    show(keyId) {
        const kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, `user/keys/${kId}`);
    }
    remove(keyId, { userId } = {}) {
        const kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.delete(this, `${url(userId)}/${kId}`);
    }
}
exports.default = UserKeys;
