// mở rộng
// lấy li:
//cách 1: var listItemNodes = document.querySelectorAll(".box-1 li");
// cách 2:
var boxNode = document.querySelector(".box-1");

// Công việc 1: sử dụng tới 'boxNode'
console.log(boxNode);
// Công việc 2: sử dụng tới các li elements con của .box-1
console.log(boxNode.querySelectorAll("li"));
