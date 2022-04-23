/*
* 一 Person是一个构造函数
*   1、我们使用new创建了一个实例对象person
*
* 二、prototype
*   1、每个函数都有一个prototype属性 注意只有函数才有prototype
*
* 三、函数的prototype属性指向哪里？
*   1、函数prototype属性指向了一个对象，这个对象是调用该构造函数而创建的实例的原型，也就是列子person，person1，person2
*
* 四、什么是原型
*   1、你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
*   2、每一个JavaScript对象除了null以外，创建的时候就会关联另外一个对象，这个对象就是原型，每一个对象都会从原型继承属性
*
* 五、constructor
*   1、Person ===  Person.prototype.constructor true  通过constructor属性可以指向构造函数
*   2、当获取person1.constructor时，person1中没有constructor属性，他会从person1的原型中去获取也就是Person.prototype中读取
*     所以person1.constructor === Person.prototype.constructor
 */

function Person() {

}

var person = new Person();
person.name = 'moshen';
console.log(person.name); // moshen
console.log(person)

Person.prototype.name = 'Kevin';
Object.prototype.moshen= '墨深物联网';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);
console.log(person1.__proto__ === Person.prototype )
console.log(Person ===  Person.prototype.constructor )
console.log(person1.__proto__ ===  Person.prototype.constructor.prototype )
console.log(Object.getPrototypeOf(person1)===Person.prototype)
console.log(Person.prototype.__proto__===Object.prototype)
console.log(Object.getPrototypeOf(Person.prototype))
console.log(Person.prototype.__proto__.constructor===person1.__proto__.__proto__.constructor)
console.log(person1.__proto__.__proto__.constructor)
console.log(Person)
console.log(person1.moshen)
console.log('---------------------------------------------------')
console.log(Object.prototype.__proto__===null)
console.log(person1.constructor===Person)
