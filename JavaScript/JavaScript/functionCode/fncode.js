<<<<<<< HEAD
let MakePowerFn = (power) => {
  base => Math.pow(base, power)
}
function jc(n) {
  return n == 0 ? 1 : n * jc(n - 1)
}
let combinator = (func) => (func(func))
// let jc = n => n == 0 ? 1 : n * jc(n - 1)
function jc1(func, n) {
  return n == 0 ? 1 : n * func(func, n - 1)
}
// let jc1 = (func, n) => (n == 0 ? 1 : n * func(func, n - 1))
((func, x) => func(func, x))((func, n) => (n == 0 ? 1 : n * (func, n - 1)), 5)
=======
let MakePowerFn = (power) => {
  base => Math.pow(base, power)
}
function jc(n) {
  return n == 0 ? 1 : n * jc(n - 1)
}
let combinator = (func) => (func(func))
// let jc = n => n == 0 ? 1 : n * jc(n - 1)
function jc1(func, n) {
  return n == 0 ? 1 : n * func(func, n - 1)
}
// let jc1 = (func, n) => (n == 0 ? 1 : n * func(func, n - 1))
((func, x) => func(func, x))((func, n) => (n == 0 ? 1 : n * (func, n - 1)), 5)
>>>>>>> cffaa633d1407b7f720373df948027596ad4a1a5
console.log((!(~+[]) + {})[--[~+""][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]])