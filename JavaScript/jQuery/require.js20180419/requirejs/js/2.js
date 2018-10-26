/*
* 1.子js, 或作为依赖使用, 通过define中的 function return 把需要传出去的js暴露出去
*/
define(function () {
    var add = function (x, y) {
        return x + y;
    };
    return {
        add: add
    };
});