var curryScore = function (fn) {
	var __allScore = []
	return function () {
		// 为空就吧参数穿进去, 开始计算
		if (arguments.length === 0) {
			return fn.apply(null, __allScore)
		} else {
			__allScore = __allScore.concat([].slice.call(arguments));
		}
	}
}

var allScore = 0;
var currAddScore = curryScore(function () {
	console.log(arguments)
	//写统计代码
	for (const key in arguments) {
		if (arguments.hasOwnProperty(key)) {
			const element = arguments[key];
			allScore += element
		}
	}
})

currAddScore(3)
currAddScore(3)
currAddScore(3)
console.log(allScore) //空间换时间, 此时为0, 直到没有调用才计算
currAddScore(3)
currAddScore(3)
currAddScore(3)
currAddScore()
console.log(allScore)


//通用版本
var curry = function (fn) {
	var __args = []
	return function cb() {
		if (arguments.length === 0) {
			return fn.apply(null, __args)
		}
		Array.prototype.push.apply(__args, [].slice.call(arguments))
		return cb
	}
}


function add(a, b) {
	console.log(a + b)
}
var addCurry = curry(add)
//传个空 开始计算
addCurry(1)(2)()