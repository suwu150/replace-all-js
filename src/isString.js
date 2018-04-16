/**
 * Created by jkwu on 17-11-17.
 */
function isString(o){
    return Object.prototype.toString.call(o)=='[object String]';
}

module.exports = { isString };