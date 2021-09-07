/** 高阶函数 */
// node只能使用CommonJs模块引入方法
const _ = require("./underscore");

let maxVal = _.max([1,2,3,5,77,8,91]);
console.log( 'maxVal', maxVal );

