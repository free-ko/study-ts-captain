// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);  // 숫자 10


// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이');



function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');   // 함수를 사용 할 때 타입을 지정할 수 있다.
str.split('')                         // 그래서 split()함수는 문자열만 사용 할 수 있는데 위에서 문자열로 할당 하기 때문에 사용할 수 있다.


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = { value: 10, selected: false };


// 제네릭 타입 제한
// function logTextLength<T>(text: T[] ): T[] {
//     console.log(text.length);
//     return text;
// }

// logTextLength<string>(['hi','123']);


// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
};

logTextLength('hi');
logTextLength({leng: 10});