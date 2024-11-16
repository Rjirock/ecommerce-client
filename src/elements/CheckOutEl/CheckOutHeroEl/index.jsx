'use client';
import { useState } from 'react';
import { Card, Col, Row, Radio, Button } from 'antd';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

// Demo addresses and cart data
const addresses = [
    {
        id: 1,
        name: "Aditya Nagwanshi",
        phone: "9876543210",
        street: "123 Main St",
        city: "Mumbai",
        postalCode: "400001",
        state: "Maharashtra",
    },
    {
        id: 2,
        name: "Krishna Patel",
        phone: "9876543211",
        street: "456 Side Lane",
        city: "Delhi",
        postalCode: "110001",
        state: "Delhi",
    },
];

const cartItems = [
    { id: 1, name: 'Product 1', price: 500 },
    { id: 2, name: 'Product 2', price: 1000 },
];

const CheckoutPage = () => {
    const [selectedAddress, setSelectedAddress] = useState(addresses[0]?.id || null);
    const router = useRouter();

    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    const handlePlaceOrder = () => {
        if (!selectedAddress) {
            toast.error("Please select an address to proceed.");
            return;
        }
        toast.success("Proceeding to order confirmation...");
        // Redirect to the order confirmation page
        router.push("/order-confirmation");
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

            <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                    <Card title="Select Shipping Address" bordered className="rounded-lg shadow-md">
                        <Radio.Group
                            onChange={(e) => setSelectedAddress(e.target.value)}
                            value={selectedAddress}
                            className="w-full"
                        >
                            {addresses.map((address) => (
                                <div key={address.id} className="border-b pb-4 mb-4">
                                    <Radio value={address.id} className="block mb-2">
                                        <p className="font-semibold">{address.name}</p>
                                        <p className="text-sm text-gray-600">{address.street}</p>
                                        <p className="text-sm text-gray-600">
                                            {address.city}, {address.state} - {address.postalCode}
                                        </p>
                                        <p className="text-sm text-gray-600">Phone: {address.phone}</p>
                                    </Radio>
                                </div>
                            ))}
                        </Radio.Group>
                        <Button
                            type="link"
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => router.push('/address')}
                        >
                            + Add New Address
                        </Button>
                    </Card>
                </Col>

                <Col xs={24} md={12}>
                    {/* Order Summary */}
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
                </Col>
            </Row>

            <div className="flex justify-center mt-8">
                <Button
                    type="primary"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg"
                    size="large"
                    onClick={handlePlaceOrder}
                >
                    Proceed to Confirmation
                </Button>
            </div>
        </div>
    );
};

export default CheckoutPage;
