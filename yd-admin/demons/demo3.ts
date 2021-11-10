// 类型的断言
function getLength(str:string | number):number {
    if((<string>str).length) {
        return (<string>str).length
    } else {
       return str.toString().length
    }
}

// function getLength(str:string | number):number {
//     if((str as string).length) {
//         return (str as string).length
//     } else {
//        return str.toString().length
//     }
// }
type Name = string
type Numb = number
type mix = Name | Numb
function getNameLength( str:mix ):Name {
    if(typeof str === "string") {
        return str
    } else {
        return 'no'
    }
}

// 泛型 不知道类型是什么的情况下使用
interface LengthWise {
    length: number
}

function identity<T extends LengthWise>(args:T):T {
    console.log(args.length)
    return args
}
0
const niu = identity<string>('jjjjj')

class Gener<T> {
    name:T | undefined
    add: ((x:T,y:T) => T) | undefined
}
const myGener = new Gener<number>()
myGener.name = 30
myGener.add = (x,y)=>{
    return x+y
}

// 重载
function getDate<T>(value:T):T {
    return value
}

const rr = this.getDate<number>(2)
const rr3 = this.getDate<string>('sss')


// 接口
interface clockCs {
    new (hour:number,day:number):clockInterface
}
interface clockInterface {
    tick():void;
}

class digtialClock implements clockInterface {
    public tick(): void {
        console.log('ddddd');      
    }    
}

class amiClock implements clockInterface {
    public tick(): void {
        console.log('ssssss');
    }
    
}

function createClock(ctor: clockCs,hours:number,minute:number): clockInterface {
    return new ctor(hours,minute)
}

const dig1 = createClock(digtialClock,12,30)
const dig2 = createClock(amiClock,14,50)
dig1.tick()
dig2.tick()