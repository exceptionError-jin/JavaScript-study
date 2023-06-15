const a = {
    name:'jin',
};
const b = {
    name:'jin',
};
const c = a;

console.log(a === b); //false 주소가 다름
console.log(a === c); //true

a.name = "aaa";
console.log(c.name); //aaa 얕은 복사

//전개 연산자
//전개 : 펼치는 것
const ba = {...a}; //객체

const arr = [1,2,3,4,5]; //배열
const e = [...arr]; //[1,2,3,4,5]

console.log(e);
console.log(ba);

//object assign
const newObject = Object.assign({}, a);
console.log(newObject);