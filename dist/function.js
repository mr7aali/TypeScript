"use strict";
function add(x, y) {
    return x + y;
}
console.log(add(5, 1));
const mul = (x, y) => {
    return x + y;
};
const arr = [1, 2, 4, 7];
const newArr = arr.map((n) => n + n);
const person = {
    name: 'ali',
    balance: 10,
    addBalance(money) {
        return `My ballace is ${this.balance + money}`;
    },
};
