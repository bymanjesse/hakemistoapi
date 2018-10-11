"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
const url = userId => (userId ? `users/${encodeURIComponent(userId)}/gpg_keys` : 'users/gpg_keys');
class UserGPGKeys extends infrastructure_1.BaseService {
    all({ userId } = {}) {
        return infrastructure_1.RequestHelper.get(this, url(userId));
    }
    add(title, key, { userId } = {}) {
        return infrastructure_1.RequestHelper.post(this, url(userId), {
            title,
            key,
        });
    }
    show(keyId, { userId } = {}) {
        const kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.get(this, `${url(userId)}/${kId}`);
    }
    remove(keyId, { userId } = {}) {
        const kId = encodeURIComponent(keyId);
        return infrastructure_1.RequestHelper.delete(this, `${url(userId)}/${kId}`);
    }
}
exports.default = UserGPGKeys;
