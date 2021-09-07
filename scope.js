// 变量的作用域和闭包

// node只能使用CommonJs模块引入方法
const _ = require("./underscore");

/** 函数作用域 ---------------------------------------------------------------------------------------- */
// Javascript 重新排列变量声明的动作称为吊装 var变量声明

// 闭包

// 自由变量：自由变量闭合于闭包的创建
// 捕获函数必须在外部函数内定义

// 遮蔽 Shadowing

// 变量的捕获发生在创建闭包的时候

var shadowed = 0;
function argShadow(shadowed) {
    return ['Value is', shadowed].join(' ');
}

console.log('argShadow:', argShadow(108));
console.log('argShadow:', argShadow());






function complement(PRED) {
    return function() {
        return !PRED.apply(null, _.toArray(arguments));
    }
}

function isEven(n) {
    return (n%2) === 0
}

var isOdd = complement(isEven);

console.log("2   isOdd:", isOdd(2));
console.log("413 isOdd:", isOdd(413));


// ***
// 减少变量的暴露风险，把捕获变量作为私有变量
var pingpang = (function() {
    var PRIVATE = 0;

    return {
        inc: function(n) {
            return PRIVATE += n;
        },
        dec: function(n) {
            return PRIVATE -= n;
        }
    };
})();

console.log('inc: ', pingpang.inc(5));
console.log('dec: ', pingpang.dec(20));


// 闭包的抽象










/** 动态绑定： bind  call apply ----------------------------------------------------------------- */
function makeEmptyObject() {
  return new Object();
}

// 减轻隐含的全局作用域问题

// 词法作用域：指一个变量的可见性

// 动态作用域，基础是一个全局表，动态作用域的核心就是有一个对应的栈存储值

function makeBindFun(resolver) {     // 制定了一个标准化的值处理函数：globals  |  makeBindFun
    return function(k, v) {
        var stack = globals[k] || [];
        globals[k] = resolver(stack, v);
        return globals;
    };
}

// 如何增加绑定到globals的变量
var globals = {};
var stackBinder = makeBindFun(function(stack, v) {
    stack.push(v);
    return stack;
});

var stackUnbinder = makeBindFun(function(stack) {
    stack.pop();
    return stack;
});
// 查询指定值的绑定栈
var dynamicLookup = function(k) {
    var slot = globals[k] || [];
    return _.last(slot);
}

stackBinder('a', 1);
stackBinder('b', 100);

// console.log(dynamicLookup('a'));
// console.log(dynamicLookup('b'));
// console.table(globals)

// stackUnbinder('a')
// console.log(dynamicLookup('a'));
// console.log(dynamicLookup('b'));
// console.table(globals)

function f() { return dynamicLookup('a'); }
function g() { stackBinder('a', 'g'); return f(); }

let gv = g();
// console.log( gv);
// console.table(globals)

let res = ({
    f: function(){
        return this;
    }
}).f.call( '!' );
// console.log('res', res);
