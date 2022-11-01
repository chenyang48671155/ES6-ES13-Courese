[toc]

​     

### ES6-ES13

​			作者：kerwin

​			版本：QF1.0

​			版权：千锋HTML5大前端教研院

​			公众号: 大前端私房菜

  

#### 一. 走入ES6

##### 1.初识ES6

> ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。



-  1997年：ECMAScript 1.0

-  1998年：ECMAScript 2.0

-  1999年：ECMAScript 3.0

-  2006年：ECMAScript 4.0 未通过

-  2009年：ECMAScript 5.0

-  2015年：ECMAScript 6.0

-  至今，版本号改用年号的形式。

  

##### 2.let声明变量与const声明常量

1. `let` 不允许重复声明变量

   ```javascript
   // 使用 var 的时候重复声明变量是没问题的，只不过就是后面会把前面覆盖掉
   var num = 100
   var num = 200
   ```

   ```javascript
   // 使用 let 重复声明变量的时候就会报错了
   let num = 100
   let num = 200 // 这里就会报错了
   ```

   ```javascript
   // 使用 const 重复声明变量的时候就会报错
   const num = 100
   const num = 200 // 这里就会报错了
   ```

2. `let` 和 `const` 声明的变量不会在预解析的时候解析（也就是没有变量提升）

   ```javascript
   // 因为预解析（变量提升）的原因，在前面是有这个变量的，只不过没有赋值
   console.log(num) // undefined
   var num = 100
   ```

   ```javascript
   // 因为 let 不会进行预解析（变量提升），所以直接报错了
   console.log(num) 
   let num = 100
   ```

   ```javascript
   // 因为 const 不会进行预解析（变量提升），所以直接报错了
   console.log(num) 
   const num = 100
   ```

3. `let` 和 `const` 声明的变量会被所有代码块限制作用范围

   ```javascript
   // var 声明的变量只有函数能限制其作用域，其他的不能限制
   if (true) {
     var num = 100
   }
   console.log(num) // 100
   ```

   ```javascript
   // let 声明的变量，除了函数可以限制，所有的代码块都可以限制其作用域（if/while/for/...）
   if (true) {
     let num = 100
     console.log(num) // 100
   }
   console.log(num) // 报错
   ```

   ```javascript
   // const 声明的变量，除了函数可以限制，所有的代码块都可以限制其作用域（if/while/for/...）
   if (true) {
     const num = 100
     console.log(num) // 100
   }
   console.log(num) // 报错
   ```

- `let` 和 `const` 的区别

  1. `let` 声明的变量的值可以改变，`const` 声明的变量的值不可以改变

     ```javascript
     let num = 100
     num = 200
     console.log(num) // 200
     ```

     ```javascript
     const num = 100
     num = 200 // 这里就会报错了，因为 const 声明的变量值不可以改变（我们也叫做常量）
     ```

  2. `let` 声明的时候可以不赋值，`const` 声明的时候必须赋值

     ```javascript
     let num
     num = 100
     console.log(num) // 100
     ```

     ```javascript
     const num // 这里就会报错了，因为 const 声明的时候必须赋值
     ```





##### 3.解构赋值

- 解构赋值，就是快速的从对象或者数组中取出成员的一个语法方式



###### 3-1 解构对象

- 快速的从对象中获取成员

  ```javascript
  // ES5 的方法向得到对象中的成员
  const obj = {
    name: 'kerwin',
    age: 100,
    gender: '男'
  }
  
  let name = obj.name
  let age = obj.age
  let gender = obj.gender
  ```

  ```javascript
  // 解构赋值的方式从对象中获取成员
  const obj = {
    name: 'kerwin',
    age: 100,
    gender: '男'
  }
  
  // 前面的 {} 表示我要从 obj 这个对象中获取成员了
  // name age gender 都得是 obj 中有的成员
  // obj 必须是一个对象
  let { name, age, gender } = obj
  ```



###### 3-2 解构数组

- 快速的从数组中获取成员

  ```javascript
  // ES5 的方式从数组中获取成员
  const arr = ['kerwin', 'tiechui', 'gangdan']
  let a = arr[0]
  let b = arr[1]
  let c = arr[2]
  ```

  ```javascript
  // 使用解构赋值的方式从数组中获取成员
  const arr = ['kerwin', 'tiechui', 'gangdan']
  
  // 前面的 [] 表示要从 arr 这个数组中获取成员了
  // a b c 分别对应这数组中的索引 0 1 2
  // arr 必须是一个数组
  let [a, b, c] = arr
  ```



##### 4. 模版字符串

- ES5 中我们表示字符串的时候使用 `''` 或者 `""`

- 在 ES6 中，我们还有一个东西可以表示字符串，就是 **``**（反引号）

  ```javascript
  let str = `hello world`
  console.log(typeof str) // string
  ```

- 和单引号好友双引号的区别

  1. 反引号可以换行书写

     ```javascript
     // 这个单引号或者双引号不能换行，换行就会报错了
     let str = 'hello world' 
     
     // 下面这个就报错了
     let str2 = 'hello 
     world'
     ```

     ```javascript
     let str = `
     	hello
     	world
     `
     
     console.log(str) // 是可以使用的
     ```

  2. 反引号可以直接在字符串里面拼接变量

     ```javascript
     // ES5 需要字符串拼接变量的时候
     let num = 100
     let str = 'hello' + num + 'world' + num
     console.log(str) // hello100world100
     
     // 直接写在字符串里面不好使
     let str2 = 'hellonumworldnum'
     console.log(str2) // hellonumworldnum
     ```

     ```javascript
     // 模版字符串拼接变量
     let num = 100
     let str = `hello${num}world${num}`
     console.log(str) // hello100world100
     ```

     - 在 **``** 里面的 `${}` 就是用来书写变量的位置

##### 5.字符串扩展

###### 5-1 includes函数

判断字符串中是否存在指定字符

```js
let myname = "kerwin"

console.log(myname.includes("e")) //true
console.log(myname.startsWith("k")) //true
console.log(myname.endsWith("n")) //true
```

###### 5-2 repeat函数

repeat()方法返回一个新字符串,表示将原字符串重复n次。

````js
let myname = "kerwin"

console.log(myname.repeat(3)) //kerwinkerwinkerwin

console.log(myname.repeat(0)) //"" 
console.log(myname.repeat(3.5)) //kerwinkerwinkerwin

console.log(myname.repeat("3"))//kerwinkerwinkerwin
````

