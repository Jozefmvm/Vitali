// 1) Cделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2,
//третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandom(){
    return Math.floor(Math.random() * (5-1) + 1);
}

function getPromis(){
    return new Promise((resolve, reject) => {
        let timeout = getRandom();
        setTimeout(() => {
            resolve(timeout);
        }, timeout*1000)
    })
}

let first = getPromis();
let second = getPromis();
let third = getPromis();

Promise.race([first, second, third])
.then (data => {
    console.log(data);
})

async function getRandomAsync(){
    await first;
    await second;
    await third;
    console.log(Promise.race([first, second, third]));
      
    
}
getRandomAsync()

// 2) Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum(){
    return new Promise((resolve, reject) =>{
        let randomNumber = Math.floor(Math.random()* (5 - 1) +1);
        setTimeout (()=>{
            resolve(randomNumber);
        }, 3000 );
    });

}

async function waitResultFromGetnum(){
    let result = await getNum();
    console.log(Math.pow(result,2));
    }
    waitResultFromGetnum();


// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    };
    function getNum1(){
      return new Promise(function(resolve, reject){
     let randomNum = getRandomInt(1, 6);
    setTimeout(() =>{
      resolve(randomNum);
    }, 3000);
    });
    };
    
    function getNum2(){
      return new Promise(function(resolve, reject){
     let randomNum = getRandomInt(6, 11);
    setTimeout(() =>{
      resolve(randomNum);
    }, 5000);
    });
    };

    async function getNumAsync(){
     let result1 = await getNum1();
     let result2 = await getNum2();
    console.log(result1 + result2);
    };
    getNumAsync();
