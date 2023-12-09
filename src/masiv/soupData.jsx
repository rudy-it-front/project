import boUa from "../img`s/page-soup/boUa.jpg";
import chikBul from "../img`s/page-soup/chikBul.jpg";
import chikSoup from "../img`s/page-soup/chiSoup.jpg";
import ramen from "../img`s/page-soup/ramen.jpg";
import skandLos from "../img`s/page-soup/skandLos.jpg";
import tomYam from "../img`s/page-soup/tomYam.jpg";

const soups = [
    {
        id: 1,
        name: 'Курячий бульйон',
        weight: 365,
        price: 99,
        image: chikBul,
        description: 'Курячий бульйон, куряче філе, яйце, локшина і духмяні трави',
    },

    {
        id: 2,
        name: 'Рамен',
        weight: 350,
        price: 199,
        image: ramen,
        description: 'Класичний суп рамен з яєчною локшиною, пряною свинною грудинкою, маринованим яйцем та смаженим кунжутом',
    },

    {
        id: 3,
        name: 'Скандинавський суп із лососем',
        weight: 270,
        price: 229,
        image: skandLos,
        description: 'Вершковий суп із лососем, картоплею, цибулею, кропом і білим перцем. Подається з сирними брускетами iз лососем',
    },

    {
        id: 4,
        name: 'Борщ український',
        weight: 350,
        price: 99,
        image: boUa,
        description: 'Бульйон курячий, куряче фiле sous-vide, картопля, морква, буряк, цибуля, капуста, томатна паста, петрушка. Подається зі сметаною та чорним хлібом з часниковим соусом',
    },

    {
        id: 5,
        name: 'Сирний суп',
        weight: 315,
        price: 199,
        image: chikSoup,
        description: 'Сирний крем-суп з дор блю, вершковим сиром, беконом. Подається з сирною брускетою',
    },

    {
        id: 6,
        name: 'Том-ям з морепродуктами',
        weight: 300,
        price: 249,
        image: tomYam,
        description: 'пряний кокосовий суп з креветками, мідіями, кальмаром, пастою том ям, часником, печерицями, лаймом, кінзою, перцем чилі',
    },

]
export default soups;