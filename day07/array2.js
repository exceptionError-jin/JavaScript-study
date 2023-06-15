const users = [
  {
    id: 1,
    name: 'jin',
  },
  {
    id: 2,
    name: 'jina',
  },
  {
    id: 3,
    name: 'ajin',
  },
];

const newUsers = users.map((users, i) => {
  return {
    // id: users.id,
    // name: users.name,
    ...users,
    nick: `닉네임${i + 1}`,
  };
});

// console.log(newUsers);

const filterUsers = users.filter((user) => user.id !== 3);

// console.log(filterUsers);

const findUser = users.find((user) => user.id === 1);

// console.log(findUser);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//reduce에 끝에는 기본값을 부여할 수있는데
//기본값 5 부여서 처음 n의 값은 5가된다
//그이후부터는 배열의 요소를 그대로 가지고온다
//그러나 만약에 기본값이 없다면 첫 요소를 n으로 부여한다

// let result = numArr.reduce((a, b) => a + b, 0);

// let result = numArr.reduce((sum, n) => {
//   return sum + n;
// }, 5);

// console.log(result);

const arr12 = [
  { id: 1, name: 'com', status: 0 },
  { id: 2, name: 'not_book', status: 1 },
  { id: 3, name: 'car', status: 0 },
];

const every_Result = arr12.every((n) => n.status === 0); //false
const some_Result = arr12.some((n) => n.status === 0); // true

console.log(every_Result);
console.log(some_Result);

//return사용시 안에 새로운 로직을 만들 수있음!!!!!!!!
/* return을 생략하기 위해서는 {}문과 return을 생략하면된다
    그러나 객체의 경우 {}문 생략할 수가 없다
    ({}), 괄호를 감싸면 return생략 가능
*/
