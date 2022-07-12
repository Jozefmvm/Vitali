
const  {Calculator}  = require ('../support/calculator');

const { cases } = require('jasmine-parameterized');

const calculator = new Calculator;


beforeAll (async() => {
    console.log('Tests of calculator')
});


describe('Check function add in calculator - equal number', function(){
    it ('should be number', async () => {
        expect (typeof (calculator.add(1,2,3))).toEqual('number')
    })
})


describe('Check function add in calculator with string - not equal number', function(){
    it ('should be number', async () => {
        expect (typeof (calculator.add('aaa',2,3))).not.toEqual('number')
    })
})


describe('Check function add in calculator - summ', function(){
    it ('should be result of function add', async() =>{
        expect (calculator.add(2,5)).toEqual(7);
    })
})


describe('Check funtion multiply in calculator - equal number', function(){
    it ('should be number', async() => {
        expect(typeof calculator.multiply(3,4)).toEqual('number');
    })
})

//Специальная проверка на некорректный результат - должен фэйлиться
describe('Check funtion multiply in calculator - not correct result', function(){
    it ('should be failed', async() => {
        expect(typeof calculator.multiply(3,4)).toEqual(34);
    })
})


describe('Check funtion multiply in calculator - result', function(){
    it ('should be number', async() => {
        expect(calculator.multiply(3,4)).toEqual(12);
    })
})


// Специальная проверка на некорректный результат- должен фэйлиться.
describe('Check funtion multiply in calculator - not correct result', function(){
    it ('should be failed', async() => {
        expect(calculator.multiply(3,4)).toEqual(15);
    })
})


describe('Check function divide in calculator - equal number', function(){
    it ('should be number', async() => {
        expect(typeof calculator.divide(30,10)).toEqual('number');
    })
})

describe('Check function divide in calculator - result', function(){
    it ('should be number', async() => {
        expect(calculator.divide(30,10)).toEqual(3);
    })
})


describe('Check function divide in calculator - divide by 0', function(){
    it ('should be number', async() => {
        expect(calculator.divide(30,0)).toEqual(Infinity);
    })
})


describe('Check function subtraction', function(){
    it ('Should be number', async() => {
        expect(typeof calculator.subtraction(20,3)).toEqual('number')
    })
})


describe('Check function subtraction - result', function(){
    it ('Should be number', async() => {
        expect(calculator.subtraction(-20,3)).toEqual(-23)
    })
})


describe('Check function exponentiation', function(){
    it ('Should be number', async() => {
        expect(calculator.exponentiation(4)).toEqual(16)
    })
})


// Параметризация
cases ([
    [-2,4,2],
    [0,0,0],
    [3,0,3]
]).it ('Should', async ([number1, number2, equal]) =>{
    const resultOfCase = calculator.add(number1,number2);
    expect(resultOfCase).toEqual(equal)
})
