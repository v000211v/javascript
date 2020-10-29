// 1. function
// - 함수선언과 함수호출
function myFunc( ) {
  console.log('안녕, 자바스크립트');
}

myFunc()

const sayHello = function() {
  console.log('Hello');
}

sayHello ()

// 2. 매개변수 parameter
function printmessage(message) {
  console.log(message);
}

printmessage('하하하')
printmessage('하하하gk')

// 3. 기본 파라미터
function showinfo(title, name = '스티브잡스') {
  console.log(`${title} by ${name}`)
}

showinfo('게르니카', '피카소')
showinfo('풍경')

// 4. Rest 파라미터 / Spread 연산자(es6)
function printAll(...items) {
  // for(let i = 0; i < items.length; i++ ) {
  //  console.log(items[i])
  // }

for (const item of items) {
  console.log(item)
}
}

printAll('봄', '여름', '가을', '겨울', '안녕')

// 5. scope
let movie = '하하하' //globol변수(전역변수)
function paintMovie( ) {
  let myMovie = '생활의 발견' // Local변수(지역변수)
  console.log(myMovie);
  console.log(movie);
}

paintMovie()

// 6. return
function plus(a, b) {
  console.log('안녕하세요2');
  return a + b
}

const result = plus(5, 10)
console.log(result);

// 7.callback function 콜백함수
const call = function(myName, printPicaso, printJobs) {
  if(myName === 'Picaso') {
    printPicaso()
  } else {
    printJobs()
  }
}
const printPicaso = function() {
  console.log('I am Picaso');
}

const printJobs = function() {
  console.log('I am Jobs');
}
call ('Jobs', printPicaso, printJobs)

//8. Arrow function
// const add = function (a, b) {
//   return a + b
// }

const add = (a, b) => a + b


const sum = add(5, 8)
console.log(sum);

// function printHello() {
//   console.log('안녕하세요3');
//   console.log(this);
// }

const printHellow = () => {
console.log(this);
}
printHellow()