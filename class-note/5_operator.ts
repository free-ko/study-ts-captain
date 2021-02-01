// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);



// 유니온 타입
let seho: string | number | boolean;

// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
// 밑에서 타입을 any로 작성 할 경우
// 타입별 조건을 부여 할 수 없음
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'number') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 공통된 name 타입만 사용 가능
// 현실에서 이게 더 사용 많음
function askSomeone(someone: Developer | Person) {
    someone.name
    // someone.skill 
    // someone.age
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100});

// 인터섹션 타입
// 오히려 이게 타입 다 사용 가능
function askSomeone2(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}

// 모든 타입 가져와야됨
// askSomeone2({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone2({ name: '캡틴', age: 100});
