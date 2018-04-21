# replace-all-js
js replaceAll achieve, use of RegExp


地址[https://github.com/suwu150/replace-all-js](https://github.com/suwu150/replace-all-js)
## 1.安装
```$xslt
npm i replace-all-js --save
```
# use

####1)replace String
```$xslt
const { replaceAll } = require('replace-all-js');
const result = replaceAll('dscdcsdsc,ds,cds,dcs,cds,c,ds', ',', '--');
console.log(result);
```
# params
```$xslt
    replaceAll(currentStr, replaced, news)
==>
    currentStr:Original string
    replaced:A string to be replaced
    news:Substitution of a string
```
# result
```$xslt
dscdcsdsc--ds--cds--dcs--cds--c--ds
```
####1)replace Object and Array

# params
```$xslt
    replaceAll(currentObject, replacedField, newObject)
==>
* currentObject当前需要替换的对象
* replacedField要被替换掉的属性值，
* newObject替换之后的对象内容,传入内容可以是任意值
* return 处理后的对象
```
# example
要被替换的对象
```$xslt
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
```
进行替换属性为number2的内容为{ computer: 'mac Pro', class: '计算机' },代码如下
   ```$xslt
   const { replaceAll } = require('replace-all-js');
   const result = replaceAll(object, 'number2', { computer: 'mac Pro', class: '计算机' });
   console.log(result);
   ```
显示结果如下所示：
```$xslt
{
  "label": {
    "nuber1": "jkuw",
    "class": "class4",
    "number2": {
      "computer": "mac Pro",
      "class": "计算机"
    },
    "acount": {
      "nuber1": "jkuw",
      "class": "class4",
      "number2": {
        "computer": "mac Pro",
        "class": "计算机"
      }
    }
  },
  "name": "jkwu",
  "group": {
    "name": "永恒",
    "column": 1,
    "number": 30
  }
}
```