##### 6.数值扩展

###### 6-1 二进制和八进制表示法 

```js
let count1 = 100
let count2 = 0x100
let count3 = 0o100
let count4 = 0b100
```

###### 6-2 isFinite与isNaN方法

减少全局性方法，使得语言逐步模块化

```js
let num1 = Number.isFinite(100) //true
let num2 = Number.isFinite(100/0) //false
let num3 = Number.isFinite(Infinity) // false
let num4 = Number.isFinite("100") //false
```

```js
let num1 = Number.isNaN(100) // false
let num2 = Number.isNaN(NaN) //true
let num3 = Number.isNaN("kerwin") //false
let num4 = Number.isNaN("100") // false
```



它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

###### 6-3 isInteger方法

用来判断一个数值是否为整数。

```js
let num1 = Number.isInteger(100) // true
let num2 = Number.isInteger(100.0) //true
let num3 = Number.isInteger("kerwin") //false
let num4 = Number.isInteger("100") // false
```

###### 6-4 极小常量Number.EPSILON

它表示 1 与大于 1 的最小浮点数之间的差。2.220446049250313e-16

```js
function isEqual(a,b){
        return Math.abs(a-b)<Number.EPSILON
}

console.log(isEqual(0.1+0.2,0.3)) //true
console.log(0.1+0.2===0.3) //false
```

###### 6-5 Math.trunc

将小数部分抹掉,返回一个整数。

```js
console.log(Math.trunc(1.2)) //1
console.log(Math.trunc(1.8))// 1
console.log(Math.trunc(-1.8)) //-1
console.log(Math.trunc(-1.2))//-1
```

###### 6-6 Math.sign

`Math.sign`方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。



```javascript
Math.sign(-100) // -1
Math.sign(100) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign("kerwin") // NaN
```

##### 7.数组扩展

###### 7-1 扩展运算符

```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]

console.log([...arr1,...arr2])
```

###### 7-2 Array.from

将类数组对象转换为真正数组

```js
function test(){
        console.log(Array.from(arguments))
}

test(1,2,3)

let oli = document.querySelectorAll("li")
console.log(Array.from(oli))
```

###### 7-3 Array.of

将一组值转化为数组,即新建数组

```js
let arr1 = Array(3)
console.log(arr1)// [,,]

let arr2 = Array.of(3)
console.log(arr2)// [3]
```

###### 7-4. find方法

1)该方法主要应用于查找第一个符合条件的数组元素 

2)它的参数是一个回调函数。在回调函数中可以写你要查找元素的条件,当条件成立为true时,返回该元素。如果没有符合条件的元素,返回值为undefined 

```js
let arr = [11,12,13,14,15]
let res1 = arr.find(function(item){
    return item>13
})
let res2 = arr.findIndex(function(item){
    return item>13
})
console.log(res1) //14
console.log(res2) //3
```



###### 7-5. fill方法

使用自己想要的参数替换原数组内容,但是会改变原来的数组

```js
let arr1 = new Array(3).fill("kerwin")
let arr2 = ['a', 'b', 'c'].fill("kerwin", 1, 2)
console.log(arr1)//['kerwin', 'kerwin', 'kerwin']
console.log(arr2)// ['a', 'kerwin', 'c']
```

###### 7-6 flat与flatMap方法

按照一个可指定的深度递归遍历数组,并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

```js
var obj = [{
                name: "A",
                list: ["鞍山", "安庆", "安阳"]
            },
            {
                name: "B",
                list: ["北京", "保定", "包头"]
            }
]
console.log(obj.flatMap(item => item.list))
```



##### 8.对象扩展

###### 8-1 对象简写

```js
let name ="moduleA"
let obj = {
    name,
    test1(){

    },
    test2(){

    }
}
```

###### 8-2 属性名表达式

```js
let name ="moduleA"
let obj = {
    name,
    [name+"test1"](){

    },
    [name+"test2"](){

    }
}
```

###### 8-3 Object.assign

Object.assign(target, object1，object2)的第一个参数是目标对象，后面可以跟一个或多个源对象作为参数。

target：参数合并后存放的对象

object1：参数1

object2：参数2

```js
const obj1 = {
    name: "kerwin"
};

const obj2 = {
    name:"tiechui"
};
const obj3 = {
    age:100
};

Object.assign(obj1, obj2, obj3);
//obj1 {name: 'tiechui', age: 100}
```
###### 8-4 Object.is

方法判断两个值是否是相同的值

```js
console.log(NaN===NaN) //false
console.log(+0===-0) //true

console.log(Object.is(NaN,NaN)) //true
console.log(Object.is(+0,-0)) //false
```



##### 9.函数扩展

###### 9-1 箭头函数

- 箭头函数是 ES6 里面一个简写函数的语法方式

- 重点： **箭头函数只能简写函数表达式，不能简写声明式函数**

  ```javascript
  function fn() {} // 不能简写
  const fun = function () {} // 可以简写
  const obj = {
    fn: function () {} // 可以简写
  }
  ```

- 语法： `(函数的行参) => { 函数体内要执行的代码 }`

  ```javascript
  const fn = function (a, b) {
    console.log(a)
    console.log(b)
  }
  // 可以使用箭头函数写成
  const fun = (a, b) => {
    console.log(a)
    console.log(b)
  }
  ```

  ```javascript
  const obj = {
    fn: function (a, b) {
      console.log(a)
      console.log(b)
    }
  }
  // 可以使用箭头函数写成
  const obj2 = {
    fn: (a, b) => {
      console.log(a)
      console.log(b)
    }
  }
  ```

  

###### 9-2 箭头函数的特殊性

- 箭头函数内部没有 this，箭头函数的 this 是上下文的 this

  ```javascript
  // 在箭头函数定义的位置往上数，这一行是可以打印出 this 的
  // 因为这里的 this 是 window
  // 所以箭头函数内部的 this 就是 window
  const obj = {
    fn: function () {
      console.log(this)
    },
    // 这个位置是箭头函数的上一行，但是不能打印出 this
    fun: () => {
      // 箭头函数内部的 this 是书写箭头函数的上一行一个可以打印出 this 的位置
      console.log(this)
    }
  }
  
  obj.fn()
  obj.fun()
  ```

  - 按照我们之前的 this 指向来判断，两个都应该指向 obj
  - 但是 fun 因为是箭头函数，所以 this 不指向 obj，而是指向 fun 的外层，就是 window

