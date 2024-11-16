'use client';

import { useState } from 'react';
import { Card, Button } from 'antd';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const OrderPlacedPage = () => {
    const router = useRouter();

    const handleReturnHome = () => {
        router.push('/'); // Navigate to the homepage
    };

    return (
        <div className="container mx-auto p-6">
            {/* Order Confirmation Banner */}
            <div className="bg-green-100 p-4 rounded-lg mb-8 text-center">
                <h2 className="text-3xl font-semibold text-green-600">Order Placed Successfully!</h2>
                <p className="text-lg text-green-600">Thank you for your purchase. Your order is being processed.</p>
            </div>

            {/* Order Summary */}
            <Card title="Order Summary" bordered className="rounded-lg shadow-md">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Order Details</h3>
                    <p>Order ID: <strong>#12345678</strong></p>
                    <p>Order Date: <strong>2024-11-15</strong></p>
                    <p>Payment Method: <strong>Credit Card</strong></p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold">Items Purchased</h3>
                    <div className="flex justify-between mb-2">
                        <p>Product 1</p>
                        <p>₹500</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p>Product 2</p>
                        <p>₹1000</p>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <p>Total</p>
                        <p>₹1500</p>
                    </div>
                </div>

                {/* Order Tracking and Support */}
                <div className="mt-4">
                    <p className="text-lg">You can track your order status in your <strong>Order History</strong>.</p>
                    <p className="text-sm text-gray-600">For any assistance, feel free to contact our support team at <strong>support@yourstore.com</strong>.</p>
                </div>
            </Card>

            {/* Return to Home Button */}
            <div className="flex justify-center mt-8">
                <Button
                    type="primary"
                    className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg"
                    size="large"
                    onClick={handleReturnHome}
                >
                    Return to Home
                </Button>
            </div>
        </div>
    );
};

export default OrderPlacedPage;
