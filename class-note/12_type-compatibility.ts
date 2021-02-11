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
