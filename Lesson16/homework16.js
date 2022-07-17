// 1 - элемент с картинкой
// 2 - топ нав меню
//- найти только первый видимый элемент 
//- последний видимый элемент
//- найти все видимые элементы
//- все невидимые элементы
//- найти нечетные элементы
// 3 - дата
// 4 - кликабельный элемент поиска
// 5 - лого
// 6 - новости блоком

class locatorsXpath{
    
    let elementWithPicture =//div[@class="media media--hero media--primary media--overlay block-link"]
    let elementTopMenu = //nav[@class="orbit-header-links international"]
    let elementFirstVisible = //nav[@class="orbit-header-links international"]//li[position()=1]
    let elementLastVisible = //nav[@class="orbit-header-links international"]//li[last()]
    let elemetNotDivisibleByTwo = //nav[@class="orbit-header-links international"]//li[position() mod 2 != 0]
    
}