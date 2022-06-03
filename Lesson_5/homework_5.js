
// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// 1.1 (string+boolean)

let string_1 = 'abc + ';
let bool_1 = true;
console.log(string_1 + bool_1);

let string_2 = 'AaAaFfFf + ';
let bool_2 = false;
console.log(string_2+bool_2);


// 1.2 (string+number)

let string_3 = 'Summer ';
let number_1 = 2022;
console.log(string_3+number_1);


// 1.3 (number + boolean)

let number_2 = 2022;
let bool_3 = true;
console.log(number_2+bool_3);


// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// 2.1 (string * boolean)

let string_4 = 'Python';
let bool_4 = true;
console.log(string_4 * bool_4);

// 2.2 (string * number)

let string_5 = 'Python';
let number_3 = 123321;
console.log(string_5 * number_3);

// 2.3  (number * boolean)

console.log(number_3 * bool_4); // умножить на false  = это как умножить на единицу т.к. true = 1
console.log(number_3 * bool_2); // умножить на false  = это как умножить на ноль т.к. false = 0


// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
// 3.1 (strring/boolean)

let string_6 = 'Skoda';
let bool_5 = true;
let bool_6 = false;
console.log(string_6/bool_5);
console.log(string_6/bool_6);

// 3.2 (string/number)

let number_4 = 100;
console.log(string_6/number_4);

// 3.3 (number/boolean)

console.log(number_4/bool_5);
console.log(number_4/bool_6);


// 4) Выполнить явное преобразование(number, string, boolean)
// 4.1 (number)
// number > string

let number_5 = 2020202;
let string_from_number_5 = String(number_5);
console.log(string_from_number_5);
console.log(typeof(string_from_number_5));

// number > boolean

let boolean_from_number_5 = Boolean(number_5); 
console.log(boolean_from_number_5);
console.log(typeof(boolean_from_number_5));

// 4.2 (string)
// string > number

let number_fom_string = Number(string_from_number_5);
console.log(number_fom_string);
console.log(typeof(number_fom_string));

// string > number (second way)

let number_from_string_parse = parseInt(string_from_number_5);
console.log(number_from_string_parse);
console.log(typeof(number_from_string_parse));

// 4.3 (boolean)
// boolean > number 

let number_from_boolean_1 = Number(bool_1);
let number_from_boolean_2 = Number(bool_2);
console.log(number_from_boolean_1);
console.log(number_from_boolean_2);
console.log(typeof(number_from_boolean_1));
console.log(typeof(number_from_boolean_2));

//boolean > string

let string_from_boolean = String(bool_1);
console.log(string_from_boolean);
console.log(typeof(string_from_boolean));
