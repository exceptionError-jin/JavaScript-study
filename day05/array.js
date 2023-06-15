const arr = [];
arr[1] = '1';
arr[3] = 3;
// console.log(arr);

const arr2 = ['jin', 'kim', 'aaa'];

// if (arr2.indexOf('jin') >= 0) {
//   arr2.push('kim1');
// }
// console.log(arr2);

/* split 
    문자열은 유사배열로서 문자들의 배열이 되고 배열과 관련된 기능들을 사용할 수 있다.
*/

const phone = '010-1234-1234';

console.log(phone.length); //13
phone.split('-');
console.log(phone.split('-').length); //3

console.log(phone.split('-').join(''));

// 내장함수
const arr3 = [1, 2];
arr.push(4, 5);

//concat -> 합침
const arr4 = [1, 2];
const arr5 = [3, 4];

const result = arr4.concat(arr5);

console.log(result);

//pop - 마지막 요소 제거
const arr6 = [1, 2, 3, 5];
const deleteEl = arr6.pop();
console.log(deleteEl, arr6);

//shift, unshift - 맨앞 요소 추가, 삭제
const arr7 = [1, 2, 3, 4];
arr7.unshift(5); //맨 앞에 추가
console.log(arr7);
arr7.shift(); // 맨 앞에 제거
console.log(arr7);

//slice(start, end)

//start번쨰 인덱스부터 시작하여
//end 직전까지의 인덱스 요소만을 복사하여 반환

const apart = [1, 2, 3, 4, 5, 6];
apart.slice(0, 3);
console.log(apart.slice(0, 3));
console.log(apart.slice(0));
console.log(apart.slice(-4, -1));
console.log(apart.slice(-3));
//마지막 인덱스는 -1로 표기함

//splice(start, deleteCount, item)
//item은 생략가능, splice의 주 용도는 내가 원하는 요소를 삭제하기 위함

const deleteArr = apart.splice(1, 4, ['a', 's', 'v']);
console.log(deleteArr, apart);
console.log('apart[1] = ', apart[1]);
