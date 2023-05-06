const arrayOfNum = [1, 5, 6];
const arrayOfStr = arrayOfNum.map(m => m.toString());

type Volume = {
    height: number;
    width: number,
    depth: number
};
type Area<T>= {
    // [key in keyof Volume]: string
    // [key in keyof Volume]: Volume[key]
    [key in keyof T] : T[key]
}
const area1:Area<{height:string,width:string}> ={
    height:"10",
   width:'10'
}
type AreaString = {
    height: string
    width: string
}
type AreaReadOnly = {
    readonly height: number;
    readonly width: number
}
const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 20
}



// type A = AreaNumber['height'];
// type B = keyof AreaNumber;

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
  console.log(getArrayItem(users, 0, 'name'))
