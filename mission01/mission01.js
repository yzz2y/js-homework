// 1. 문제 설명



// 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.


// 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.


// 예시 코드

// const person = {
//   name: 'Alice',
//   age: 25,
//   city: 'Wonderland'
// };

// console.log(getValueAtObject(person, 'name')); // 'Alice'
// console.log(getValueAtObject(person, 'age'));  // 25
// console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !


// 함수:
function getValueAtObject(obj, key) {

  if (key in obj) {

    return obj[key];

  } else {

    console.error(`입력하신 키(${key})를 찾을 수 없습니다!`);
    return;

  }
  
}





// 2. 문제 설명



// 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.


// 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.


// 예시 코드:

// const numbers = [10, 20, 30, 40, 50];

// console.log(getNumberAtArray(numbers, 2)); // 30
// console.log(getNumberAtArray(numbers, 4)); // 50
// console.log(getNumberAtArray(numbers, 5)); // Error!
// console.log(getNumberAtArray(numbers, -1)); // Error!


// 함수:
function getNumberAtArray(arr, index) {

  const arrayLength = arr.length;

  if (0 <= index && index <= arrayLength - 1) {

    return arr[index];

  } else {

    console.error("유효한 인덱스 값을 입력하세요!");
    return;

  }

}
