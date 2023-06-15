/* 빌트인 객체 */
/* 내장 객체란 네이티브 객체, 호스트객체
네이티브 객체 -> object, number, array 객체 생성관 관련된 함수 객체와 메소드로 구성
호스트 객체 -> window, location, history, document(전역 객체)
 
==>프로토타입 예시
array.prototype.division = function(){
    ...
}
const arr = [1,2,3,4,5];
arr.division();

==>빌트인 객체 생성
const obj = new Object();
const obj = {};

---> 자바스트립트에서 정의하지 않아도 편의성을 위하여 자체적을 만들어둔 내장 기능
---> 도움을 주기 위해 만든 편리한 기능
console.log()
*/

/* 배열의 생성 */
//array.from -> 유사 배열 객체
// -> 배열이 갖고 있는 속성을 가진 객체
// 객체이지만 배열과 관련된 속성값을 가지고 있는 객체
let obj = {
  0: '1',
  1: '2',
  length: 2,
};

obj.length;
obj[0];

//콜백함수가 return하는 값을 요소로 삼는 배열 생성
const arr = Array.from({ length: 5 }, (el, i, originArr) => {
  return i;
});
// console.log(arr);

//array.of
// ()인자로 들어온 값을 요소로 삼는 배열 생성
const ofArr = Array.of(1, 2, 3);

//array.fill
//fill(value, start, end)
//end인덱스 직전까지의 값을 채움
const fillArr = Array(10).fill(0, 0, 10);
console.log(fillArr);

const fillArr2 = Array(10)
  .fill()
  .map((el, i) => {
    return i;
  });
console.log(fillArr2);

/* 배열 검사 */
Array.isArray([]) //true
Array.isArray(new Array()) //true
Array.isArray({}) //false
Array.isArray({length: 2}) //false

