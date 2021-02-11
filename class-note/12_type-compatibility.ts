// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    // skill: string;
}

let developer: Developer;
let person: Person;

developer = person;

person = developer;   // person이 developer에 속할 수 있기 때문에 에러가 발생하지 않음


// 함수
let add = function(a: number) {
    // ...
}

let sum = function(a: number, b: number) {
    // ...
}
sum = add;
// add = sum;


// 제네릭
interface Empty<T> {
    // ...
}

let empty1: Empty<string>;

let empty2: NoEmpty<number>;

interface NoEmpty<T> {
    data: T;
}

empty1 = empty2
empty2 = empty1