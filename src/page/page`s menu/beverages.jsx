import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import beveragess from '../../masiv/beveragesData.jsx';
import {useCart} from "../CartContext.jsx";
import PropTypes from "prop-types";
import '/src/styles/page`s menu.scss';
import {useState} from "react";

function BeveragesCard({ beverage }) {
    const { addToCart } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        // Здесь вы можете определить логику выбора топпингов, если они доступны для напитка
        const selectedToppings = []; // Пример, замените этот массив на свою логику
        addToCart(beverage, selectedToppings, 'beverages');
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 2000); // Сбросить статус "Добавлено" через 2 секунды
    };

    const calculateTotalPrice = () => {
        return beverage.price;
    };

    const formatDescription = (description) => {
        const maxLineLength = 45;
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
                    src={beverage.image}
                    className="object-cover"
                    style={{
                        width: '100%',
                        height: '450px',
                        objectFit: 'cover',
                        background: '#DCDCDC',
                    }}
                />
                <Card.Header>
                    <Card.Title>
                        {beverage.name} ({beverage.weight}мл)
                    </Card.Title>
                </Card.Header>
                <Card.Text
                    style={{
                        overflowWrap: 'break-word',
                        padding: '10px',
                        height: '100px',
                    }}
                >
                    {formatDescription(beverage.description)
                        .split('\n')
                        .map((line, index) => (
                            <div
                                key={index}
                                style={{
                                    display: index < 2 ? 'block' : 'none',
                                    opacity: index === 2 ? 0.5 : 1,
                                }}
                            >
                                {line}
                            </div>
                        ))}
                </Card.Text>
                <Card.Body style={{ width: '100%', height: '100px' }}></Card.Body>
                <Card.Body>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'right' }}>
                        {calculateTotalPrice()} грн
                    </Card.Text>
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

BeveragesCard.propTypes = {
    beverage: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

function Beverages() {
    const { addToCart } = useCart();
    return (
        <>
            <h1>Піци</h1>
            <Container className="mt-2">
                <Row xs={1} md={2} lg={3} className="g-2">
                    {beveragess.map((beverage) => (
                        <BeveragesCard key={beverage.id} beverage={beverage} addToCart={addToCart} />
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Beverages;
