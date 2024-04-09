"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueByKeyPath = void 0;
function getValueByKeyPath(keyPath, obj) {
    // Split the keyPath string into an array of keys, accounting for escaped periods
    const keys = keyPath.split(/(?<!\\)\./).map((key) => key.replace(/\\\./g, "."));
    // Reduce the keys to access the nested property
    return keys.reduce((currentObj, key) => {
        return currentObj && currentObj[key] !== undefined
            ? currentObj[key]
            : undefined;
    }, obj);
}
exports.getValueByKeyPath = getValueByKeyPath;
