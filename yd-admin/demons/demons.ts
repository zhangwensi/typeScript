let isDown: boolean = false;

enum Day {
    first = 'ddddd',
    second = 7
}

console.log(Day["first"])


interface Person {
    age: number,
    uname: string,
    [proSex: string]: any
}

let Wang:Person = {
    age: 30,
    uname: 'sss'
}

Wang['sex'] = '男'

console.log(Wang)

function Pe(something: number | string): any {
    return something.toString()
}

let arr = new Array<number>(4)

function sun() {
    let args: IArguments = arguments
}


function useUple() {
    const resp:string = 'ssss'
    const age:number = 30
    return jiexi(resp,age)
}

function jiexi<T extends unknown[]>(...elemets:T):T {
    return elemets
}
 
const [resp] = useUple()

let myNum:(x:number,y:number) => number = function(x:number,y:number):number {
    return x+y
}