interface Developer {
    name: string;
    skill: string;
}  

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Ko', age: 30, skill: 'Making' }
}

const ko = introduce();
console.log(ko.skill)

if ((ko as Developer).skill) {
    console.log((ko as Developer).skill);
} else if ((ko as Person).age) {
    console.log((ko as Person).age)
}

// 타입 가드 정의
// 많이 사용합니다.
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill ! == undefined;
}

if(isDeveloper(ko)) {
    console.log(ko.skill);
} else {
    console.log(ko.age);
}