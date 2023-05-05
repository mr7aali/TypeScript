type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    Other: boolean
}
type MendatoryType={
    name:string,
    age:number,
    salary:number
}

const addInMyGfMind = <t extends MendatoryType>(myInfo: t) => {
    const girlFriend = "Sabrina Nipa";

    const newData = { ...myInfo, girlFriend };
    return newData;
}


const myInfo: MyInfoType = {
    name: "Ali",
    age: 21,
    salary: 1000,
    Other: false
};

const result5 = addInMyGfMind(myInfo);
