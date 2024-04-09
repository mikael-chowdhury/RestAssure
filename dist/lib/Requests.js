"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssureRequest = void 0;
const RestAssure_1 = require("./RestAssure");
const Expects_1 = require("./Expects");
const ObjectUtil_1 = require("../util/ObjectUtil");
class AssureRequest {
    constructor(url, method, data) {
        this.url = url;
        this.method = method;
        this.data = data;
        this.assertions = [];
        this.expect = (thing) => {
            return (0, Expects_1.getExpects)(this, thing);
        };
        this.assertions = [];
    }
    done() {
        return this.then((res) => { });
    }
    then(callback) {
        var _a;
        return ((_a = RestAssure_1.RestAssure.Instance) === null || _a === void 0 ? void 0 : _a.sendRequest(this.url, this.method, this.data))
            .then((response) => {
            this.assertions.forEach((assertion) => {
                if (!assertion.validator(response)) {
                    throw new Error(`Expected ${assertion.key} to be ${JSON.stringify(assertion.expectedValue, null, 4)}, found: ${JSON.stringify((0, ObjectUtil_1.getValueByKeyPath)(assertion.key, response))}`);
                }
            });
            callback(response);
        })
            .catch((error) => {
            throw error;
        });
    }
}
exports.AssureRequest = AssureRequest;
