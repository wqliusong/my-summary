var arr = [1, 2, 3, 4, 5, 6, 7, 8]
var objArr = [
  {
    'index': 1,
    'title': "a"
  }, {
    'index': 2,
    'title': "b"
  }, {
    'index': 3,
    'title': "c"
  }, {
    'index': 4,
    'title': "d"
  }, {
    'index': 5,
    'title': "e"
  }, {
    'index': 6,
    'title': "f"
  }
]

// console.log(objArr => objArr.i === 1)
function b(a){
  return a.i ===1
}
p => p.id === 1
// function(p) { return p.id === 1 }
function p(){
  return p.id === 1
}
const posts = [
  { id: 1, title: 'Title 1' },
  { id: 2, title: 'Title 2' }
];
// 找出id为1的posts
const title = posts.find(p => p.id === 1).title;
console.log(title)