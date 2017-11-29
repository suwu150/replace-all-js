/**
 * Created by jkwu on 17-11-29.
 */
function replaceAll(currentStr, replaced, news) {
  if(currentStr!=null)
  {
    const reg = new RegExp(replaced, 'g');
    currentStr = currentStr.replace(reg, news);
  }
  return currentStr;
}

module.exports = { replaceAll };