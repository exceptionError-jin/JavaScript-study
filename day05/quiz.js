/* 
자판기라는 함수 정의

자판기 함수는 처음에 실행되었을 때 자판기가 가동되었습니다 출력
자판기 함수의 파라미터는 coin, menu

자판기 함수의 반환값은 0

잔돈이 0원이면 음료수 이름 반환
잔돈 있을 시 음료수 이름과 잔돈 반환
금액 적을시 금액이 부족합니다 반환
없는 메뉴 시 존재하지 않는 상품입니다 반환

메뉴
솔의눈 300
비타500 500
콜라 1000
*/
function 자판기(coin, product) {
  let change; //잔돈
  let menu = { 솔의눈: 300, 비타500: 500, 콜라: 1000 };

  let selectPrice = menu[product]; //파라미터로 전달 받은 품목의 가격

  //예외 처리
  if (selectPrice) return console.log('없는 제품');
  if (coin < selectPrice) return console.log('금액부족');

  //로직
  change = coin - selectPrice;
  if (change === 0) return console.log(product);
  console.log(product, change);
}

/* 문제 2
    010-1234-1234를 파라미터를 전달받아
    010-****-1234로 파싱
*/
function phone(num1) {
  const newArr = Array.from(num1);
  newArr.splice(4, 4, '****').join();
  return newArr.join('');
}

console.log(phone('010-1234-1234'));

let num = '010-1234-1234';
console.log(num.replace('1234', '****'));

function aaa(phone) {
  const arr = phone.split('-');
  arr[1] = '****';
  return arr.join('-');
}

console.log(aaa('010-1234-1234'));
