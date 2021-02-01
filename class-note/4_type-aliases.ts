// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

const seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;

const str: MyString = 'hello'

type Todo = { id: string, title: string; done: boolean };
function getTodo(todo: Todo) {

}

// 왠만하면 interface를 사용 하는게 좋음
// interface는 상속도 되기 때문에 확장성에 용이 함
// 즉 좋은 프로그래밍은 확장성에 유연한게 좋은 것임
// 공식문서에서도 그렇게 써져 있음
