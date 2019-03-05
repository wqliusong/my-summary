//函数柯里话

function addEvent(el, type, fn, capture) {
	if (window.addEventListener) { //如果浏览器支持这样
		el.addEventListener(type, function (e) {
			fn(e.XX, capture)
		})
	} else {
		el.attachEvent(xx)
	}
}

//未柯里话, 每次调用函数都要判断

addEvent(p, click, cb, true)
addEvent(div, click, cb, true)
addEvent(span, click, cb, true)


function addEvent() {
	if (window.addEventListener) { //如果浏览器支持这样
		return function (el, type, fn, capture) {
			el.addEventListener(type, function (e) {
				fn(e.XX, capture)
			})
		}

	} else {
		return function (el, type, fn, capture) {
			el.addEventListener(type, function (e) {
				el.attachEvent(xx)
			})
		}
	}
}
var event = addEvent()//只判断一次

event(p, click, cb, true)
event(div, click, cb, true)
event(span, click, cb, true)
