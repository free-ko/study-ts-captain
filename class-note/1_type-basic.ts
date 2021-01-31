// JS 문자열 선언
const str = 'hello';

// TS 문자열 선언
const string: string = 'hello';

// TS 숫자 선언
const num: number = 10;

// TS 배열 선언
const arr: Array<number> = [1,2,3];        // let items: number[] = [1,2,3] 동일
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];

// TS 튜플 선언
// 배열 인덱스 마다 타입을 정할 수 있음
const address: [string, number] = ['gangnam', 100];

// TS 객체 선언
const obj: object = {};
// const person: object = {
//     name: 'capt',
//     age: 100
// }

const person: {name: string, age: number} = {
    name: 'capt',
    age: 100
}

// TS 진위값
const show: boolean = true;