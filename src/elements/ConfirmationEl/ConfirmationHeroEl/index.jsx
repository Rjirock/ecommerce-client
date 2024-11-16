'use client';
import { useState } from 'react';
import { Card, Button } from 'antd';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// Demo data for the confirmation page
const cartItems = [
    { id: 1, name: 'Product 1', price: 500 },
    { id: 2, name: 'Product 2', price: 1000 },
];

const OrderConfirmationPage = () => {
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const router = useRouter();

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    const handlePayment = () => {
        setPaymentConfirmed(true);
        toast.success("Payment successful! Your order is now confirmed.");
        // Redirect to order placed page or show success
        router.push("/order-placed");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Confirmation</h2>

            <Card title="Order Summary" bordered className="rounded-lg shadow-md">
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between mb-2">
                            <p>{item.name}</p>
                            <p>₹{item.price}</p>
                        </div>
                    ))}
                    <div className="flex justify-between font-semibold mt-4">
                        <p>Total:</p>
                        <p>₹{totalAmount}</p>
                    </div>
                </div>
            </Card>

            <div className="flex justify-center mt-8">
                <Button
                    type="primary"
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg"
                    size="large"
                    onClick={handlePayment}
                    disabled={paymentConfirmed}
                >
                    {paymentConfirmed ? "Order Confirmed" : "Confirm Payment"}
                </Button>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
