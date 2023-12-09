import PizzaTom from '../img`s/page-pizza/pizza-Tom.jpg';
import PizzaFrutti from '../img`s/page-pizza/pizza-Frutti.jpg';
import PizzaBBQ from '../img`s/page-pizza/pizza-BBQ.jpg';
import PizzaBBQmetr from '../img`s/page-pizza/pizza-BBQ-metr.jpg';
import PizzaCarbonara from '../img`s/page-pizza/pizza-carbonara.jpg';
import PizzaFourChi from '../img`s/page-pizza/pizza-four-chi.jpg';
import PizzaMafia from '../img`s/page-pizza/pizza-Mafia.jpg';
import PizzaMargarita from '../img`s/page-pizza/pizza-margarita.jpg';
import PizzaMetr from '../img`s/page-pizza/pizza-metr.jpg';
import PizzaMetrCarbonara from '../img`s/page-pizza/pizza-metr-carbonara.jpg';
import PizzaPeperoni from '../img`s/page-pizza/pizza-peperoni.jpg';
import PizzaPolo from '../img`s/page-pizza/pizza-Polo.jpg';
import PizzaPoloMetr from '../img`s/page-pizza/pizza-polo-metr.jpg';
import PizzaSuper from '../img`s/page-pizza/pizza-super.jpg';
import PizzaSuperMetr from '../img`s/page-pizza/pizza-super-metr.jpg';

