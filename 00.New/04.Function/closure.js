/**
 * 클로저와 컨텍스트
 */

function makeId() {
   let lastId = 0;

   return function() {
      return ++lastId
   };
}

let idFunc = makeId();

console.log(idFunc());//1
console.log(idFunc());//2
console.log(idFunc());//3

// Error
// console.log(lastId);

let idFund2 = makeId();
console.log(idFund2());//1
console.log(idFund2());//2