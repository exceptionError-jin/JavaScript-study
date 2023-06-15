console.log(Math.max(1,2,3)); //3
console.log(Math.min(1,2,3)); //1

const a = [1,2,3,4,5];
Math.max(a); //NaN
Math.max(...a); //5

Math.round(4.5);//5반올림
Math.floor(4.5);//4버림
Math.ceil(4.5);//5올림

let arr = [];

for(let i=0; i<7; i++){ //7자리 나옴
    let random = Math.floor(Math.random() * 45 + 1);

    for(let j in arr){ //중복숫자 제거
        while(random == arr[j]){
            random = Math.floor(Math.random() * 45 + 1);
        }
    }

    arr.push(random); //배열에 담음
}

arr.sort(function(a, b){ //오름차순 정렬
    return a - b;
});


console.log(arr); //츨력

/* 로또 번호 뽑기

    1~45까지 랜덤한 숫자 7자리 배열
        오름차순
    [1,2,3,4,5,6,7]

    매번 실행마다 다른 로또번호가 나와야한다
*/