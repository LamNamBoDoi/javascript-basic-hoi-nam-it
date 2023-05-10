var headingElement = document.querySelector("h1");

//headingElement.id = "Heading";// setter

// gán att ngẫu nhiên không cần hợp lệ
headingElement.setAttribute("style", "color: red");

// lấp att: getAttribute
console.log(headingElement.getAttribute("style"));

// thêm class với cú pháp .classname
// không .class do trùng với tứ khóa
// element hợp lệ có thể dùng . attribute hoặc get và set
// không hợp lệ dùng get và set
