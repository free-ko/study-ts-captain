// 타입 단언(type assertion)
let a;
a = 20;
a = 'a';
let b = a as string;    // 타입을 string으로 지정해주는 것, 위에서 a 값을 바꿔도 b 타입을 any라고 읽기 때문에 타입을 지정해 줌

// DOM API 조작

// div가 존재하지 않을 수도 있기 때문에 밑에 처럼 if문을 써서 그 다음에 innerText를 적용해야 합니다.
// 타입스크립트가 null일 수도 있다고 이야기를 합니다.
// 그렇기 때문에 as HTMLElement로 타입을 선언해줘야 합니다.
const div = document.querySelector('#app') as HTMLElement

if (div) {
    div.innerText
}