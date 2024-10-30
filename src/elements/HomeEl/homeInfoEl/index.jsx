'use client';

import { CheckCircleOutlined, TruckOutlined, CustomerServiceOutlined, SecurityScanOutlined } from "@ant-design/icons";

export const HomeInfoEl = () => {
    return (
        <div className="w-full min-h-[90px] justify-center h-auto gap-3 p-3 flex flex-wrap bg-gray-100 rounded-md shadow-md">
            <div className="flex items-center gap-2">
                <CheckCircleOutlined className="text-green-500" />
                <p className="font-bold">100% Original Quality</p>
            </div>
            <div className="flex items-center gap-2">
                <TruckOutlined className="text-blue-500" />
                <p className="font-bold">Free Shipping on Orders Over $50</p>
            </div>
            <div className="flex items-center gap-2">
                <CustomerServiceOutlined className="text-orange-500" />
                <p className="font-bold">24/7 Customer Support</p>
            </div>
            <div className="flex items-center gap-2">
                <SecurityScanOutlined className="text-red-500" />
                <p className="font-bold">Secure Payment Options</p>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircleOutlined className="text-yellow-500" />
                <p className="font-bold">Satisfaction Guaranteed</p>
            </div>
        </div>
    );
};