- 箭头函数内部没有 `arguments` 这个参数集合

  ```javascript
  const obj = {
    fn: function () {
      console.log(arguments)
    },
    fun: () => {
      console.log(arguments)
    }
  }
  obj.fn(1, 2, 3) // 会打印一个伪数组 [1, 2, 3]
  obj.fun(1, 2, 3) // 会直接报错
  ```

- 函数的行参只有一个的时候可以不写 `()` 其余情况必须写

  ```javascript
  const obj = {
    fn: () => {
      console.log('没有参数，必须写小括号')
    },
    fn2: a => {
      console.log('一个行参，可以不写小括号')
    },
    fn3: (a, b) => {
      console.log('两个或两个以上参数，必须写小括号')
    }
  }
  ```

- 函数体只有一行代码的时候，可以不写 `{}` ，并且会自动 return

  ```javascript
  const obj = {
    fn: a => {
      return a + 10
    },
    fun: a => a + 10
  }
  
  console.log(fn(10)) // 20
  console.log(fun(10)) // 20
  ```



###### 9-3 函数传递参数的时候的默认值

- 我们在定义函数的时候，有的时候需要一个默认值出现

- 就是当我不传递参数的时候，使用默认值，传递参数了就使用传递的参数

  ```javascript
  function fn(a) {
    a = a || 10
    console.log(a)
  }
  fn()   // 不传递参数的时候，函数内部的 a 就是 10
  fn(20) // 传递了参数 20 的时候，函数内部的 a 就是 20
  ```

  - 在 ES6 中我们可以直接把默认值写在函数的行参位置

  ```javascript
  function fn(a = 10) {
    console.log(a)
  }
  fn()   // 不传递参数的时候，函数内部的 a 就是 10
  fn(20) // 传递了参数 20 的时候，函数内部的 a 就是 20
  ```

  - 这个默认值的方式箭头函数也可以使用

  ```javascript
  const fn = (a = 10) => {
    console.log(a)
  }
  fn()   // 不传递参数的时候，函数内部的 a 就是 10
  fn(20) // 传递了参数 20 的时候，函数内部的 a 就是 20
  ```

  - 注意： **箭头函数如果你需要使用默认值的话，那么一个参数的时候也需要写 （）**



##### 10.Symbol

> ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一，其他数据类型是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

1. 使用Symbol作为对象属性名

```js
let name = Symbol()
let age = Symbol()
var obj  ={
    [name]:"kerwin",
    [age]:100
}
```

2. Symbol()函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。这主要是为了在控制台显示，比较容易区分。

```js
let name = Symbol("name")
let age = Symbol("age")
var obj  ={
    [name]:"kerwin",
    [age]:100
}
console.log(obj)
```

3. 遍历问题

```js
let keys = {
    name:Symbol("name"),
    age:Symbol("age")
}
var obj  ={
    [keys.name]:"kerwin",
    [keys.age]:100,
    a:1,
    b:2,
    c:3
}

Reflect.ownKeys(obj).forEach(item=>{
    console.log(item,obj[item])
})
```



4. Symbol.for()可以重新使用同一个 Symbol 值

```js
var obj  ={
    [Symbol.for("name")]:"kerwin",
    [Symbol.for("age")]:100
}

console.log(obj[Symbol.for("name")])
```

##### 11.Iterator迭代器

> Iterator 的作用有三个：
>
> 一是为各种数据结构，提供一个统一的、简便的访问接口；
>
> 二是使得数据结构的成员能够按某种次序排列；
>
> 三是 ES6 创造了一种新的遍历命令**for...of**循环，Iterator 接口主要供**for...of**循环

```js
let arr = ["kerwin", "tiechui", "gangdaner"]

for(let i of arr){
    console.log(i)
}
```

```js
Iterator 的遍历过程是这样的。

（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

let i = arr[Symbol.iterator]()
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
```

> ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。



原生默认具备 Iterator 接口的数据结构如下。

- Array
- Set
- Map
- String
- arguments 对象
- NodeList 对象



**如何对于对象进行for fo遍历？**

```js
let obj = {
    0: "kerwin",
    1: "tiechui",
    2: "gangdaner",
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (let i of obj) {
    console.log(i)
}


let obj2 = {
    data: ['kerwin', 'tiechui', "gangdaner"],
    [Symbol.iterator]() {
        // let _this = this
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {

                    return {
                        value: this.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
};

for (let i of obj2) {
    console.log(i)
}
```

##### 12.Set结构

> 它类似于数组，但成员的值都是唯一的，没有重复的值。

###### 12-1 初识Set

```js
let s1 = new Set([1, 2, 3, 2, 3])
console.log(s1)

let s2 = new Set()
s2.add(1)
s2.add(2)
s2.add(3)
console.log(s2)
```



###### 12-2 实例的属性和方法

- size：返回Set实例的成员总数。

- `Set.prototype.add(value)`：添加某个value。
- `Set.prototype.delete(value)`：删除某个value，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

###### 12-3 遍历

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：遍历每个成员

###### 12-4 复杂数据结构去重

```js
function uni(arr) {
    let res = new Set()
    return arr.filter(item => {
        let id = JSON.stringify(item)
        if (res.has(id)) {
            return false
        } else {
            res.add(id)
            return true
        }
    })
}

var arr = [1, 2, 3, "data", {
    name: "kerwin"
}, {
    name: "kerwin"
},
           [1, 2],
           [3, 4],
           [3, 4]
          ]
console.log(uni(arr))
```

##### 13.Map结构

> 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

###### 13-1 初识Map

```js
let m1 = new Map()
m1.set("name","kerwin")
m1.set({a:1},"大连")

console.log(m1)

let m2= new Map([
    ["name","kerwin"],
    [{a:1},"大连"]
])
console.log(m2)
```

###### 13-2 实例的属性和方法

- size：返回 Map 结构的成员总数。

- `Map.prototype.set(key,value)`：添加key对应得value，返回 Map 结构本身。
- `Map.prototype.get(key)`：获取key对应的value
- `Map.prototype.delete(key)`：删除某个键（键名+键值）
- `Map.prototype.has(key)`：某个键是否在当前 Map 对象之中。
- `Map.prototype.clear()`：清除所有成员，没有返回值。

###### 13-3 遍历

- Map.prototype.keys()：返回键名的遍历器。
- Map.prototype.values()：返回键值的遍历器。
- Map.prototype.entries()：返回所有成员的遍历器。
- Map.prototype.forEach()：遍历 Map 的所有成员。

