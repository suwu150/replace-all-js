
/*
* 替换字符串
* currentString当前需要替换的字符串
* replacedString要被替换掉的字符串
* newString替换之后的字符串
* */
function replaceString(currentString, replacedString, newString){
  if(currentString != null) {
    const reg = new RegExp(replacedString, 'g');
    currentString = currentString.replace(reg, newString);
  }
  return currentString;
}

module.exports = { replaceString };