
let email = function () {
  console.log("email")
}
let phone = function () {
  console.log("phone")
}
let ename = function () {
  console.log("ename")
}
email()
phone()
ename()

/* -------------------------------- 使用对象互不干扰 ----------------------------------- */
let epn1 = {
  email: function () {
    console.log("email")
  },
  phone: function () {
    console.log("phone")
  },
  ename: function () {
    console.log("ename")
  }
}
// console.log(new epn1())//error

let epn2 = function () {
  return {
    email: function () {
      console.log("email")
    },
    phone: function () {
      console.log("phone")
    },
    ename: function () {
      console.log("ename")
    }
  }
}
console.log(new epn2() === new epn2())//false

/* ------------------------------------- 链式函数调用 ----------------------------------- */
var epn3 = {
  email: function () {
    console.log("email")
    console.log(this)
    return this
  },
  phone: function () {
    console.log('phone')
    // console.log(this)
    return this
  },
  ename: function () {
    console.log('ename')
    // console.log(this)
    return this
  }
}
epn3.email().phone().ename()
// epn3.email().email().email()

let epn4 = function () { }
epn4.prototype = {
  email: function () {
    console.log('email')
    return this
  },
  phone: function () {
    console.log('phone')
    return this
  },
  ename: function () {
    console.log('ename')
    return this
  }
}
let e4 = new epn4()
e4.email().phone().ename()

/* ------------------------------------- 为原型增加方法 ----------------------------------- */
Function.prototype.addMethod1 = function (name, fn) {
  this[name] = fn
}
let method1 = new Function()
method1.addMethod1('email', function () {
  console.log('email')
})
method1.addMethod1('phone', function () {
  console.log('phone')
})
method1.addMethod1('ename', function () {
  console.log('ename')
})
method1.email()
method1.phone()
method1.ename()

/* ------------------------------------- 链式原型增加 ----------------------------------- */
Function.prototype.addMethod2 = function (name, fn) {
  this[name] = fn
  return this
}
/* 
  Function.prototype.addMethod2 = function (name, fn){
    this.prototype[name] = fn
  }
 */
let method2 = new Function()
method2.addMethod2('email', function () {
  console.log('email')
  return this
}).addMethod2('phone', function () {
  console.log('phone')
  return this
}).addMethod2('ename', function () {
  console.log('ename')
  return this
})
method2.email().phone().ename()

/* ------------------------------------- constructor/prototype ----------------------------------- */
let Book = function () {
  this.name = "书"
  this.id = "1"
  this.look = function () {
    console.log('look')
  }//每创建一个对象 都会创建一个look方法
}
let Book2 = function () { }
Book2.prototype.look = function () {
  console.log('look')
}
let b1 = new Book()
let b2 = new Book()
let b21 = new Book2()
let b22 = new Book2()
console.log(b1 == b2)//false
console.log(b1.look == b2.look)//false
console.log(b1.look() == b2.look())//true undefinde == undefinde 无返回值
console.log(b21.look == b22.look)//true
console.log(b21.look() == b22.look())//true undefinde == undefinde 无返回值

console.log(Book.prototype)
console.log(b1.__proto__)
console.log(b2.__proto__)
console.log(b1.__proto__ === b2.__proto__)//true
console.log(b2.__proto__ === Book.prototype)//true
console.log(Book.prototype.constructor)
console.log(b1.__proto__.constructor)
console.log(Book.prototype.constructor === b1.__proto__.constructor)//true

/* ------------------------------------- 封装检测模块 ----------------------------------- */
let People = function (id, name, age) {
  if (this instanceof People) {
    this.name = name
    this.id = id
    this.age = age
  } else {
    return new People(id, name, age)
  }
}
let newP1 = People(1, "小明", 12)
let newP2 = new People(2, "小红", 14)
console.log(this)
console.log(newP1.name)
console.log(newP2.name)

/* ------------------------------------- 抽象工厂模式 ----------------------------------- */
var VehicleFactory = function (subType, superType) {
  console.log(VehicleFactory[superType])
}
VehicleFactory.Car = function () {
  this.type = 'car'
}
VehicleFactory("123", "Car")

/* ------------------------------------- 继承 ----------------------------------- */
//类式继承 
function FatherClass() {
  this.fatherVal = true
}
//父类方法
FatherClass.prototype.getFatherVal = function () {
  return this.fatherVal
}
//创建子类
function ChildClass() {
  this.childVal = false
}
var f = new FatherClass()
console.log(f)
//继承父类
ChildClass.prototype = new FatherClass()
//子类共有方法
ChildClass.prototype.getChildVal = function () {
  return this.childVal
}
var c = new ChildClass()
console.log(c)
console.log(c.getFatherVal())
console.log(c.getChildVal())

