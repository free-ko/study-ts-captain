// 타입 추론 기본 1
let a = 10;

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// Best Common Type  - 타입스크립트가 타입을 메기는 알고리즘
// 모든 타입을 UION으로 묶는 것
let arr = [1, 2, true, 'a'];