##### 14.Proxy代理

> Proxy如其名， 它的作用是在对象和和对象的属性值之间设置一个代理，获取该对象的值或者设置该对象的值， 以及实例化等等多种操作， 都会被拦截住， 经过这一层我们可以统一处理，我们可以认为它就是“代理器”

###### 14-1.get方法

```js
let target = {}
let proxy = new Proxy(target,{
    get(target,prop){
        return target[prop]
    }
})
```



###### 14-2.set方法

```js
let target = {}
let proxy = new Proxy(target,{
    get(target,prop){
        return target[prop]
    },
    set(target,prop,value){
        if(prop==="data"){
            box.innerHTML = value
        }
        target[prop] = value;
    }
})
```

###### 14-3.has方法

```js
let target = {
    _prop: "内部数据"
}
let proxy = new Proxy(target, {
    get(target, prop) {
        return target[prop]
    },
    set(target, prop, value) {
        if (prop === "data") {
            box.innerHTML = value
        }
        target[prop] = value;
    },
    has(target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
})
```



###### 14-4.this问题

```js
let target = new Set()
const proxy = new Proxy(target, {
    get(target, key) {
        const value =  target[key]
        // 遇到 Function 都手动绑定一下 this
        if (value instanceof Function) {
            console.log(`访问${value}方法了`)
            return value.bind(target)
            //不能 是 call apply 
        }
        return value
    }
})
proxy.add(1)
```



> Proxy本质上属于元编程非破坏性数据劫持，在原对象的基础上进行了功能的衍生而又不影响原对象，符合松耦合高内聚的设计理念。

##### 15.Reflect对象

> Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的。

###### 15-1 代替Object的某些方法

```js
const obj = {
};
Reflect.defineProperty(obj, 'name', {
    value: 'kerwin',
    writable: false,
    configurable:false
});


```

###### 15-2 修改某些Object方法返回结果

```js
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // fail
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // fail
}

```

###### 15-3 命令式变为函数行为

```js
const obj = {
    name:"kerwin"
};
//老写法
console.log("name" in obj) //true
//新写法
console.log(Reflect.has(obj, 'name')) //true

//老写法
delete obj.name
//新写法
Reflect.deleteProperty(obj, "name")
```

###### 15-4 配合Proxy

```js
let target = new Set()
const proxy = new Proxy(target, {
    get(target, key) {
        const value = Reflect.get(target,key)
        // 遇到 Function 都手动绑定一下 this
        if (value instanceof Function) {
            console.log(`访问${value}方法了`)
            return value.bind(target)
            //不能 是 call apply 
        }
        return value
    },
    set() {
        return Reflect.set(...arguments)
    }
})
proxy.add(1)
```

```js
let arr = [1, 2, 3]
let proxy = new Proxy(arr, {
    get(target, key) {
        console.log('get', key)
        return Reflect.get(...arguments)
    },
    set(target, key, value) {
        console.log('set', key, value)
        return Reflect.set(...arguments)
    }
})
proxy.push(4)
// 能够打印出很多内容
// get push     (寻找 proxy.push 方法)
// get length   (获取当前的 length)
// set 3 4      (设置 proxy[3] = 4)
// set length 4 (设置 proxy.length = 4)
```

##### 16.Promise

> Promise 是异步编程的一种解决方案，比传统的解决方案回调函数,  更合理和更强大。ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象 。

- 指定回调函数方式更灵活易懂。

- 解决异步 **回调地狱** 的问题。



###### 16-1 回调地狱

- 当一个回调函数嵌套一个回调函数的时候

- 就会出现一个嵌套结构

- 当嵌套的多了就会出现回调地狱的情况

- 比如我们发送三个 ajax 请求

  - 第一个正常发送
  - 第二个请求需要第一个请求的结果中的某一个值作为参数
  - 第三个请求需要第二个请求的结果中的某一个值作为参数

  ```javascript
  ajax({
    url: '我是第一个请求',
    success (res) {
      // 现在发送第二个请求
      ajax({
        url: '我是第二个请求'，
        data: { a: res.a, b: res.b },
        success (res2) {
          // 进行第三个请求
          ajax({
            url: '我是第三个请求',
            data: { a: res2.a, b: res2.b },
    				success (res3) { 
              console.log(res3) 
            }
          })
        }
      })
    }
  })
  ```

- **回调地狱，其实就是回调函数嵌套过多导致的**

![](%E7%AC%94%E8%AE%B0.assets/%E5%9B%9E%E8%B0%83%E5%9C%B0%E7%8B%B1.jpeg)

- 当代码成为这个结构以后，已经没有维护的可能了

  

###### 16-2 Promise使用

- 语法：

  ```javascript
  new Promise(function (resolve, reject) {
    // resolve 表示成功的回调
    // reject 表示失败的回调
  }).then(function (res) {
    // 成功的函数
  }).catch(function (err) {
    // 失败的函数
  })
  ```





###### 16-3 Promise 对象的状态

Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。

 ```
异步操作未完成（pending）
异步操作成功（fulfilled）
异步操作失败（rejected）
 ```

这三种的状态的变化途径只有两种。

 ```
从“未完成”到“成功”
从“未完成”到“失败”
 ```

一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。

因此，Promise 的最终结果只有两种。

 ```
异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。
 ```

![image-20220902141409899](%E7%AC%94%E8%AE%B0.assets/image-20220902141409899.png)

###### 16-4 Promise.all

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.all([p1, p2, p3]);
```

p的状态由p1,p2,p3 决定，分成两种情况。

（1）只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。

（2）只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

###### 16-5 Promise.race

`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```javascript
const p = Promise.race([p1, p2, p3]);
```

上面代码中，只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的回调函数。



##### 17.Generator 函数

> Generator 函数是 ES6 提供的一种异步编程解决方案
>
> Generator 函数是一个状态机，封装了多个内部状态。
>
> 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。



###### 17-1 基本语法

```js
function *gen(){
    console.log(1)
    yield;
    console.log(2)
    yield;
    console.log(3)
}

let g = gen()
g.next()
g.next()
g.next()
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220917070351858.png" alt="image-20220917070351858" style="zoom:50%;float:left" />

> yield(产出)表达式是暂停执行的标记，而next方法可以恢复执行。

```js
function *gen(){
    yield  1;
    yield  2;
}

