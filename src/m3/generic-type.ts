type GenericArray = Array<number>
type GenericTuple<x, y> = [x, y]
interface RelationWithSalaryInterface {
    name: string,
    salary: 200
}
interface CrushInterface<T> {
    name: string,
    husband: T
}
interface HusbandInterface{
    name:string,
    salary?:number
}


const relation: GenericTuple<string, string> = ['ali', 'nipa'];
const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [{ name: "Ali", salary: 200 }, "My name is string"]
const rollNumbers: GenericArray = [44, 12, 4];
const rollNumbers2: Array<string> = ["44", "12", "4"];
const rollNumbers3: Array<boolean> = [true, false];


const Cursh:CrushInterface<boolean> ={
    name:"Sabrina Nipa",
    husband: false
}
const Cursh2:CrushInterface<string> ={
    name:"Bristy Islam",
    husband: "MC"
}
const Cursh3:CrushInterface<HusbandInterface> ={
    name:"Mitaly",
    husband: {
        name:"I dont know",
        // salary:0.1
    }
}

const userNameAndRollNumber: Array<{ name: string, roll: number }> = [{
    name: 'Mr X',
    roll: 5
}]