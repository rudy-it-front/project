import beerTar from "../img`s/page-burger/beerTar.jpg";
import burKing from "../img`s/page-burger/burKing.jpg";
import burWin from "../img`s/page-burger/burWin.jpg";
import chiStick from "../img`s/page-burger/chiStick.jpg";
import comboDouble from "../img`s/page-burger/comboDouble.jpg";
import comboGamb from "../img`s/page-burger/comboGamb.jpg";
import comboKing from "../img`s/page-burger/comboKing.jpg";
import doubleChis from "../img`s/page-burger/doubleChis.jpg";
import gambur from "../img`s/page-burger/gambur.jpg";
import potFri from "../img`s/page-burger/potFri.jpg";


const burgers = [
    {
        id: 1,
        name: 'Бургер на перемогу',
        weight: 210,
        price: 199,
        image: burWin,
        description: 'Котлета з яловичини, сир хохланд, салат айзберг, червона цибуля, помідор, соуси тар-тар та сирний',
    },

    {
        id: 2,
        name: 'Сирні палички із соусом з журавлини',
        weight: 175,
        price: 189,
        image: chiStick,
        description: 'Сир моцарелла в паніровці з сухарів панко',
    },

    {
        id: 3,
        name: 'Картопля фрi',
        weight: 140,
        price: 99,
        image: potFri,
        description: 'Картопля фрi',
    },

    {
        id: 4,
        name: 'Бургер Кінг Йорк',
        weight: 210,
        price: 149,
        image: burKing,
        description: 'Котлета з яловичини, сир Хохланд, салат Айсберг, фіолетова цибуля, маринований огірок, помідор, фірмовий соус',
    },

    {
        id: 5,
        name: 'Дабл Чізбургер',
        weight: 280,
        price: 199,
        image: doubleChis,
        description: 'Дві котлети з яловичини, сир Хохланд, цибуля, маринований огірок, кетчуп, гірчиця',
    },

    {
        id: 6,
        name: 'Гамбургер',
        weight: 180,
        price: 119,
        image: gambur,
        description: 'Котлета з яловичини, цибуля, маринований огірок, кетчуп, гірчиця',
    },

    {
        id: 7,
        name: 'Комбо меню Дабл Чізбургер',
        weight: 280,
        price: 239,
        image: comboDouble,
        description: 'Бургер Дабл Чизбургер, картофель фри, соус BBQ',
    },

    {
        id: 8,
        name: 'Комбо меню Кінг Йорк',
        weight: 210,
        price: 199,
        image: comboKing,
        description: 'Бурегр Кинг Йорк, картофель фри, соус BBQ',
    },

    {
        id: 9,
        name: 'Комбо меню Гамбургер',
        weight: 180,
        price: 189,
        image: comboGamb,
        description: 'Гамбургер, картофель фри, соус BBQ',
    },

    {
        id: 10,
        name: 'Пивна тарілка',
        weight: 690,
        price: 449,
        image: beerTar,
        description: 'Курячі крильця в соусі приван, курячі стікси з соусом унагі та білим кунжутом, картопляні нозети, цибулеві кільця, курячий попкорн, грінки, соуси BBQ і сирний',
    },

]

export default burgers