// 1.Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.


interface clients {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const users: clients [] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
children: 2
    }
];

function getDataOfClients(client: clients){
    console.log(client.name, client.age, client.occupation)
}
users.forEach(getDataOfClients)


// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву


interface User {
    name: string,
    age: number,
    occupation?: string | null
}

interface Admin {
    name: string,
    age: number,
    role: string
}
type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

console.log(persons)


// 3. Напишите анотации типов к этому классу.


type ObjectNew<A, B extends string, C> = A & {[DB in B]: C};

export class ObjectManipulator<A> {

    constructor(protected obj: A) {};
   
    public set<B extends string, C>(key:B, value:C): ObjectManipulator<ObjectNew<A,B,C>> {
        return new ObjectManipulator({...this.obj, [key]: value} as ObjectNew<A,B,C>);
    }

    public get<B extends keyof A>(key: B): A[B] {
        return this.obj[key];
    }

    public delete<B extends keyof A>(key:B): ObjectManipulator<Omit<A,B>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): A {
        return this.obj;
    }
}

// 4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map <D>(mapper:(element: D, index: number, arr: D[]) => void, input: D[]) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: D[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<E>(filterer: (element: E, index: number, arr: E[]) => boolean, input: E[]) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: E[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */

export function add(a: number, b: number): number | typeof add | ((a1: number) => number);
export function add (a: string, b: string): string;
export function add(a: any, b: any) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: any) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}