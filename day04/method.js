/* 
    method
    객체의 속성값이 함수일 경우 일반 함수와 구분하기 위해 매서드라고 한다.
    웬만하면 화살표함수는 메서드로 쓰지않음(this바인딩 시 문제)
*/

const PrintService = {
  on() {
    console.log('실행되었습니다.');
  },
  off: function () {
    console.log('종료되었습니다.');
  },
};

PrintService.on();
PrintService.off();

/* 비슷한 속성의 함수들을 하나의 객체로 묶어서
    한번에 관리하기 위함
*/
