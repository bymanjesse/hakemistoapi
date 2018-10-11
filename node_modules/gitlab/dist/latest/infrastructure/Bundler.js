"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Bundler(services = {}) {
    const combined = Object.assign({}, services);
    return class Bundle {
        constructor(options = {}) {
            Object.keys(combined).forEach((serviceName) => {
                this[serviceName] = new combined[serviceName](options);
            });
        }
    };
}
exports.default = Bundler;
