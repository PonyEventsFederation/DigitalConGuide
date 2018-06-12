/**
 *
 */
const mpath = require('mpath');

/**
 * Returns the value of a JSON path in an Object
 *
 * @example
 * Tools.getValueOfObjectByPath("test.0.value", {
 *      test: [
 *          {
 *              value: "test"
 *          }
 *      ]
 * })
 * @param path
 * @param obj
 * @returns {*}
 */
module.exports = function getValueOfObjectByPath(path, obj) {
    if (!(obj instanceof Object)) {
        throw new Error("obj is not an Object");
    }

    if (typeof path !== "string") {
        throw new Error("path is not a String");
    }

    return mpath.get(path, obj);
}
