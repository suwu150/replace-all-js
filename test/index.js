/**
 * Created by jkwu on 17-11-29.
 */
const { replaceAll } = require('../index');
const str = 'dscdcsdsc,ds,cds,dcs,cds,c,ds ' +
  'vddsvdsvds' +
  'vdsvdsvds' +
  'vdsvdsvds,vds\n' +
  'vsvds,vdsvds\n' +
  ',vdsvds' +
  'vds,vdsvdsv';
const result = replaceAll(str, ',', '--');
console.log(result);