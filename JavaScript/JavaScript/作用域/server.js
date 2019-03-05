<<<<<<< HEAD

var length = 10
var num = 30
function fn(a) {
  console.log(a)
  console.log(this.length)
  console.log(this.num)
}
fn('外')
var obj = {
  length: 5,
  method: function (fn) {
    fn('内1') // ?
    arguments[0]('内a') // ?
  },
  mt: (function (){
    this.method()
    fn('内2')
    //return
  })()
}
=======

var length = 10
var num = 30
function fn(a) {
  console.log(a)
  console.log(this.length)
  console.log(this.num)
}
fn('外')
var obj = {
  length: 5,
  method: function (fn) {
    fn('内1') // ?
    arguments[0]('内a') // ?
  },
  mt: (function (){
    this.method()
    fn('内2')
    //return
  })()
}
>>>>>>> cffaa633d1407b7f720373df948027596ad4a1a5
obj.method(fn)