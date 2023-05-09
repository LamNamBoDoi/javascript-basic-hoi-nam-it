// mở rộng
// lấy li:
//cách 1: var listItemNodes = document.querySelectorAll(".box-1 li");
// cách 2:
var boxNode = document.querySelector(".box-1");

// Công việc 1: sử dụng tới 'boxNode'
console.log(boxNode);
// Công việc 2: sử dụng tới các li elements con của .box-1
console.log(boxNode.querySelectorAll("li"));

// Công thức cần nhớ
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

// 1, 4 trả về 1 element
// 2, 3 trả về HTMLCollection
// 5 trả về nodelist

// 6. HTML collection: img, form, a,...

// 7. document.write
