// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function reverseArray(arr){
    return arr.reverse()
}

console.log(reverseArray([1,2,3,4,5,6]))

// 2) найти максимальное значение числа в массиве ([3,67,15...])

function getMaxOfArray (arr_1){
    return Math.max.apply(null, arr_1);
}

console.log(getMaxOfArray([3,67,15,44,103,34]));

// // 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M


function fibonacci(start){                  // старт числа с определенного индекса фибоначчи
  let fib = [0,1];
  for (i = 2; i < 1000; i++){
    fib[i]=fib[i-1]+fib[i-2]
  }
  return fib.slice(start);
}


function intervalFib(start,leng){
  let fib_3 = fibonacci(start)
  fib_3.length = leng;
  return fib_3;
  
}
console.log(intervalFib(8,5))



// 4) даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) 

function findSimilar(number1, number2){
  let count = 0;
  let count_1 = 0;
  for (let i = 0; i < number1.length; i ++){
    for (let a = 0; a < number2.length; a ++){
      if (number1[i] === number2[a]){
        count ++;
      }
      if (number1[i] === number2[a] && number1.indexOf(a) === number2.indexOf(i)){
        count_1++;
      }
    }
  }
  return [count, count_1];
}
console.log(findSimilar([1,2,3,4], [1,2,3,4]));
console.log(findSimilar([3,4,8,7], [3,7,9,4]));


// 5) сортировка массива по возрастанию/убыванию

function sortOfarrayDecrease(array){
  array.sort((a,b) => b - a)
  return array;
}

function sortOfarrayIncrease(array){
  array.sort((a,b) => a - b)
  return array;
}

console.log(sortOfarrayDecrease([2,34,11,-4]))
console.log(sortOfarrayIncrease([2,34,11,-4]))

// 6) удалить из массива все повторяющиеся элементы

function uniqItem(a) {
  let seen = {};
  let out = [];
  let j = 0;
  for(let i = 0; i < a.length; i++) {
       let item = a[i];
       if(seen[item] !== 1) {
             seen[item] = 1;
             out[j++] = item;
       }
  }
  return out;
}

console.log(uniqItem([12,12,34,293,45,45]))