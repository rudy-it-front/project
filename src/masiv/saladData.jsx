import cesarChik from "../img`s/page-salad/cesarChik.jpg";
import cesarKrev from "../img`s/page-salad/cesarKrev.jpg";
import saladTel from "../img`s/page-salad/saladTel.jpg";
import saladGrek from "../img`s/page-salad/saladGrek.jpg";

const salads = [
    {
        id: 1,
        name: 'Цезар з куркою',
        weight: 275,
        price: 229,
        image: cesarChik,
        description: 'Куряче філе, хрусткий бекон, томати, мікс салатів, яйце, сир пармезан, ' +
            'крутони з зеленою олією та часником, соус цезар',
    },

    {
        id: 2,
        name: 'Цезар з креветками',
        weight: 275,
        price: 229,
        image: cesarKrev,
        description: 'Креветки, авокадо, томати, мікс салатів, яйце, сир Пармезан, крутони з ' +
            'зеленим маслом та часником, соус Цезар',
    },

    {
        id: 3,
        name: 'Салат з телятиною',
        weight: 205,
        price: 219,
        image: saladTel,
        description: 'Маринована телятина, запечені баклажани та солодкий перець, мікс салатів,' +
            'чері, арахіс, пряний соус',
    },

    {
        id: 4,
        name: 'Салат Грецький',
        weight: 245,
        price: 169,
        image: saladGrek,
        description: 'Томати, болгарський перець, огірки, сир Фета, оливки каламата, червона цибуля, мiкс салатiв з ' +
            'оливковою олiєю та соусом Бальзамiк',
    },

]

export default salads;