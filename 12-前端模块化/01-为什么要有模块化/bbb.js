;var moduleB = (function () {
  var obj = {}

  var name = '小红'
  var flag = false

  console.log(name);

  function sum(num1,num2){
    return num1 + num2
  }
  var flag = true;

  if (flag) {
    console.log(sum(17, 20));
  }

  obj.flag = flag
  obj.sum = sum

  return obj
})()
