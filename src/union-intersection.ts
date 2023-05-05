type NoobDeveloper = {
    name: string;
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'ali',
    expertise: "React.js",
    experience: 20
}