"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
class UserImpersonationTokens extends infrastructure_1.BaseService {
    all(userId) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, `users/${uId}/impersonation_tokens`);
    }
    add(userId, name, scopes, expiresAt) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.post(this, `users/${uId}/impersonation_tokens`, {
            name,
            expiresAt,
            scopes,
        });
    }
    show(userId, tokenId) {
        const [uId, tId] = [userId, tokenId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.get(this, `users/${uId}/impersonation_tokens/${tId}`);
    }
    revoke(userId, tokenId) {
        const [uId, tId] = [userId, tokenId].map(encodeURIComponent);
        return infrastructure_1.RequestHelper.delete(this, `users/${uId}/impersonation_tokens/${tId}`);
    }
}
exports.default = UserImpersonationTokens;
