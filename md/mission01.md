# Mission01

[**과제 바로가기 링크**](https://yzz2y.github.io/js-homework/mission01/naver_login/index.html)

[**js 링크**](https://github.com/yzz2y/js-homework/blob/main/mission01/naver_login/js/main.js)

<br /><br />

### 회고

> **이메일, 비밀번호 에러 메시지**

`validation` 함수에 정규 표현식 함수의 결과값에 따라 `is--valid` 클래스를 추가하거나 뺀 것 뿐인데 이벤트를 바인딩 하자마자 에러 메시지가 적절히 나타나길래 뭐지? 싶었다.

html과 css를 잘 살펴보니 html에 에러 메시지가 `span`으로 마크업되어 있었고 css에 기본 `display`가 `none`, `is--valid` 클래스가 추가되면 `display`를 `block`으로 바꾸는 코드가 이미 있었다.

그래서 따로 `alert`로 에러 메시지를 띄우지 않고 작성한 `validation` 함수를 사용하여 이벤트만 바인딩했다.

<br />

> **로그인 에러 메시지**

로그인 에러 메시지를 `alert`말고 이메일, 비밀번호 에러 메시지와 유사하게 화면에 렌더링되도록 띄워보고 싶어서 로그인 버튼 바로 위에 `div`를 추가해서 에러 메시지가 공간만 차지하고 안보이다가 로그인 버튼 클릭 시 이메일 혹은 비밀번호가 맞지 않으면 나타나도록 설계했다.

html이나 css를 건드리지 않고 js로만 하기 위해 `insertAdjacentHTML`을 사용해보기로 했다.

테스트용으로 콘솔창에서
```javascript
loginButton.insertAdjacentHTML('beforebegin', '<div class="error-message" id="loginError">에러메세지</div>')
```
를 입력했는데 `div`가 화면에 잘 렌더링되길래 코드에 그대로 넣고 `visibility: hidden`으로 초기 설정한 후,
로그인 버튼 클릭 이벤트 함수(`loginHandler`)의 `else`문에 `visibility: visible`을 작성해보았지만 `div`가 화면에 렌더링되지 않았다.

혹시나해서 `visibility: hidden`도 지우고 그냥 `insertAdjacentHTML`만 넣고 돌려봤는데도 콘솔창과 달리 `div` 자체가 보이지 않았다.
이유를 모르겠어서 그냥 `alert`문으로 띄우도록 변경했다. 😭


<br />

> **상태 변수**

일단 상태 변수가 정확히 어떤 상태를 담아야하는지, 왜 있어야하는지 잘 모르겠다.

그리고 상태 변수를 전역에 선언하면 안될 것 같은데
그럼 함수에 담아서 클로저 형태로 외부에서는 건드리지 못하게 해야하는 건지도 모르겠다.

결론은 잘 모르겠어서 상태 변수 관리는 제대로 수행하지 못했다. 😔