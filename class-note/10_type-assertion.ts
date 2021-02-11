// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';
let b = a as string;    // 타입을 string으로 지정해주는 것, 위에서 a 값을 바꿔도 b 타입을 any라고 읽기 때문에 타입을 지정해 줌

// DOM API 조작