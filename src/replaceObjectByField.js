const { isObject } = require('./isObject');
const { isString } = require('./isString');
const { isArray } = require('./isArray');
const { objectKeys } = require('./object-keys');


/*
* 替换对象
* currentObject当前需要替换的对象
* replacedField要被替换掉的属性值，
* newObject替换之后的对象内容,传入内容可以是任意值
* return 处理后的对象
* */

function replaceObjectByField(currentObject, replacedField, newObject){
  if(currentObject !== null && isObject(currentObject)) {
    let constructObject = {};
    let sortedKeys = objectKeys(currentObject);
    if (isArray(sortedKeys)) {
      sortedKeys.map(function(item) {
        if (currentObject[item] && isObject(currentObject[item])) {
          //处理对象
          constructObject[item] = replaceObjectByField(currentObject[item], replacedField, newObject);
        } else if (currentObject[item] && isArray(currentObject[item])){
          // 处理数组
          let childrenArray = currentObject[item];
          const tempChildrenArray = childrenArray.map(function(item) {
            return replaceObjectByField(item, replacedField, newObject );
          });
          constructObject[item] = tempChildrenArray;
        } else {
          // 处理字符串
          constructObject[item] = item === replacedField ? newObject : currentObject[item];
        }
      });
    } else {
      throw('sortedKeys is not array');
    }
    return constructObject;
  }
}

module.exports = { replaceObjectByField };