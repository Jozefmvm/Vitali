// 1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let summ_of_first_player = 0;
let summ_of_second_player = 0;
for (let i = 0; i <= 3; i++){
    let number_1 = Math.floor(Math.random()*6) + 1;
    summ_of_first_player += number_1;
    let number_2 = Math.floor(Math.random()*6) + 1;
    summ_of_second_player += number_2;
}
if (summ_of_first_player === summ_of_second_player){
    console.log('Draw!')
}
else if (summ_of_second_player > summ_of_first_player){
    console.log('Secondpayer win!')
}
else if (summ_of_first_player > summ_of_second_player) {  // Можно просто else, работать будет так же.
    console.log("Firstplayer win!")
}

// 2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.

let start = new Date('2000-01-01');
//start.getMonth()
let end = new Date(Date.now())
//end.getMonth()
let differece_year = new Date (end-start);
//differece_year.getMonth
let differece_months = differece_year.getMonth() + 265;

function friday (month){
let counter = 0;
for (i = 0; i <= month; i++) {
    let d = new Date(month, i, 13);                          
     if (d.getDay() == 5) {
        counter++;
    }
}
return counter;
}
console.log(friday(differece_months));



// 3) Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет
// равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5).
// a) числа изначальное число целое, числа разбивки - целые (4,6,5).


function partition (number, parts){
    let arr = [];    
    let sum_of_array = 0; 
for (i = 0; i < parts; i ++){
    arr[i] = Math.floor(Math.random() * (10 + 1 -2 )+1);
}
sum_of_array = arr[0]+arr[1]+arr[2];
if (sum_of_array === number){
    return arr;
}
else{
    return partition(number, parts)
}
}
console.log(partition(15, 3));

// b) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25).

function partition_two (number, parts){
    let arr_1 = [];    
    let sum_of_array_1 = 0; 
for (i = 0; i < parts; i ++){
    arr_1[i] = Math.round((Math.random() * (number + 1 -2 ) +1)*100)/100;
}
sum_of_array_1 = arr_1[0]+arr_1[1]+arr_1[2];
if (sum_of_array_1 === number){
    return arr_1;
}
else{
    return partition_two (number, parts);
}
}
console.log(partition_two(15, 3));
