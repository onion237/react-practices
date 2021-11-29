"use strict";

// 블록 스코프 변수(ES6)
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@mail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@mail.com'
}]; // 객체 분해(ES6)

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  // 템플릿 문자열(ES6)
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
}

print(users[0]);
var user = 'var user'; // for of(ES6)

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var _user = _users[_i];
  console.log(_user);
}