let g = gen()
let res1 = g.next()
console.log(res1)
let res2 = g.next()
console.log(res2)
let res3 = g.next()
console.log(res3)
```

![image-20220917070836171](%E7%AC%94%E8%AE%B0.assets/image-20220917070836171.png)

```js
function *gen(){
    let res1 = yield;
    console.log(res1)
    let res2 = yield;
    console.log(res2)
}

let g = gen()
g.next("data-1")
g.next("data-2")
g.next("data-3")
```

![image-20220917071219520](%E7%AC%94%E8%AE%B0.assets/image-20220917071219520.png)

###### 17-2 异步流程

**手动版本**

```js
function *gen(){
    let res1 = yield ajax("1.json")
    console.log(res1)
    let res2 = yield ajax("2.json")
    console.log(res2)
}

let g = gen()   

g.next().value.then(data=>{
    g.next(data).value.then(data=>{
        g.next(data)
    })
}) 
```

**自动版本**

```js
function* gen() {
    let res1 = yield ajax("1.json")
    console.log(res1)
    let res2 = yield ajax("2.json")
    console.log(res2)
}


function AutoRun(gen) {
    let g = gen();

    function next(data) {
        let res = g.next(data);
        if (res.done) return 
        res.value.then(function (data) {
            next(data);
        });
    }

    next();
}

AutoRun(gen);
```

##### 18. Class语法

###### 18-1 类的写法

```js
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name,this.age)
    }
}
let obj = new Person("kerwin",100)
console.log(obj)
```

###### 18-2 getter与setter

```js
class List{
    constructor(ele){
        this.element = ele
    }

    get html(){
        return this.element.innerHTML
    }
    set html(arr){
        this.element.innerHTML = arr.map(item=>`<li>${item}</li>`).join("")
    }
}
let obj = new List(document.querySelector("#list"))

obj.html = ["aaa","bbb","cccc"]
```

###### 18-3 静态属性和静态方法

```js
class Person {
    static name = "Person这个类"
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name,this.age)
    }

    static eat(){
        console.log("eat")
    }
}
let obj = new Person("kerwin",100)

console.log(Person.name)
Person.eat()
```

###### 18-4 继承

> ES6 规定，子类必须在`constructor()`方法中调用`super()`，否则就会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用`super()`方法，子类就得不到自己的`this`对象。

```js
class Person {
    static name = "Person这个类"
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name,this.age)
    }

    static eat(){
        console.log("eat")
    }
}
class Student extends Person{
    constructor(name,age,score){
        super(name,age)
        this.score = score
    }
    say(){
        super.say()
        console.log(this.score)
    }

    static eat(){
        super.eat();
        console.log("student eat")
    }
}
let obj = new Student("kerwin",100,200)
console.log(obj)
obj.say()
Student.eat()
```



##### 19.模块化

> JavaScript 现在有两种模块。一种是 ES6 模块，简称 ESM；另一种是 CommonJS 模块，简称 CJS。
>
> CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用`require()`和`module.exports`，ES6 模块使用`import`和`export`。

ES6 模块不是对象，而是通过`export`命令显式指定输出的代码，再通过`import`命令输入。

**写法1：**

```js
export default A1

import a1 from "./1.js"

```

**写法2：**

```js
export {A1,A2}

import {A1,A2} from "./1.js"

import {A1 as a1,A2 as a2} from "./1.js"

import * as obj from "./1.js"
```



```js
export function A1(){
    console.log("A1")
}
export function A2(){
    console.log("A2")
}


import {A1,A2} from "./1.js"

import {A1 as a1,A2 as a2} from "./1.js"

import * as obj from "./1.js"
```

**混合写法：**

```js
export {A1}
export default A2

import A2,{A1} from "./1.js"
```

#### 二. ES7新特性

##### 1. 求幂运算符

```js
Math.pow(3, 2) === 3 ** 2    // 9
```

##### 2.数组的includes方法

```js
[1, 2, NaN].includes(NaN)     // true
[1, 2, NaN].indexOf(NaN)  // -1

```

> 如果仅仅查找数据是否在数组中，建议使用includes，如果是查找数据的索引位置，建议使用indexOf更好一些

#### 三. ES8新特性

##### 1. async和await

###### 1-1.Async

async 函数，使得异步操作变得更加方便。

- 更好的语义。
- 返回值是 Promise。

```js
async function test(){
	
}
test()
```



###### 1-2.Await

`await`命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

```js
async function test(){
    var res1 =  await ajax("http://localhost:3000/news1")
    var res2 =  await ajax("http://localhost:3000/news2")
    return res2
}

test().then(res=>{
	console.log("返回结果",res)
}).catch(err=>{
	console.log("err",err)
})
```



###### 1-3.错误处理

```js
try{
    var res1 =  await ajax("http://localhost:3000/news1")
    var res2 =  await ajax("http://localhost:3000/news2")
}catch(err){
	console.log("err",err)
}
```



##### 2.对象方法扩展

```js
let obj = {
    name:"kerwin",
    age:100
}
console.log(Object.values(obj))
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220920154527417.png" alt="image-20220920154527417" style="zoom:50%;float:left" />


```js
let obj = {
    name:"kerwin",
    age:100
}
console.log(Object.entries(obj))
```



<img src="%E7%AC%94%E8%AE%B0.assets/image-20220920154622530.png" alt="image-20220920154622530" style="zoom:50%;float:left" />



```js
let obj = {
    name:"kerwin",
    age:100
}
console.log(Object.getOwnPropertyDescriptors(obj))
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220920155143538.png" alt="image-20220920155143538" style="zoom:50%;float:left" />



**克隆对象**

```js
let obj1 = {
    name:"Kerwin",
    age:100,
    location:{
        provice:"辽宁",
        city:"大连"
    },
    //只设置city，防止破坏province
    get city(){
        return this.location.city
    },
    set city(value){
        this.location.city = value
    },
    set nameset(value){
        this.name = value.substring(0,1).toUpperCase()+value.substring(1)
    },
    get nameset(){
        return this.name
    }
}
console.log(Object.getOwnPropertyDescriptors(obj1))
var obj2=  {}

//Object.assign(obj2,obj1)//无法克隆 get set方法
Object.defineProperties(obj2,Object.getOwnPropertyDescriptors(obj1))

```

##### 3. 字符串填充

> padStart()、padEnd()方法可以使得字符串达到固定长度，有两个参数，字符串目标长度和填充内容。


```js
let str= "kerwin"

