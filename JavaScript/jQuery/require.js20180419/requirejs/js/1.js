//第一个参数：本模块依赖的模块列表  路径是以html的路径为基准 根路径开始写
//第二个参数：模块的主体, "_"与jQuery有关 可代表$ 但是普通的js中 可代表参数 占位符
define(["js/2.js"], function (_) {
    console.log("1模块依赖与2模块");
    console.log(_)
    var c = function (a,b) {
        console.log(a-b)
    }
    return {c : c}
});