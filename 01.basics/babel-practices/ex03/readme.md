Babel Plugin 사용하기

라이브러리 설치
@babel/core @babel/cli

변환하기
1. 블록 스코프 변수 플러그인
    - @babel/plugin-transform-block-scoping
    - $ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping

2. 객체분해-파라미터 플러그인
   - @babel/plugin-transform-parameters

3. 템플릿 문자열 변환 플로그인(@babel/plugin-transform-template-literals)
4. for of 변환 플러그인(@babel/plugin-transform-for-of)