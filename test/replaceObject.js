/**
 * Created by jkwu on 17-11-29.
 */
const { replaceAll } = require('../index');

var object = {
  label: {
    nuber1: 'jkuw',
    class: 'class4',
    number2: 'jack',
    acount: {
      nuber1: 'jkuw',
      class: 'class4',
      number2: 'jack',
    },
  },
  name: 'jkwu',
  group: {
    name: '永恒',
    column: 1,
    number: 30
  }
};


var fs = require('fs');

// 同步保存json文件
function saveFileSync(jsonObj, filePath) {
  try {
    const data = JSON.stringify(jsonObj, null, 2);
    fs.writeFileSync(filePath, data);
  } catch (err) {
    console.log('文件保存失败:' + err);
    throw err;
  }
}
const result = replaceAll(object, 'number2', { computer: 'mac Pro', class: '计算机' });
saveFileSync(result, 'sortedObjectResult.json');
console.log(result);