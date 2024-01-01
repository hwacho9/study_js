let number = 1

let result = 1;
console.log(result);

result = number ++ ; // result에 number를 넣고 ++ 연산을 한다
console.log(result,number);

result = ++ number; // ++연산을 먼저하고 number을 result에 넣는다 
// 이거 잘 안씀 ( 쓰면 안 좋음 )
console.log(result,number);

console.log('-------');

let sample = '99';

console.log(+sample);
console.log(typeof sample)
console.log(typeof +sample)

sample = true;
console.log(typeof +sample);

sample = false;
console.log(typeof +sample);

/**
 * 할당 연산자 ( assignment operator )
 */

console.log('---------');
number = 100;
console.log(number);

number += 10;
console.log(number)

/**
 * ==, != 는 값만 비교
 * ===, !== 는 타입까지 비교
 */

/**
 * 삼함 조건 연산자 ( ternary operator )
 */

console.log(10 > 0 ? "true" : "false")

/**
 * && (and)
 * || (or)
 */

/**
 * 단축평가 ( short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true 몇 우측 값 변환
 * false면 좌측 값 변환
 * 
 * || 좌측이 true면 좌측 값 반환
 * false면 우측 값 변환
 */

console.log('---------');

console.log(true||'||');
console.log(false||'||');

console.log(true&&'&&');
console.log(false&&'&&');

console.log(true && true && 'hi');

/**
 * null 연산자
 */

let name;
console.log(name);
``
name = name ?? 'code ';
console.log(name);