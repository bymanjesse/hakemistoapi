"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_1 = require("../infrastructure");
const Events_1 = require("./Events");
class Users extends infrastructure_1.BaseService {
    all(options) {
        return infrastructure_1.RequestHelper.get(this, 'users', options);
    }
    activities() {
        return infrastructure_1.RequestHelper.get(this, 'users/activities');
    }
    projects(userId) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, `users/${uId}/projects`);
    }
    block(userId) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.post(this, `users/${uId}/block`);
    }
    create(options) {
        return infrastructure_1.RequestHelper.post(this, 'users', options);
    }
    current() {
        return infrastructure_1.RequestHelper.get(this, 'user');
    }
    edit(userId, options) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.put(this, `users/${uId}`, options);
    }
    events(userId, options) {
        Events_1.validateEventOptions(options.action, options.targetType);
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, `users/${uId}/events`, options);
    }
    session(email, password) {
        return infrastructure_1.RequestHelper.post(this, 'session', {
            email,
            password,
        });
    }
    search(emailOrUsername) {
        return infrastructure_1.RequestHelper.get(this, 'users', {
            search: emailOrUsername,
        });
    }
    show(userId, options) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.get(this, `users/${uId}`, options);
    }
    remove(userId) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.delete(this, `users/${uId}`);
    }
    unblock(userId) {
        const uId = encodeURIComponent(userId);
        return infrastructure_1.RequestHelper.post(this, `users/${uId}/unblock`);
    }
}
exports.default = Users;