// pizzaData.jsx
const pizzas = [
    {
        id: 1,
        name: 'Піца Том Ям',
        weight: 490,
        price: 349,
        image: PizzaTom,
        description: 'Пікантно-гостра піца з тигровими креветками, м`ясом мідій, кальмаром, часником, перцем чилі, та ' +
            'томатами черрі',
        toppings: [
            { id: 15001, name: 'Соус барбекю', price: 24 },
            { id: 15002, name: 'Соус сирний', price: 39 },
            { id: 15003, name: 'Сирний бортик до середньої піци', price: 29 },
        ],
    },

    {
        id: 2,
        name: 'Піца Фрутті де Маре',
        weight: 460,
        price: 329,
        image: PizzaFrutti,
        description: 'Вершково-сирна піца з тигровими креветками, м`ясом, мідій, кальмаром, сиром моцарела, орегано та томатами черрі',
        toppings: [
            { id: 15004, name: 'Соус барбекю', price: 24 },
            { id: 15005, name: 'Соус сирний', price: 39 },
            { id: 15006, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 3,
        name: 'Піца Мафія',
        weight: 570,
        price: 399,
        image: PizzaMafia,
        description: 'Карбонара: шинка, грудинка, сир пармезан, печериці, томати чері та вершки ясна Гурмео: філе куряче sous-vide, ' +
            'шинка, ковбаски мисливські, пепероні, печериці, цибуля, петрушка та соус BBQ Чотири сири: сир дор блю, сир чеддер, сир пармезан,' +
            ' груша, горіх волоський та вершковий соус Сирний бортик: сир Філадельфія, сир моцарелла Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 15007, name: 'Соус барбекю', price: 24 },
            { id: 15008, name: 'Соус сирний', price: 39 },
        ],
    },

    {
        id: 4,
        name: 'Піца Мафія метрова',
        weight: 1340,
        price: 659,
        image: PizzaMetr,
        description: 'Карбонара: шинка, грудинка, сир пармезан, печериці, томати чері та вершки М\'ясна Гурмео: філе куряче sous-vide, шинка, ковбаски мисливські, пепероні, печериці, цибуля, петрушка та соус BBQ Чотири сири: сир дор блю, сир чеддер, сир пармезан, груша, горіх волоський та вершковий соус Сирний бортик: сир Філадельфія, сир моцарелла Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 15009, name: 'Соус барбекю', price: 24 },
            { id: 150010, name: 'Соус сирний', price: 39 },
        ],
    },

    {
        id: 5,
        name: 'Піца Поло',
        weight: 550,
        price: 309,
        image: PizzaPolo,
        description: 'Філе куряче sous-vide, перець болгарський, сир моцарела, ананас, часник, соус маринара, соус BBQ Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150011, name: 'Соус барбекю', price: 24 },
            { id: 150012, name: 'Соус сирний', price: 39 },
            { id: 150013, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 6,
        name: 'Піца Карбонара',
        weight: 550,
        price: 329,
        image: PizzaCarbonara,
        description: 'Сир моцарела, шинка, грудинка, печериці, пармезан, томати чері та трюфельна олія Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150014, name: 'Соус барбекю', price: 24 },
            { id: 150015, name: 'Соус сирний', price: 39 },
            { id: 150016, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 7,
        name: 'Піца Маргарита',
        weight: 445,
        price: 239,
        image: PizzaMargarita,
        description: 'Соус маринара, помідори, сир моцарела, соус часниковий. Сирний соус в ПОДАРУНОК',
        toppings: [
            { id: 150017, name: 'Соус барбекю', price: 24 },
            { id: 150018, name: 'Соус сирний', price: 39 },
            { id: 150019, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 8,
        name: 'Піца Пепероні new',
        weight: 520,
        price: 339,
        image: PizzaPeperoni,
        description: 'Пепероні, сир моцарела, сир пармезан, болгарський перець, чебрець, соус маринара Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150020, name: 'Соус барбекю', price: 24 },
            { id: 150021, name: 'Соус сирний', price: 39 },
            { id: 150022, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 9,
        name: 'Піца Супер м`ясна',
        weight: 580,
        price: 349,
        image: PizzaSuper,
        description: 'Філе куряче sous-vide, шинка, мисливські ковбаски, пепероні, сир моцарела, печериці, цибуля ріпчаста, петрушка, соус BBQ та трюфельна олія Сирний соус у ПОДАРУНОК',
        toppings: [
            { id: 150023, name: 'Соус барбекю', price: 24 },
            { id: 150024, name: 'Соус сирний', price: 39 },
            { id: 150025, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 10,
        name: 'Піца BBQ',
        weight: 580,
        price: 329,
        image: PizzaBBQ,
        description: 'Філе куряче sous-vide, мисливськи ковбаски, пепероні, сир моцарела, кукурудза, гірчица, цибулевий конфітюр, соуси маринара та BBQ Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150026, name: 'Соус барбекю', price: 24 },
            { id: 150027, name: 'Соус сирний', price: 39 },
            { id: 150028, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 11,
        name: 'Піца Чотири сири',
        weight: 430,
        price: 299,
        image: PizzaFourChi,
        description: 'Сир дор блю, сир чеддер, сир пармезан, сир моцарела, груша, горіх волоський, вершковий соус та трюфельна олія Сирний соус в ПОДАРУНОК',
        toppings: [
            { id: 150029, name: 'Соус барбекю', price: 24 },
            { id: 150030, name: 'Соус сирний', price: 39 },
            { id: 150031, name: 'Сирний бортик до середньої піци', price: 29 }
        ],
    },

    {
        id: 12,
        name: 'Піца Супер м`ясна метрова',
        weight: 1300,
        price: 699,
        image: PizzaSuperMetr,
        description: 'Філе куряче sous-vide, шинка, мисливські ковбаски, пепероні, сир моцарела, печериці, цибуля ріпчаста, петрушка, соус BBQ та трюфельна олія Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150032, name: 'Соус барбекю', price: 24 },
            { id: 150033, name: 'Соус сирний', price: 39 },
            { id: 150034, name: 'Сирний бортик до метрової піци', price: 65 }
        ],
    },

    {
        id: 13,
        name: 'Піца Карбонара метрова',
        weight: 1200,
        price: 659,
        image: PizzaMetrCarbonara,
        description: 'Шинка, грудинка,сири пармезан та моцарела, томати черрі, печериці, трюфельна олія Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150035, name: 'Соус барбекю', price: 24 },
            { id: 150036, name: 'Соус сирний', price: 39 },
            { id: 150037, name: 'Сирний бортик до метрової піци', price: 65 }
        ],
    },

    {
        id: 14,
        name: 'Піца Поло метрова',
        weight: 1350,
        price: 689,
        image: PizzaPoloMetr,
        description: 'Філе куряче sous-vide, перець болгарський, сир моцарела, ананас, часник, соус маринара, соус BBQ Сирний соус в ПОДАРУНОК!',
        toppings: [
            { id: 150038, name: 'Соус барбекю', price: 24 },
            { id: 150039, name: 'Соус сирний', price: 39 },
            { id: 150040, name: 'Сирний бортик до метрової піци', price: 65 }
        ],
    },

    {
        id: 15,
        name: 'Піца BBQ метрова',
        weight: 1265,
        price: 659,
        image: PizzaBBQmetr,
        description: 'філе куряче sous-vide, мисливськи ковбаски, пепероні, сир моцарела, кукурудза, гірчица, цибуля конфітюр, соуси маринара та BBQ',
        toppings: [
            { id: 150041, name: 'Соус барбекю', price: 24 },
            { id: 150042, name: 'Соус сирний', price: 39 },
            { id: 150043, name: 'Сирний бортик до метрової піци', price: 65 }
        ],
    },
];

export default pizzas;
