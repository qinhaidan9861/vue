const app = new Vue({
  el: '#app',
  data: {
    books:[
      {
        id: 1,
        name: '《算法导论》',
        date: '2020-09',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 129.00,
        count: 1
      },
    ]
  },
  methods:{
    increment(index){
      this.books[index].count++
    },
    decrement (index){
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice() {
      //1、普通的for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //2、for (let i in this.books)
      //   let totalPrice = 0;
      //   for (let i in this.books){
      //     totalPrice += this.books[i].price * this.books[i].count
      //   }
      //     return totalPrice
      // }

      //3、for(let i of this.books)
      // let totalPrice = 0
      // for (let item of this.books){
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      return this.books.reduce(function (pre,book){
        return pre + book.price * book.count
      },0)

    }

  },
  //过滤器
  filters: {
    showPrice(price) {
      //保留两位小数
      return '¥' + price.toFixed(2)
    }
  }
})

//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
//filter/map/reduce

//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，函数内部会过滤掉这次的n
const nums = [10,109,25,709,90,166,33]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);
console.log(total);
//  let total = nums.filter(function (n){
//    return n< 100
//  }).map(function (n){
//    return n * 2
//  }).reduce(function (preValue,n){
//    return preValue + n
//  },0)
// console.log(total);

// //1、filter函数的使用
// //10、25、90、33
// let newNums = nums.filter(function (n){
//   return n < 100
// })
// console.log(newNums);
//
// //2、map函数的使用
// //[20, 50, 180, 66]
// let new2Nums = newNums.map(function (n){ //一共遍历四次
//   return n * 2
// })
//  console.log(new2Nums);
//
// //3、reduce函数的使用
// //reduce作用：对数组中的内容进行汇总
// //new2Nums.reduce(参数一,参数二)
// let total = new2Nums.reduce(function (preValue,n){
//   return preValue + n
// },0)
// console.log(total);
//第一次： preValue 0 + n(20) = n 20
//第二次： preValue preValue(20) + n(50) =  n 70
//第三次： preValue preValue(70) + n(180) =  n 250
//第四次： preValue preValue(250) + n(66) =  n 316