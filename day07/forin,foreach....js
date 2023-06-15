/* 
    일반 객체는 이터러블한(순회 가능한) 객체인가??

    아닙니다

    순회가능함을 판단하는 것을 이터레이터라는 속성값이
    객체에 존재해야만 순회가능

    따라서 일반 객체는 이터레이터가 존재하지 않기 때문에
    for of와 for Each, for문은 사용이 불가능하다

    이터러블하지 않은 객체를 반복하기 위해
    자바스크립트가 for문을 만든다(for in)


*/

let jin = {
  name: 'kim',
  age: 26,
};

for (const key in jin) {
  console.log(jin[key]);
}

// Object.keys()... 이런식으로 만들수있지만 편하게 만들라고 for in탄생

//순회 가능한 객체에서 사용할 수 있는 반복문
//순회 가능한 객체(array, map, collection...)
const arr = [1, 2, 3, 4];

//반드시 모든요소를 순회해야하며 ** index가 필요할 때
arr.forEach((el, index, originArr) => {
  console.log(el);
});

//for of
//반드시 모든 요소 순회, 요소의 값에만 접근 가능
for (const el of arr) {
  console.log(el);
};
