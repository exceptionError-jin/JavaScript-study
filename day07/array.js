//유니코드기반
//그래서 callback으로 a,b로 비교해줘야함(숫자한정)
//a - b 오름차순 b - a 내림차순

const arr1 = [60000, 4, 1000, 3, 5, 2];
arr1.sort((a, b) => a - b);
console.log(arr1.reverse);