console.log(str.padStart(10,"x"));//xxxxkerwin
console.log(str.padEnd(10,"x"));//kerwinxxxx
console.log(str.padStart(5,"x"))//kerwin
console.log(str.padEnd(5,"x"))//kerwin
```



##### 4. 函数参数的末尾加逗号

```js
function test(
 a,
 b,
 c,
){
    console.log(a,b)
}
test(
    1,
    2,
    3,
)
```

> 『末尾逗号』在添加新的参数、属性、元素时是有用的，你可以直接新加一行而不必给上一行再补充一个逗号，这样使版本控制工具的修改记录也更加整洁



#### 四. ES9新特性

##### 1. 对象的剩余参数与扩展运算符

###### 1-1 对象的剩余参数

```js
let obj = {
    name:"kerwin",
    age:100,
    location:"dalian"
}

let {name,...other} = obj
console.log(name) //kerwin
console.log(other) //{age: 100, location: 'dalian'}
```

###### 1-2 对象的扩展运算符

```js
let obj1 = {
    name:"kerwin"
}

let obj2 = {
    age:100
}

console.log({...obj1,...obj2})
```

##### 2.正则表达式命名捕获组

JS正则表达式可以返回一个匹配的对象, 一个包含匹配字符串的类数组, 比如: 以 YYYY-MM-DD的格式解析日期，

这样的代码可读性很差, 并且在改变正则表达式的结构的时候很有可能就会改变匹配对象的索引

ES9允许使用命名捕获 ?<name> , 在打开捕获括号后立即命名

```js
 let str = "今天是2022-10-10"
 let reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/g

 let res1 = reg.exec(str)
 console.log(res1)
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220921110518183.png" alt="image-20220921110518183" style="zoom:67%;float:left" />



```js
let str = "今天是2022-10-10"
let reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

let res1 = reg.exec(str)
console.log(res1)
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220921110644896.png" alt="image-20220921110644896" style="zoom:67%;float:left" />

##### 3. Promise.finally()

> 无论是成功还是失败, 都运行同样的代码, 比如隐藏对话框, 关闭数据连接

```js
function ajax(){
    return new Promise((resolve,reject)=>{
        reject(1111)
    })
}
//showloading
ajax().then(res=>{

}).catch(err=>{

}).finally(()=>{
    //hideloading
    console.log("finally")
})
```



##### 4. 异步遍历器

###### 4-1 同步遍历器的问题

```js
function* fn() {
    yield  1111
    yield  2222

}
const syncI = fn();
console.log(syncI.next())
console.log(syncI.next())
console.log(syncI.next())
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220921132030973.png" alt="image-20220921132030973" style="zoom:67%;float:left" />

###### 

```js
function* fn() {
    yield  new Promise(resolve=>resolve("1111"))
    yield  new Promise(resolve=>resolve("2222"))

}
const syncI = fn();
syncI.next().value.then(res=>{console.log(res)})
syncI.next().value.then(res=>{console.log(res)})
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220921132403676.png" alt="image-20220921132403676" style="zoom:67%;float:left" />

> `value`属性的返回值是一个 Promise 对象，用来放置异步操作。但是这样写很麻烦，不太符合直觉，语义也比较绕。



###### 4-2 异步遍历器生成函数

>Generator 函数返回一个同步遍历器，异步 Generator 函数的作用，是返回一个异步遍历器对象。在语法上，异步 Generator 函数就是async函数与 Generator 函数的结合。

```js
async function* fn() {
    yield  new Promise(resolve=>resolve("1111"))
    yield  new Promise(resolve=>resolve("2222"))

}
const asyncI = fn();

asyncI.next().then(res=>{
    console.log(res)
    return asyncI.next()
}).then(res=>{
    console.log(res)
    return asyncI.next()
})
    .then(res=>{
    console.log(res)
})
```

<img src="%E7%AC%94%E8%AE%B0.assets/image-20220921132528997.png" alt="image-20220921132528997" style="zoom:67%;float:left" />



###### 4-3 for await of

> `for...of`循环用于遍历同步的 Iterator 接口。新引入的`for await...of`循环，则是用于遍历异步的 Iterator 接口。

```js
async function test() {
    for await (let i of asyncI) {
        console.log(i)
    }
}
test()
```



###### 4-4 案例改造

```js
function timer(t) {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(t)
          }, t)
      })
 }


async function* fn() {
    yield timer(1000)//任务1
    yield timer(2000)//任务2
    yield timer(3000)//任务3
}

// 使用一下 for await ...of
async function fn1() {
    for await(const val of fn()) {
        console.log("start",Date.now())
        console.log(val);
        console.log("end",Date.now())
    }
}
fn1();
```



###### 4-5 nodejs用法

```js
// 传统写法
function main(inputFilePath) {
  const readStream = fs.createReadStream(
    inputFilePath,
    { encoding: 'utf8', highWaterMark: 1024 }
  );
  readStream.on('data', (chunk) => {
    console.log('>>> '+chunk);
  });
  readStream.on('end', () => {
    console.log('### DONE ###');
  });
}

// 异步遍历器写法
async function main(inputFilePath) {
  const readStream = fs.createReadStream(
    inputFilePath,
    { encoding: 'utf8', highWaterMark: 1024 }
  );

  for await (const chunk of readStream) {
    console.log('>>> '+chunk);
  }
  console.log('### DONE ###');
}

```



#### 五.ES10新特性

##### 1. Object.fromEntries

> Object.fromEntries()方法允许你轻松地将键值对列表转换为对象

```js
const arr = [["name", "kerwin"], ["age", 100]];
console.log(Object.fromEntries(arr))//{name: 'kerwin', age: 100}

const m = new Map()
m.set("name","tiechui")
m.set("age",18)
console.log(Object.fromEntries(m))
```

**用处**

```js
let str ="name=kerwin&age=100"

