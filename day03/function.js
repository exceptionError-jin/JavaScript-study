function add(n1, n2) {
    const result = n1 + n2;
    console.log(result);
}

add(1, 2);

function printName(name) {
    console.log(name);
} 
printName("jin");
printName("ji");
printName("jiaaan");

/*  함수를 작성하는 이유는
    작성한 비즈니스 로직(기능)을 컴퓨터에게 기억시키고 재사용하기 위함
    
    return 값이 없다면 해당 실행부는 함수의 기능을 실행은 하지만
    값 자체는 undefined고 return이 있다면 해당 return 값을 실행부에 할당

    따라서 return 값의 유무는 우리가 설계한 로직하에 해당 함수의 값이 있어야하는가 없는가
*/