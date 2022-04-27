const arr1 = new Array(5);
const arr2 = new Array(5).fill(8);
console.log(arr2);

const arr3 = Array.from(Array(5), (value, index) => {
  return index + 1;
});
console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.join());
console.log(arr4.reverse());

const arr5 = [1, 2, 3, 4, 5];
const arr6 = [6, 7, 8, 9, 10];

console.log(arr5.concat(arr6)); //배열 합치기

const arr7 = [...arr5, ...arr6]; //배열 함치기2
console.log(arr7);
arr7.push(1, 1, 2, 3); // 추가
console.log(arr7);

arr7.pop(); // 끝 배열 요소 삭제
console.log(arr7);

arr7.shift(); //첫번째 요소 삭제

console.log(arr7);

arr7.unshift(8); //첫번째 요소 추가
console.log(arr7);

console.log(arr7.slice(2, 4));

arr7.splice(2, 2);
console.log(arr7);

for (let item of arr7) {
  console.log(item);
}

console.log(typeof arr7);