let searchParams = new URLSearchParams(str)
console.log(Object.fromEntries(searchParams))//{name: 'kerwin', age: '100'}
```

##### 2. trimStart() and trimEnd()

> trimStart()和trimEnd()方法在实现与trimLeft()和trimRight()相同。

```js
let str = "   kerwin    "
console.log("|"+str.trimStart(str)+"|")
console.log("|"+str.trimEnd(str)+"|")
console.log("|"+str.trimLeft(str)+"|")
console.log("|"+str.trimRight(str)+"|")
```



##### 3. Symbol 对象的 description 属性

> 为Symbol对象添加了只读属性 description ，该对象返回包含Symbol描述的字符串。

```js
let s = Symbol("kerwin")
console.log(s.description) //kerwin
```

##### 4. 可选的 catch

```js
let pro1 = new Promise(function (resolve, reject) {
    //执行器函数
    setTimeout(() => {
        resolve("成功的结果")
    }, 30000)
})
let pro2 = new Promise(function (resolve, reject) {
    //执行器函数
    setTimeout(() => {
        reject()
    }, 2000)
})
async function test() {
    try {
        await Promise.race([pro1, pro2])
    } catch {
        console.log("不关心错误结果，网络超时")
    }
}
test()
```





#### 六. ES11新特性

##### 1. Promise.allSettled

> Promise.allSettled() 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise ，并带有一个对象数组，每个对象表示对应的 promise 结果。

```js
const promises = [ ajax('/200接口'), ajax('/401接口') ];

Promise.allSettled(promises).then(results=>{
    // 过滤出成功的请求
    results.filter(item =>item.status === 'fulfilled');
    过滤出失败的请求
    results.filter(item=> item.status === 'rejected');
})

```



##### 2.module新增

###### 2-1 动态导入 import()

> 标准用法的 import 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译（无法做到按需编译，降低首页加载速度）。有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入。

```js
<body>
    <button>login</button>
    <script type="module">
        let role1 = "管理员"
        let role2 = "普通用户"

        function login(){
            return "普通用户"
        }

        async function render(role){
            if(role===role1){
                let res1 = await import("./1.js")
                console.log(res1.default)
            }else{
                let res2 = await import("./2.js")
                console.log(res2.default)
            }
        }

        let obtn = document.querySelector("button")
        obtn.onclick = function(){
            let role = login()
            render(role)
        }
    </script>
</body>

```



###### 2-2 import.meta

import.meta 会返回一个对象，有一个 url 属性，返回当前模块的url路径，只能在模块内部使用。

```js
<script type="module">
        import obj from './1.js'
</script>


//1.js

console.log(import.meta)
export default {
    
}
```



###### 2-3 export * as obj from 'module'

```js
//1.js
export default {
    name:'111111'
}

export function test1(){
    
}
//2.js
export default {
    name:"22222"
}
export function test2(){
    
}
export * as obj1 from './1.js'
//html
 <script type="module">
        import * as obj from './2.js'
        console.log(obj)
 </script>
```



<img src="%E7%AC%94%E8%AE%B0.assets/image-20220922111416681.png" alt="image-20220922111416681" style="zoom:67%;float:left;" />





##### 3.字符串的matchAll方法

> matchAll() 方法返回一个包含所有匹配正则表达式的结果的迭代器。可以使用 for...of 遍历，或者使用 展开运算符(...) 或者 Array.from 转换为数组.

```js
let str = `
<ul>
<li>1111</li>
<li>2222</li>
<li>3333</li>
<li>4444</li>
</ul>
`
let reg = /<li>(.*)<\/li>/g

console.log(str.match(reg)) 
//'<li>1111</li>', '<li>2222</li>', '<li>3333</li>', '<li>4444</li>'
```

```js
let str = `
<ul>
<li>1111</li>
<li>2222</li>
<li>3333</li>
<li>4444</li>
</ul>
`
let reg = /<li>(.*)<\/li>/g
let match = null;
while(match = reg.exec(str)){
    console.log(match[0])
    console.log(match[1])
}
```



```js
let str = `
<ul>
<li>1111</li>
<li>2222</li>
<li>3333</li>
<li>4444</li>
</ul>
`
let reg = /<li>(.*)<\/li>/g

for(let i of str.matchAll(reg)){
    console.log(i)
}
```





##### 4. BigInt

> JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值，这使得 JavaScript 不适合进行科学和金融方面的精确计算。

```js
9007199254740992 //9007199254740992
9007199254740993 //9007199254740992

Math.pow(2,53) === Math.pow(2,53)+1
```



为了与 Number 类型区别，BigInt 类型的数据必须添加后缀`n`。

```js
1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n

```



##### 5. globalThis

> globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）。不像 window 或者 self这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 this 就是 globalThis。
>

```js
//es6-shim

var getGlobal = function () {

// the only reliable means to get the global object is

    // Function('return this')()

    // However, this causes CSP violations in Chrome apps.

     if (typeof self !== 'undefined') { return self; }
    
        if (typeof window !== 'undefined') { return window; }
    
        if (typeof global !== 'undefined') { return global; }
    
        throw new Error('unable to locate global object');

};

var globals = getGlobal();

if (!globals.Reflect) {

defineProperty(globals, ‘Reflect’, {}, true);

}

```



```js
//以前
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }

    if (typeof window !== 'undefined') { return window; }

    if (typeof global !== 'undefined') { return global; }

    throw new Error('unable to locate global object');
};

let globals = getGlobal()

if (globals.document) {
    console.log("进行dom操作相关")
} else {
    console.log("不能进行dom操作")
}

//现在
if (globalThis.document) {
    console.log("进行dom操作相关")
} else {
    console.log("不能进行dom操作")
}
```





##### 6.空值合并运算符

> **空值合并运算符（*??*）**是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。

```js
let obj = {
    name:"kerwin",
    introduction:0
}

console.log(obj.introduction || "这个人很懒")
console.log(obj.introduction ?? "这个人很懒")
```

**??和 || 的区别是什么呢?**

他们两个最大的区别就是 ’ '和 0，??的左侧 为 ’ '或者为 0 的时候，依然会返回左侧的值；

|| 会对左侧的数据进行boolean类型转换，所以’ '和 0 会被转换成false,返回右侧的值



##### 7.可选链操作符

> 可选链前面的值如果是null或undefined，则不再执行后面的，之前返回可选链前面的值

```js
let obj = {
    name:"kerwin",
    introduction:0,
    // location:{
    //     city:"dalian"
    // }
}

console.log(obj && obj.location && obj.location.city)
console.log(obj?.location?.city)
```



#### 七. ES12新特性

##### 1. 逻辑赋值操作符

逻辑赋值操作符 ??=、&&=、 ||=

```js
let a = true
let b = false
//a &&= b //false
a ||= b ; //true
console.log(a)


let obj = {
    name:"kerwin",           
}

obj.introduction = obj.introduction??"很懒"
obj.introduction??="很懒"
```





##### 2.数字分隔符

这个新特性是为了方便程序员看代码而出现的，如果数字比较大，那么看起来就不是那么一目了然

```js
const num= 123456789；

