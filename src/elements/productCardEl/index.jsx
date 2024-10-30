'use client';

import { ShoppingCartOutlined } from "@ant-design/icons";

export const ProductCardEl = ({ name, price, discountPrice, image }) => {
    return (
        <div className="relative w-[220px] h-[300px] border rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Product Image */}
            <div className="bg-cover w-full h-[60%] bg-gray-200 flex items-center justify-center">
                <img
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    src={image}
                    alt={name}
                />
            </div>

            {/* Product Details */}
            <div className="p-2 flex flex-col h-[40%]">
                <p className="font-semibold text-lg truncate">{name}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xl font-bold text-green-600">${price}</p>
                    <p className="text-sm text-red-500 line-through">${discountPrice}</p>
                </div>
                <p className="text-sm text-gray-600">{Math.round(((discountPrice - price) / discountPrice) * 100)}% off</p>
                <button className="mt-2 w-full py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300">
                    Buy Now
                </button>
            </div>

            {/* Shopping Cart Icon */}
            <div className="absolute active:scale[.95px] hover:scale-[1.2] top-2 right-2 bg-white rounded-full p-1 shadow">
                <ShoppingCartOutlined className="text-lg text-gray-700 " />
            </div>
        </div>
    );
};
