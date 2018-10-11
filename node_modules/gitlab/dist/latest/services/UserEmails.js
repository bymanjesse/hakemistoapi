"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
const url = userId => (userId ? `users/${encodeURIComponent(userId)}/emails` : 'user/emails');
class UserEmails extends infrastructure_1.BaseService {
    all({ userId } = {}) {
        return infrastructure_1.RequestHelper.get(this, url(userId));
    }
    add(email, { userId } = {}) {
        return infrastructure_1.RequestHelper.post(this, url(userId), {
            email,
        });
    }
    show(emailId) {
        const eId = encodeURIComponent(emailId);
        return infrastructure_1.RequestHelper.get(this, `user/emails/${eId}`);
    }
    remove(emailId, { userId } = {}) {
        const eId = encodeURIComponent(emailId);
        return infrastructure_1.RequestHelper.delete(this, `${url(userId)}/${eId}`);
    }
}
exports.default = UserEmails;
