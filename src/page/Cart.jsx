// Cart.jsx
import { Container, Row } from 'react-bootstrap';
import { useCart } from './CartContext';
import CartItem from './CartItem';

function Cart() {
    const { cartItems } = useCart();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.price * (item.quantity || 1); // Убедимся, что quantity есть и не является NaN
            return total + itemTotal;
        }, 0);
    };

    return (
        <>
                <h1>Корзина</h1>
                <h3 className="text-end">Сумма: {calculateTotalPrice()} грн</h3>
            <Container className="mt-2">
                <Row className="g-3">
                    {cartItems.map((item) => (
                        <CartItem key={`${item.pageId}-${item.id}`} item={item} />
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Cart;
