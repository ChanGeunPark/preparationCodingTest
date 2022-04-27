const obj = { name: "박찬근", age: 26 };

obj["company"] = "dodory";
obj.barthday = "1.1";
console.log(obj);

delete obj.barthday;
console.log(obj);

console.log("name" in obj);
console.log("email" in obj);

console.log(Object.keys(obj)); //오브젝트 안의 key로 배열을 만들어준다.
console.log(Object.values(obj)); //오브젝트 안의 value로 배열을 만들어준다.
