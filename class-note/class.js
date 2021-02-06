// 밑에 코드랑 똑같음
// 생성자 함수임
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const capt = new Person('코코', 100);


// ES2015 (ES6)

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

const ko = new Person('고영', 30); // '생성 되었습니다.'
console.log(ko);