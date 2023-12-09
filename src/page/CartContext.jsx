import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, selectedToppings, pageId) => {
        const toppingsTotalPrice = selectedToppings.reduce((total, toppingId) => {
            const selectedTopping = item.toppings.find((topping) => topping.id === toppingId);
            return total + selectedTopping.price;
        }, 0);

        setCartItems((prevItems) => {
            const existingCartItemIndex = prevItems.findIndex(
                (cartItem) =>
                    cartItem.id === item.id &&
                    cartItem.pageId === pageId &&
                    cartItem.selectedToppings.length === selectedToppings.length &&
                    cartItem.selectedToppings.every(
                        (topping, index) => topping === selectedToppings[index]
                    )
            );

            if (existingCartItemIndex !== -1) {
                const updatedCartItems = [...prevItems];
                updatedCartItems[existingCartItemIndex].quantity += 1;
                return updatedCartItems;
            } else {
                return [
                    ...prevItems,
                    {
                        ...item,
                        selectedToppings,
                        toppingsTotalPrice,
                        quantity: 1,
                        pageId,
                        isRemoved: false,
                    },
                ];
            }
        });
    };

    const value = {
        cartItems,
        addToCart,
        setCartItems,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
