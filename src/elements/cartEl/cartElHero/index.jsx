'use client';

import { useEffect, useState } from "react";
import { Card, Col, Row, InputNumber } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'

const CartElHero = () => {
    // Dummy cart items data
    const dummyData = [
        {
            id: 1,
            name: "Wireless Headphones with Extra Long Name for Testing",
            description: "Noise-cancelling wireless headphones with superior sound quality, long-lasting battery, and comfortable design.",
            discount: 99.99,
            quantity: 1,
            category: "electronics",
            images: ["https://via.placeholder.com/150"]
        },
        {
            id: 2,
            name: "Smartphone Case",
            description: "Durable and stylish case for smartphones.",
            discount: 19.99,
            quantity: 2,
            category: "accessories",
            images: ["https://via.placeholder.com/150"]
        }
    ];

    const [cartItems, setCartItems] = useState(dummyData);
    const [totalPrice, setTotalPrice] = useState(0);
    const router = useRouter();

    // Function to calculate total price
    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => {
            return acc + (item.discount * item.quantity);
        }, 0);
        setTotalPrice(total);
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
        toast.success('Item removed from cart');
    };

    const handleQuantityChange = (id, value) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                item.quantity = value;
            }
            return item;
        });
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const handleCheckout = () => {
        router.push('/checkout');
    };

    useEffect(() => {
        calculateTotal(cartItems);
    }, [cartItems]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h1>

            {cartItems.length > 0 ? (
                <div>
                    <Row gutter={16}>
                        {cartItems.map((item) => (
                            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                                <Card
                                    hoverable
                                    cover={<img alt={item.name} src={item.images[0]} className="object-contain h-40 w-full" />}
                                    actions={[
                                        <button
                                            type="link"
                                            icon={<DeleteOutlined />}
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-500 hover:text-red-700 font-semibold "
                                        >
                                            Remove
                                        </button>
                                    ]}
                                    className="shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full"
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold truncate">{item.name}</h3>
                                        <p className="text-gray-600 text-sm truncate">{item.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-lg font-bold">Price: ${item.discount}</p>
                                        <InputNumber
                                            min={1}
                                            value={item.quantity}
                                            onChange={(value) => handleQuantityChange(item.id, value || 1)}
                                            className="w-24"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">Total: ${item.discount * item.quantity}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="mt-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">Total Price: ${totalPrice}</h2>
                            <p className="text-sm text-gray-600">Taxes and shipping will be calculated at checkout.</p>
                        </div>
                        <button
                            type="primary"
                            className="mt-4 w-full sm:w-auto bg-gradient-to-r from-[#FF4500] to-[#FF6347] text-white font-bold py-3 px-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                            size="large"
                            onClick={handleCheckout}
                            disabled={cartItems.length === 0}
                            icon={<i className="fas fa-credit-card" />}
                        >
                            Proceed to Checkout
                        </button>

                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <p>Your cart is empty.</p>
                    <button type="primary" onClick={() => router.push('/addProduct')} size="large">
                        Go to Products
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartElHero;
