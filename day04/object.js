let jin = {
  name: 'jin',
  age: 20,
  height: 200,
};

let post = {
  title: 'a',
  content: 'aaa',
  user: jin,
};

// console.log(post);
// console.log(post.user);

post.user = {
  name: 'jjj',
};

// console.log(post);

// const여도 객체는 주소 재할당 가능함
// 실제데이터는 힙에 저장됨 -> 변수/상수에는 메모리 힙의 주소값이 저장
// -> 힙의 위치값(주소값)을 콜스택에 저장함
// -> 객체가 상수로 선언되었다고 하더라도 주소값이 바뀌는게 아니므로 재할당 가능

let con = new Object(); //비어있는 객체 생성{}
// 오브젝트라는 틀로 새로운 생성자를 만든다 -> new라는 것은 새로운 생성자를 만드는 것 (독립적)
// ex) 오브젝트 -> 붕어빵 틀, new -> 틀로 만든 붕어빵(똑같이 생겼지만 다름)

con.name = 'jin';
// console.log(con);
con.name = 'cat';
// 뒤에 값이 앞에값을 덮어씌움
const newObj = Object.assign(jin, con);
console.log(newObj);
