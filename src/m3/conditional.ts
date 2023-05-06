// a type is dependent on another type


type a1 = string;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;


//nested conditonal type 
type d = a1 extends null
    ? null
    : a3 extends number
    ? number
    : a4 extends null
    ? null
    : never;



type Sheikh = {
    wife1: string;
    wife2: string;
}

type CheckProperty<t, k> = k extends keyof Sheikh ? true : false;

type Ckeck = CheckProperty<Sheikh, "wife1">;

type Bandopi = "X" | "Y" | "Z";

type RemoveBandopi<T,K>= T extends K ? never : T;

type CurrentBandopi = RemoveBandopi<Bandopi,"Z">;
