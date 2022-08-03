// Конструктор.

class Chef {
    constructor(vegetable, calories, freshnessDay, taste){
        this.vegetable = vegetable;
        this.calories = calories;
        this.freshnessDay = freshnessDay;
        this.taste = taste;
}
}

// Создание объектов фабричным паттерном.

class VegetableFactory {
    createVegetable(vegetable){
        if (vegetable.toLowerCase() === 'tomato'){
            return new Chef (vegetable, 100, 2, 'tasty')
        }
        if (vegetable.toLowerCase() === 'cucumber'){
            return new Chef (vegetable, 50, 4, 'neutral')
        }
        if (vegetable.toLowerCase() === 'leek'){
            return new Chef (vegetable, 75, 1, 'neutral')
        }
        if (vegetable.toLowerCase() === 'broccoli'){
            return new Chef (vegetable, 35, 3, 'bitter')
        }
        if (vegetable.toLowerCase() === 'corn'){
            return new Chef (vegetable, 80, 4, 'tasty')
        }
        if (vegetable.toLowerCase() === 'pepper'){
            return new Chef (vegetable, 20, 2, 'neutral')
        }
    }
}

// Создаем объекты (овощи).

const factory = new VegetableFactory();

const tomato = factory.createVegetable('Tomato')
const cucumber = factory.createVegetable('Cucumber')
const leek = factory.createVegetable('Leek')
const broccoli = factory.createVegetable('Broccoli')
const corn = factory.createVegetable('Corn')
const pepper = factory.createVegetable('Pepper')


// получаем массив объектов "салат" из выбранных овощей (овощи вводим самостоятельно на выбор).

class SaladMaker{
    getSalad(...val){
        for(let key in val){
            if(val.hasOwnProperty(key) === true){
                val[key] = val[key];
            }
        }
        return val;
    }
}


// Класс действий над салатом

class ActionsForSalad extends SaladMaker{
    getCalories(...val){                     // Получение суммы калорий салата.
        super.getSalad(...val)
        return val.reduce(function(a,b){
            return a+b.calories;
        },0) 
    }
    getFreshnessVegetable(day,...val){       // Нахожу овощи с определенным днем свежести (возможны любые другие варианты).
        super.getSalad(...val)
        return val.filter( a => a.freshnessDay === day).map(l => l.vegetable)
    }
    sortFreshness(...val){                  // Сортирую овощи от самого свежего до самого не свежего (возможны любые другие варианты).
        super.getSalad(...val)
        return val.sort((a, b) => a.freshnessDay - b.freshnessDay ).map(l => l.vegetable)
    }
    getRange(day, taste, ...val){           // Получаю овощи, соответствующие двум заданным параметрам
        super.getSalad(...val)
        return val.filter(a => a.freshnessDay === day && a.taste === taste).map(l => l.vegetable)
    }
}

const action = new ActionsForSalad()

// Результат работы с включением всех овощей в салат.
//Сумма калорий

console.log(action.getCalories(tomato,cucumber,leek, broccoli,corn, pepper))

// Поиск овощей по заданомуму парметру (дни свежести)
console.log(action.getFreshnessVegetable(2, tomato,cucumber,leek, broccoli,corn, pepper))

// Сортировка овощей по дням свжести (от свежего к не свежему)
console.log(action.sortFreshness(tomato,cucumber,leek, broccoli,corn, pepper))

// Поиск овощей с заданным диапазоном парметров (день свежести и вкус)
console.log(action.getRange(2, 'tasty', tomato,cucumber, leek, broccoli, corn, pepper))
