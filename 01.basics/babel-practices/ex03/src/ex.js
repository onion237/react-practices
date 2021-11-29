// 블록 스코프 변수(ES6)
const users = [{
    no : 1,
    name: '마이콜',
    email: 'michol@mail.com'
},{
    no : 2,
    name: '둘리',
    email: 'dooly@mail.com'
}]

// 객체 분해(ES6)
function print({no, name, email}){
    // 템플릿 문자열(ES6)
    console.log(`${no}, ${name}, ${email}`)
}
print(users[0])

// for of(ES6)
for(let user of users){
    console.log(user)
}