```

分隔符不仅可以分割十进制，也可以分割二净值或者十六净值的数据，非常好用。

```javascript
const number = 1_000_000_000_000;
const binary = 0b1010_0101_1111_1101;
const hex = 0xA1_B2_C3;
```





##### 3. replaceAll

> 所有匹配都会被替代项替换。模式可以是字符串或正则表达式，而替换项可以是字符串或针对每次匹配执行的函数。并返回一个全新的字符串  

```js
const str =
      "I wish to wish the wish you wish to wish, but if you wish the wish the witch wishes, I won't wish the wish you wish to wish. ";
const newStr = str.replaceAll("wish", "kerwin");
console.log(newStr);
```





##### 4.Promise.any

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

> `Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束。

##### 5. WeakRef



> 在一般情况下，对象的引用是强引用的，这意味着只要持有对象的引用，它就不会被垃圾回收。只有当该对象没有任何的强引用时，垃圾回收才会销毁该对象并且回收该对象所占的内存空间。
>
> 而 `WeakRef` 允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被垃圾回收。

```js
let target = {};
let wr = new WeakRef(target);

```

WeakRef 实例对象有一个`deref()`方法，如果原始对象存在，该方法返回原始对象；如果原始对象已经被垃圾回收机制清除，该方法返回`undefined`。

```js
let target = {};
let wr = new WeakRef(target);

let obj = wr.deref();
if (obj) { // target 未被垃圾回收机制清除
  // ...
}
```



```js
let like = new WeakRef(document.getElementById("like"))
let mymap = new WeakMap()
mymap.set(like.deref(), {
    click: 0
})
like.deref().onclick = function () {
    let times = mymap.get(like.deref())
    times.click++
}

setTimeout(() => {
    document.body.removeChild(like.deref())
}, 2000)
```





##### 6. FinalizationRegistry

> 清理器注册表功能 FinalizationRegistry，用来指定目标对象被垃圾回收机制清除以后，所要执行的回调函数。

首先，新建一个注册表实例。

```javascript
const registry = new FinalizationRegistry(data => {
  // ....
});
```

```javascript
registry.register(obj, "some value");
registry.unregister(obj);

```



```js
let like = new WeakRef(document.getElementById("like"))
let mymap = new WeakMap()
mymap.set(like.deref(), {
    click: 0
})
like.deref().onclick = function () {
    let times = mymap.get(like.deref())
    times.click++
}

setTimeout(() => {
    // registry.register(document.getElementById("like"), mymap.get(like.deref()));
    registry.register(like.deref(), mymap.get(like.deref()));

    document.body.removeChild(like.deref())
}, 2000)


const registry = new FinalizationRegistry(data => {
    // ....
    console.log("被销毁了", data)
});
```







#### 八.ES13新特性

##### 1. 私有属性和方法

```js
class Cache{
    #obj  ={}

    get(key){
        return this.#obj[key]
    }
set(key,value){
    this.#obj[key] =value
}
}

let cache = new Cache()
cache.set("name","kerwin")
```

##### 2.静态成员的私有属性和方法

> 我们还可以给类定义静态成员和静态私有函数。类的静态方法可以使用`this`关键字访问其他的私有或者公有静态成员，

```js
 class Cache{
     static #count = 0;

     static getCount(){
         return this.#count
     }

    #obj  ={}

    get(key){
        return this.#obj[key]
    }
    set(key,value){
        this.#obj[key] =value
    }
}

let cache = new Cache()
cache.set("name","kerwin")

console.log(Cache.getCount())
```



##### 3.静态代码块

> ES13允许在类中通过`static`关键字定义一系列静态代码块，这些代码块只会在类被创造的时候**执行一次**。这其实有点像一些其他的如C#和Java等面向对象的编程语言的静态构造函数的用法。



一个类可以定义任意多的静态代码块，这些代码块会和穿插在它们之间的静态成员变量一起按照定义的顺序在类初始化的时候执行一次。我们还可以使用`super`关键字来访问父类的属性。

```js
 class Cache{
    static obj = new Map()
    static {
        this.obj.set("name","kerwin")
        this.obj.set("age",100)
    }

    static{
        console.log(this.obj)
    }
}

console.log(Cache.obj)
```



##### 4. 使用in来判断某个对象是否拥有某个私有属性

```js
class Cache {
    #obj = {}

    get(key) {
        return this.#obj[key]
    }
    set(key, value) {
        this.#obj[key] = value
    }

    hasObj(){
        return #obj in this
    }
}

let cache = new Cache()
console.log(cache.hasObj())
```



##### 5.支持在最外层写await

> 顶层`await`只能用在 ES6 模块，不能用在 CommonJS 模块。这是因为 CommonJS 模块的`require()`是同步加载，如果有顶层`await`，就没法处理加载了。

```js
<script type="module">
    function ajax() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data-1111");
        }, 1000);
    })
}

let res = await ajax();
console.log(res)

</script>

```



##### 6. at函数来索引元素

```js
let arr = ["kerwin","tiechui","gangdan","xiaoming"]

console.log(arr[1])
console.log(arr[arr.length-1]) //变丑了
console.log(arr[arr.length-2]) //变丑了

console.log(arr.at(1))
console.log(arr.at(-1))
console.log(arr.at(-2))
```



##### 7. 正则匹配的开始和结束索引

```js
let str = "今天是2022-11-10"
let reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/d

//exec
let res = reg.exec(str)
console.log(res)
```

![image-20220927105243515](%E7%AC%94%E8%AE%B0.assets/image-20220927105243515.png)



##### 8.findLast()和findLastIndex()函数

```js
let arr = [11,12,13,14,15]

// let res = arr.find(function(value){
//   return value % 2 === 0
// })
// let res = arr.findIndex(function(value){
//   return value % 2 === 0
// })
// let res = arr.findLast(function(value){
//   return value % 2 === 0
// })
let res = arr.findLastIndex(function(value){
    return value % 2 === 0
})
console.log(res)
```

##### 9.Error对象的Cause属性

> Error对象多了一个`cause`属性来指明错误出现的原因。这个属性可以帮助我们为错误添加更多的上下文信息，从而帮助使用者们更好地定位错误。

```js
function getData(){
    try{
        console.log(kerwin)
    }
    catch(e){
        throw new Error('New error 1111111',{cause:"这是因为,,,,,,,,,"});
    }
}


try{
    getData()
}catch(e){
    console.log(e.cause)
}
```

