


let arr = ['a', 'b', 'c', 'd', 'e'];

let proxy = new Proxy(arr, {
    get: function(target, propKey, receiver){
        return target[propKey];
    },

    set: function(target, propKey, newValue, receiver) {
        target[propKey] = newValue;

        // 触发更新视图
        // ...
    }
});

proxy[1]
proxy[2]