function FatherClass1() {
  this.books = ['第一本', '第二本', '第三本']
}
function ChildCalss1() { }
ChildCalss1.prototype = new FatherClass1()
var c1 = new ChildCalss1()
var c2 = new ChildCalss1()
console.log(c1.books)
c1.books.push("第四本书")
console.log(c2.books)

/* ------------------------------------- 构造函数继承 ----------------------------------- */
//父类
function FatherClass2(id) {
  this.books = ['第一本书', '第二本书']
  this.id = id
}
//父类方法
FatherClass2.prototype.showBook = function () {
  console.log(this.books)
}
//子类
function ChildClass2(id) {
  FatherClass2.call(this, id)//更改函数作用环境  将子类中的变量在父类执行一遍, 父类给this绑定属性, 现在this是子类, 所以给子类也绑定了一遍, 于是子类继承了父类
}
var c21 = new ChildClass2(10)
var c22 = new ChildClass2(12)
c21.books.push("第三本书")
console.log(c22.books)
try {
  c21.showBook()
} catch (error) {
  console.log("错误")
}

/* ----------------------{--------------- 寄生式继承 ----------------------------------- */
function inheritObject(o){
  //声明过度对象
  function F(){  }
  //过度对象的原型继承父对象
  F.prototype = o
  console.log(F.prototype)
  //返回过渡对象的实例, 该实例继承了父对象
  return new F()
}
var book = {
  name: '第一本书',
  alikeBook: ["css book", "html book"]
}
// function createBook(obj){
//   //通过原型继承方式创建新对象
//   var o = new inheritObject(ojb)
//   //return
// }
function A() {
  this.i = 1
}
A.prototype.showI = function (){
  console.log(this.i)
}
var aT = new A()
console.log(A.prototype)
var cT = inheritObject(A.prototype)
console.log(cT.__proto__)
console.log(aT.__proto__)
console.log(aT.__proto__ === cT.__proto__)//true
console.log(A.prototype.constructor)
console.log(cT.constructor)
console.log(cT.__proto__.constructor)

/* ------------------------------------- 抽象工厂方法 ----------------------------------- */
var VehicleFactory1 = function (childC, fatherC){
  //判断抽象工厂中是否有该抽象类
  if (typeof VehicleFactory1[fatherC] === 'function'){
    //缓存类
    function F() {}
    //继承父类的属性和方法
    F.prototype = new VehicleFactory1[fatherC]()
    //将子类constructor指向子类
    childC.constructor = childC
    //子类原型继承"父类"
    childC.prototype = new F()
  }else{
    throw new Error('没有抽象类')
  }
}
//小汽车抽象类
VehicleFactory1.Car = function () {
  this.type = 'car'
}
VehicleFactory1.Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法未实例化')
  },
  getSpeed: function () {
    return new Error('抽象方法未实例化')
  }
}
//公交车抽象类
VehicleFactory1.Bus = function () {
  this.type = 'bus'
}
VehicleFactory1.Bus.prototype = {
  getPrice: function () {
    return new Error('抽象方法未实例化')
  },
  getSpeed: function () {
    return new Error('抽象方法未实例化')
  }
}
//卡车抽象类
VehicleFactory1.Truck = function () {
  this.type = 'truck'
}
VehicleFactory1.Truck.prototype = {
  getPrice: function () {
    return new Error('抽象方法未实例化')
  },
  getSpeed: function () {
    return new Error('抽象方法未实例化')
  }
}
//宝马汽车子类
var BMW = function(price, speed){
  this.price = price
  this.speed = speed
}
//抽象工厂对实现Car抽象类的继承
VehicleFactory1(BMW, 'Car')
BMW.prototype.getPrice = function (){
  return this.price
}
BMW.prototype.getSpeed = function (){
  return this.speed
}
//宇通公交子类
var YUTONG = function (price, speed){
  this.price = price
  this.speed = speed
}
//抽象工场实现对Bus抽象类的继承
VehicleFactory1(YUTONG, 'Truck')
YUTONG.prototype.getPrice = function () {
  return this.price
}
YUTONG.prototype.getSpeed = function (){
  return this.speed
}
var bmw = new BMW(1000000,20)
console.log(bmw.getPrice())
console.log(bmw.getSpeed())
var yutong = new YUTONG(20000,30)
console.log(yutong.getPrice())
console.log(yutong.getSpeed())