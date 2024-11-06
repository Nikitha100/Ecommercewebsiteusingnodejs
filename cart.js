// pages/cart.js
import { useState, useEffect } from 'react';

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="border p-4 rounded mb-4">
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 mt-2"
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
