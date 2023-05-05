function add(x: number, y: number): number {
    return x + y;
}


console.log(add(5, 1));
const mul = (x: number, y: number): number => {
    return x + y;
}


const arr = [1, 2, 4, 7];

const newArr = arr.map((n: number) => n + n);


const person: {
    name: string,
    balance: number,
    addBalance(money: number): string
} = {
    name: 'ali',
    balance: 10,
    addBalance(money: number) {
        return `My ballace is ${this.balance + money}`;
    },
}