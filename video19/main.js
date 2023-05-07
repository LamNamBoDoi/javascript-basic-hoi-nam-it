let sum = (a, b) => {
  return a + b;
};

console.log("check sum: 9 + 6 = ", sum(9, 6));

let obj = {
  name: "Nam",
  address: "Ha Noi",
  getName: function () {
    return this.name;
  },
};

console.log(">>> get Name obj", obj.getName());
