# replace-all-js
js replaceAll achieve
# use
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