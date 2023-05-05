type User={
    name: string,
    age:number
};
type ExtendedUser= User &{
    role:string
}
interface IUser{
    name:string,
    age:number
}
interface IExtendedUser extends IUser{
    role:string
}

const User:IExtendedUser={
    name:'Extend',
    age:20,
    role:'admin'

}

// const userWithTypeAlias: User={
//     name:'Type Alias',
//     age:1
// }

// const userWithInterface:IUser={
//     name:'Interface',
//     age:2
// }
