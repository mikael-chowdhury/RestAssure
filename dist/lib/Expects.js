"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpects = void 0;
const ObjectUtil_1 = require("../util/ObjectUtil");
function getExpects(req, thing) {
    return {
        to: {
            be: (value) => {
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) === value,
                });
                return req;
            },
            notBe: (value) => {
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) !== value,
                });
                return req;
            },
            toEqual: (value) => {
                console.log();
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) === value,
                });
                return req;
            },
            toBeType: (value) => {
                console.log();
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => typeof (0, ObjectUtil_1.getValueByKeyPath)(thing, response) === value,
                });
                return req;
            },
            toBeGreaterThan: (value) => {
                console.log();
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) > value,
                });
                return req;
            },
            toBeGreaterThanOrEqual: (value) => {
                console.log();
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) > value,
                });
                return req;
            },
            toBeLessThan: (value) => {
                console.log();
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) <= value,
                });
                return req;
            },
            toBeLessThanOrEqual: (value) => {
                console.log();
                req.assertions.push({
                    key: thing,
                    expectedValue: value,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response) <= value,
                });
                return req;
            },
            toExist: () => {
                req.assertions.push({
                    key: thing,
                    validator: (response) => [null, undefined].indexOf((0, ObjectUtil_1.getValueByKeyPath)(thing, response)) == -1,
                });
                return req;
            },
            toHaveLength: (length) => {
                req.assertions.push({
                    key: thing,
                    validator: (response) => (0, ObjectUtil_1.getValueByKeyPath)(thing, response).length === length,
                });
                return req;
            },
        },
    };
}
exports.getExpects = getExpects;
