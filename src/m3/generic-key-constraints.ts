type PersonType = {
    name: string,
    age: number,
    address: string
}

type newType = "name" | "age" | "address"; //manully 
type newTypeUsingKeyOf = keyof PersonType;

const a: newType = 'name';
const b: newTypeUsingKeyOf = 'address';

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
}

const property = getProperty({ name: "Sabrina", age: 17 }, "name")