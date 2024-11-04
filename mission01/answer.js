// 객체에 키를 입력했을 때 값이 나오길 기대
// 함수는 매개변수를 유연하게 받을수록 재사용성이 증가

// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 함수의 로직
// 4. validation



// 1번

// 풀이:
function getValueAtObject(object, key) {

  // validation (object)
  if(!(Object.prototype.toString.call(object).slice(8, -1).toLowerCase() === 'object')) {
    
    throw new TypeError('getValueAtobject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.');

  }
  // typeof object === 'object'와 같음
  
  // validation (key)
  if (!(typeof key === 'string')) {

    throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.');

  }


  if (!(key in object)) {

    throw new SyntaxError('해당 객체에는 key값이 존재하지 않습니다.');
    return;

  }

  return object[key];

}

// console.log(getValueAtObject(obj, 'name'));


// 다른 풀이
function _getValueAtObject(object, key) {

  const entries = Object.entries(object);

  for (let [k, v] of entries) {
    
    // for (let [k, v] of entries) if (k === key) return v;

    entries.forEach(([k, v]) => k === key ? value = v : '')

    return value;

  }

}

// console.log(_getValueAtObject(obj, 'name'));



// 2번

// 풀이:

function getNumberAtArray(array, indexumber) {

  if (Array.isArray(array)) {

    throw new Error(`전달된 첫 번째 인수의 데이터 타입은 ${typeof array}타입 입니다. 해당 함수의 첫 번째 인수는 배열 타입 이어야 합니다.`);

  }

  if (index >= 0 && index < array.length) {

    return array[index];

  } else {

    throw new Error('...');

  }

}

// console.log(getNumberAtArray(arr, -1));