/* 
이름: 여러분들의 성함 ----> 변수 / 상수
국어: 80점
수학: 70점
영어: ..점
탐구: ..점

평균
학점

이 네가지의 점수의 평균을 구하여
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 F학점

if문 사용
console.log()

OOO님의 이번학기 성적인 O학점 입니다.
*/

let korean = 80;
let math = 70;
let english = 105;
let research = 100;

let avg = (korean + math + english + research) / 4;
let name1 = "김진";
let score;

if (avg >= 90) {
    score = 'a';
} else if (avg >= 80) {
    score = 'b';
}else if (avg >= 70) {
    score = 'c';
}else {
    score = 'f';

}
console.log(`${name1} 님의 이번 학기 성적은 ${score} 입니다`);
