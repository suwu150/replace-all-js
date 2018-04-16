/**
 * Created by jkwu on 17-11-29.
 */
const { isString } = require('../src/isString');

const str = 'dscdcsdsc,ds,cds,dcs,cds,c,ds ' +
  'vddsvdsvds' +
  'vdsvdsvds' +
  'vdsvdsvds,vds\n' +
  'vsvds,vdsvds\n' +
  ',vdsvds' +
  'vds,vdsvdsv';

console.log(isString(str));