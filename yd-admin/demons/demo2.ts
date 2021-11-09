/**
 * 类的修饰符
 * public 共有的  都可以访问
 * private 私有的  只能在类内部进行使用
 * protected 受保护的 与私有类似 区别是在子类中可以进行使用
 */ 
// 抽象类
abstract class Animal {
    abstract MakeNoise(): void
    move(): void {
        console.log('动物移动');
    }
}

// 一般类  既可以是实体的类 也可以是一个类型
class Dog extends Animal {
    #region:string
    constructor() {
        super()
        this.#region = '测试'
    }
    private uname:string = '私有属性'
    MakeNoise(): void {
        console.log('叫了');
    }
}

const dog = new Dog()

console.log((dog as any).uname)
console.log((dog as any).region);


dog.move();
dog.MakeNoise();

// Animal的数组
const  xiao:Animal[] = [dog]