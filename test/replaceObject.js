/**
 * Created by jkwu on 17-11-29.
 */
const { replaceAll } = require('../index');

var object = {
  10: 'a',
  age: '20',
  20: {
    nuber1: 'jkuw',
    class: 'class4',
    number2: 'jack',
    acount: '400'
  },
  LN:'里宁',
  7: 'c',
  sex: 'male',
  name: 'jkwu',
  group: {
    name: '永恒',
    column: 1,
    number: 30
  }
};

const result = replaceAll(object, 'name', { computer: 'mac Pro' });

console.log(result);