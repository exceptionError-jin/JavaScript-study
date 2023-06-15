//callback
//부모한데 전달 받은 파라미터를 내마음대로 로직을 작성하기 위해 사용(재사용)

//callback을 사용하지 않으면 부모함수 내에서 직접 로직을 수정
//재사용 불가능

function parents(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

parents(5, function (index) {
  console.log(index * 2);
});

parents(5, (index) => console.log(index * 3));
