//require的配置文件, 在data-main中引用, 其他页面只要 也引入一下data-main的script就可以了
require.config({
    //配置需要的js路径,或者在线sdn, 可以写数组, 从第一个开始如果没有返回则用第二个, 以备无网时使用
    //baseUrl: "js", //配置基础路径,然后以下的调用文件, 会在此目录的基础上往下走目录
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/1.12.0/jquery",
        "jqueryCookie": "https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie",
        "jqueryMock": "https://cdn.bootcss.com/jquery-mockjax/1.6.0/jquery.mockjax",
        "math": "./2",
        "1":"./1"
    },
    //设置 依赖 jqueryMock 依赖于jQuery, 而在调用时依旧 使用$调用 所以exports 暴露$方法入口, Cookie原理如此
    shim: {
        "jqueryMock": {
            deps: ["jquery"],
            exports: "$"
        },
        "jqueryCookie": {
            deps: ["jquery"],
            exports: "$"
        }
    }
});
//第一个参数：数组，需要加载的模块，异步加载的
//第二个参数：回调函数，在模块都加载完毕之后，回调函数才会执行
// 通过require 调用的js, 然后把调用地方法通过参数传给他, "_"表示需要参数,占位但是没有实际意义,也不重新命名,他原来是什么就是什么 
// 可以引入js 但是在那个js已经调用了 传了数据 这面就不用再调用他的方法处理数据 ,这也是最好的办法 这边只做引入, 每个子js处理问题
require(['jquery', 'jqueryCookie', 'jqueryMock', 'math', '1'], function (_,_,_,math,a) {
    console.log(a)
    console.log(arguments)
    //通过形参的名字 调用该js下的方法
    console.log(math.add(1, 2))
    //$ = jQuery
    $.cookie('cookieName', 'cookieValue');
    //注：如果没有设置cookie的有效期，则cookie默认在浏览器关闭前都有效，故被称为"会话cookie"。

    // 创建一个cookie并设置有效时间为7天:  
    $.cookie('cookieName', 'cookieValue', { expires: 7 });

    // 创建一个cookie并设置cookie的有效路径：  
    $.cookie('cookieName', 'cookieValue', { expires: 7, path: '/' });

    //读取cookie：
    $.cookie('cookieName'); // 若cookie存在则返回'cookieValue'；若cookie不存在则返回null   

    //删除cookie：把ncookie的值设为null即可
    $.cookie('the_cookie', null);
    //jquery的mockjax 拦截请求 传回测试数据
    jQuery.mockjax({
        url: '/products/',
        responseText: 'Here you are!'
    });
    $.ajax({
        type: "get",
        url: "/products/",
        success: function (response) {
            console.log(response)
        }
    });
    // 对"_" 占位的测试
    abc(567567,1232)
    function abc(_,x) {
        console.log(1+x)
    }
});