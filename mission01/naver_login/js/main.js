
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/



/* ------------------------------- email 정규표현식 ------------------------------ */

function emailReg(text){

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());

}


/* -------------------------------- pw 정규표현식 -------------------------------- */

function pwReg(text){

  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;

  return re.test(String(text).toLowerCase());

}


/* ---------------------------------- 요소 선택 --------------------------------- */

const emailInput = document.querySelector('.user-email-input'); // 이메일 주소 입력창
const pwInput = document.querySelector('.user-password-input'); // 비밀번호 입력창

const loginButton = document.querySelector('.btn-login'); // 로그인 버튼


/* -------------------------------- 상태 변수 선언 -------------------------------- */

let emailIsValid = false;
let pwIsValid = false;





/* -------------------------------------------------------------------------- */
/*                  1. email 정규표현식을 사용한 validation                      */
/* -------------------------------------------------------------------------- */

// validation 함수 생성
function emailValidation() {

  if (!emailReg(emailInput.value)) emailInput.classList.add('is--invalid');
  else {
    emailIsValid = true;
    emailInput.classList.remove('is--invalid');
  }

}

// 이메일 입력창에 validation 이벤트 바인딩
emailInput.addEventListener('input', emailValidation);





/* -------------------------------------------------------------------------- */
/*                    2. pw 정규표현식을 사용한 validation                       */
/* -------------------------------------------------------------------------- */

// validation 함수 생성
function pwValidation() {

  if (!pwReg(pwInput.value)) pwInput.classList.add('is--invalid');
  else {
    pwIsValid = true;
    pwInput.classList.remove('is--invalid');
  }

}

// 비밀번호 입력창에 validation 이벤트 바인딩
pwInput.addEventListener('input', pwValidation);





/* -------------------------------------------------------------------------- */
/*                              3. 상태 변수 관리                               */
/* -------------------------------------------------------------------------- */












/* -------------------------------------------------------------------------- */
/*                       4. 로그인 버튼을 클릭시 조건처리                         */
/* -------------------------------------------------------------------------- */

// 로그인 버튼 클릭 이벤트 함수 생성
function loginHandler(e) {

  e.preventDefault(); // 불필요한 새로고침 방지

  if (emailInput.value === user.id && pwInput.value === user.pw) window.location.href = 'welcome.html';
  else alert('아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.');

}

// 로그인 버튼에 클릭 이벤트 바인딩
loginButton.addEventListener('click', loginHandler);