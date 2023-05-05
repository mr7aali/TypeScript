//Arrow function

const createArray = (param: string): string[] => {
    return [param]
}
const createArray1 = <T>(param: T): T[] => {
    return [param];
}
const createArrayTuple = <x, y>(param1: x, param2: y): [x, y] => {
    return [param1, param2];
}

const result1 = createArray1<string>("This is String");
const result2 = createArray1<boolean>(false);
const result3 = createArray1<{ name: string }>({ name: 'Bangladesh' });
const relult4 = createArrayTuple<string, number>("Sabrina", .6);



// const myInfo = {
//     name: "Ali",
//     age: 21,
//     salary: 1000
// };

// const addInMyGfMind = <t>(myInfo: t) => {
//     const girlFriend = "Sabrina Nipa";

//     const newData = { ...myInfo, girlFriend };
//     return newData;
// }

// const result5 = addInMyGfMind(myInfo);

