let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('\n\n\narr[0]: ', arr[0]);
Object.defineProperty(arr, '0', {
    value: 55,
    writable: false,
    enumerable: true,  // 属性是否会出现在枚举中
    configurable: false // 可配置，并禁止删除属性操作
});
console.log('arr[0]: ', arr[0]);

delete arr[0]
console.log('arr[0]: ', arr[0]);

arr[0] = 77; // 对属性的修改静默失败
console.log('arr[0]: ', arr[0]);



// let _value; // 局部变量
// Object.defineProperty(arr, '1', {
//     // enumerable: false,
//     get: function(){
//         return _value || '';
//     },
//     set( newVal){
//         _value = newVal;
//     }
// });
// console.log('\narr[1]: ', arr[1]);
// arr[1] = 22;
// console.log('arr[1]: ', arr[1]);


// console.log('\ngetOwnPropertyDescriptor');
// console.log(Object.getOwnPropertyDescriptor(arr, '1'));
// console.log(Object.getOwnPropertyDescriptor(arr, '0'));

// console.log(Object.keys(arr));


// arr[8] = 1;
// console.log(
//     '\narr[8]:',
//     arr[8],
//     arr.length
// );

// Object.preventExtensions(arr); // 禁止扩展
// arr[9] = 22;

// console.log(
//     '\narr[9]:',
//     arr[9],
//     arr.length
// );