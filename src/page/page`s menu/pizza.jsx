import { Button, Card, Col, Container, Row} from 'react-bootstrap';
import '/src/styles/page`s menu.scss';
import {useState} from "react";
import pizzas from "../../masiv/pizzaData.jsx";
import {useCart} from "../CartContext.jsx";
import PropTypes from 'prop-types';


function PizzaCard({ pizza }) {
    const { addToCart } = useCart();
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);

    const handleCheckboxChange = (toppingId) => {
        if (selectedToppings.includes(toppingId)) {
            setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
        } else {
            setSelectedToppings([...selectedToppings, toppingId]);
        }
    };

    const handleAddToCart = () => {
        addToCart(pizza, selectedToppings, 'pizza');
        setAddedToCart(true);
        setSelectedToppings([]);
        setTimeout(() => {
            setAddedToCart(false);
        }, 2000); // Сбросить статус "Добавлено" через 2 секунды
    };

    const calculateTotalPrice = () => {
        let totalPrice = pizza.price; // Начальная цена без топпингов

        selectedToppings.forEach((toppingId) => {
            const selectedTopping = pizza.toppings.find((topping) => topping.id === toppingId);
            totalPrice += selectedTopping.price;
        });

        return totalPrice;
    };

    const formatDescription = (description) => {
        const maxLineLength = 45; // Максимальная длина строки, после которой добавляется \n
        const words = description.split(' ');

        let currentLine = '';
        const formattedDescription = words.reduce((result, word, index) => {
            if (currentLine.length + word.length <= maxLineLength) {
                currentLine += `${word} `;
            } else {
                result.push(currentLine.trim());
                currentLine = `${word} `;
            }

            if (index === words.length - 1) {
                result.push(currentLine.trim());
            }

            return result;
        }, []);

        return formattedDescription.join('\n');
    };


    return (
        <Col xs="auto" className="d-flex mx-auto">
            <Card style={{ width: '25rem', height: '42rem' }} className="mx-2 my-2 my-card">
                <Card.Img
                    variant="top"
                    src={pizza.image}
                    className="object-cover"
                    style={{
                        width: '100%',
                        height: '230px',
                        objectFit: 'cover',
                        background: '#DCDCDC'
                    }}
                />
                <Card.Header>
                    <Card.Title>{pizza.name} ({pizza.weight}г)</Card.Title>
                </Card.Header>
                <Card.Text
                    style={{ overflowWrap: 'break-word',
                        padding: '10px',
                        height:"100px"}}>
                    {formatDescription(pizza.description).split('\n').map((line, index) => (
                        <div key={index} style={{ display: index < 2 ? 'block' : 'none', opacity: index === 1 ? 0.5 : 1 }}>
                            {line}
                        </div>
                    ))}
                </Card.Text>
                <Card.Body style={{width:'100%', height:'150px'}}>
                    <div>
                        {pizza.toppings &&
                            pizza.toppings.map((topping) => (
                                <div key={topping.id} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`topping-${topping.id}`}
                                        onChange={() => handleCheckboxChange(topping.id, topping.price)}
                                        checked={selectedToppings.includes(topping.id)}
                                    />
                                    <label className="form-check-label" htmlFor={`topping-${topping.id}`}>
                                        {topping.name} (+{topping.price} грн)
                                    </label>
                                </div>
                            ))}
                    </div>
                </Card.Body>
                <Card.Body>
                    <Card.Text style={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        textAlign: 'right' }}
                    >{calculateTotalPrice()} грн</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button
                        className="myBtnCard"
                        onClick={handleAddToCart}
                        disabled={addedToCart}
                    >
                        {addedToCart ? 'Добавлено' : 'В корзину'}
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

PizzaCard.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        toppings: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

function Pizza() {
    const { addToCart } = useCart();
    return (
        <>
            <h1>Піци</h1>
            <Container className="mt-2">
                <Row xs={1} md={2} lg={3} className="g-2">
                    {pizzas.map((pizza) => (
                        <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart}/>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Pizza;