/**
 * 装饰器   js元编程
 */
import 'reflect-metadata'

function inject(serviceIg:string) {
    return  function (target: Object,targetKey: string,index: number) {
        Reflect.defineMetadata(serviceIg,'ssss', target)
    }
}

class IndexController {
    public Indexserver: string
    constructor(@inject('xxxx') indexServe:string) {
        this.Indexserver = indexServe
    }
}

const indexController = new IndexController('nmsl')
console.log(indexController.Indexserver);  //-->'nmsl'
console.log(Reflect.getMetadata('xxxx',IndexController)) //-->'ssss'