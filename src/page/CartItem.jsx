// CartItem.jsx
import { useState } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { useCart } from './CartContext';
import PropTypes from 'prop-types';

function CartItem({ item }) {
    // eslint-disable-next-line no-unused-vars
    const { cartItems, setCartItems } = useCart();
    const [quantity, setQuantity] = useState(item.quantity || 1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10000));
        updateCartItemQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
        updateCartItemQuantity(quantity - 1);
    };

    const updateCartItemQuantity = (newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === item.id && cartItem.pageId === item.pageId
                    ? { ...cartItem, quantity: newQuantity }
                    : cartItem
            )
        );
    };

    const removeItem = () => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (cartItem) => cartItem.id !== item.id || cartItem.pageId !== item.pageId
            )
        );
    };

    return (
        <Col xs={12} className="mb-3">
            <Card>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} md={3} className="text-center">
                        <Card.Img variant="top" src={item.image} />
                    </Col>
                    <Col xs={12} md={3}>
                        <Card.Body className="text-center">
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={2}>
                        <Card.Body className="text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <Button variant="outline-secondary" onClick={decreaseQuantity}>
                                    -
                                </Button>
                                <span className="mx-2">{quantity}</span>
                                <Button variant="outline-secondary" onClick={increaseQuantity}>
                                    +
                                </Button>
                            </div>
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card.Body className="text-center">
                            {item.selectedToppings && (
                                <ul>
                                    {item.selectedToppings.map((toppingId) => {
                                        const selectedTopping = item.toppings.find(
                                            (topping) => topping.id === toppingId
                                        );
                                        return (
                                            <li key={toppingId}>
                                                {selectedTopping.name} (+{selectedTopping.price} грн)
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={2}>
                        <Card.Body className="text-center">
                            <Card.Text>{(item.price + item.toppingsTotalPrice) * quantity} грн</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xs={12} md={2}>
                        <Card.Body className="text-center">
                            <Button variant="danger" onClick={removeItem}>
                                Удалить
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        pageId: PropTypes.string.isRequired, // Добавляем pageId
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number,
        selectedToppings: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
            })
        ),
    }).isRequired,
};

export default CartItem;
