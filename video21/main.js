//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
  { name: "Nam", age: 20 },
  { name: "A", age: 21 },
  { name: "N", age: 22 },
  { name: "m", age: 23 },
  { name: "a", age: 24 },
];
//filter, find
//mutate: thay đổi dữ liệu có đổi không

let filter = arr.filter((item, index) => {
  console.log(">>> check fileter: item: ", item, "index: ", index);
  return item && item.age === 20;
}); // không return item > 5 vì nó sẽ trả về boolean nên cần thêm item
console.log(filter);
