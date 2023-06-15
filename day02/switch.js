/* 변수의 이름은 아무렇게나 막 지으면 안됨!!
    가독성을 위하여 해당 변수가 무엇을 의미하는 지 명확하게 적어야함
    근래에는 독일어 표기법으로 변수명이 길어지더라도 그 의미를 명확하게 지어 주어야함

    표기법
        카멜 표기법(자바,자바스크립트 표준)
            let mathScore

        파스칼 표기법(쌍봉 표기법)
            let MathScore

        스네이크 표기법
            let math_score
*/
let month = 2;

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;    
    default:
        console.log('None');
        break;
}