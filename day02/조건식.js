5 == 5 //true
5 == '5' //true
5 == 8 //false

false == '0' //true
false == 'false' // false
false == undefined //false
false == null //false

null == undefined //true
null === undefined //false

5 === 5 //true
5 === '5' //false

NaN === NaN //false
//NaN은 JS에서 자신과 일치비교 되지 않는 유일한 값
//따라서 해당 값이 NaN이 아닌지 확인하기 위해서는
//자바스크립트의 빌트인(초기 패키지) 객체의 isNaN

//let a = NaN
//isNaN(a) //true

0 === -0 //true

5 != 8; //true
5 != 5; //false
5 != '5'; //false

5 !== 8; //true
5 !== 5; //false
5 !== '5'; //true