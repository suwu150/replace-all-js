/**
 * Created by jkwu on 17-11-29.
 */
const { replaceString } = require('./replaceString');
const { replaceObjectByField } = require('./replaceObjectByField');
const { isArray } = require('./isArray');
const { isObject } = require('./isObject');
const { isString } = require('./isString');

function replaceAll(current, replace, news) {
  let result = null;
  if(current != null && isString(current)) {
    result = replaceString(current, replace, news);
  } else if(current != null && isObject(current)) {
    result = replaceObjectByField(current, replace, news);
  }
  return result;
}

module.exports = { replaceAll };