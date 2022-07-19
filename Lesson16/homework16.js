// 1 - элемент с картинкой

let elementWithPictureXpath ='//div[@class="media media--hero media--primary media--overlay block-link"]';
let elementWithPictureCss = 'div.media.media--hero.media--primary.media--overlay.block-link';

// Если речь о самой картинке ,то 

let img = '//div[@class="media media--hero media--primary media--overlay block-link"]/div[@class="media__image"]/div[@class="responsive-image"]/img';

// 2 - топ нав меню

let elementTopMenu = '//nav[@class="orbit-header-links international"]';
let elementTopMenuCss = 'nav.orbit-header-links.international';

//- найти только первый видимый элемент 

let firstVisibleXpath = '//nav[@class="orbit-header-links international"]//li[position()=1]';
let firstVisibleCss = 'nav.orbit-header-links.international>ul>li:first-child';


//- последний видимый элемент

let lastvisibleXpath = '//nav[@class="orbit-header-links international"]//li[last()]';
let lastvisibleCss = 'nav.orbit-header-links.international>ul>li:last-child';

//- найти нечетные элементы

let elemetNotDivisibleByTwo = '//nav[@class="orbit-header-links international"]//li[position() mod 2 != 0]';
let elemetNotDivisibleByTwoCss = 'nav.orbit-header-links.international>ul>li:nth-child(2n+1)';

// 3 - дата
// возможно нужны действия какие то для получения даты
let dataofDayCss = 'section.module.module--header>h2';
let dataofDayXpath = '//section[@class="module module--header"]/h2'


// 4 - кликабельный элемент поиска

let clickSearchXpath = '//a[@id="orbit-search-button"]';
let clickSearchCss = 'div.orb-nav-section.orb-nav-search>a';

// 5 - лого

let logoofSite = '//*[@viewBox="0 0 112 32" and @width="112"]'
let logoofSiteCss = 'div.orb-nav-section.orb-nav-blocks>a>svg'

// 6 - новости блоком

let newsFourPagesCss = '.module--promo li.media-list__item:not(.media-list__item--1)';
