'use client';

import React, { useState } from "react";
import { LayoutEl } from "@/shared/layoutEl";
import ImageUpload from "@/elements/uploadImageEl";
export const AddProduct = () => {
    const [productData, setProductData] = useState({
        images: [],
        name: '',
        description: '',
        discount: '',
        quantity: '',
        category: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageUpload = (newFileList) => {
        setProductData((prevData) => ({ ...prevData, images: newFileList }));
    };

    return (
        <LayoutEl>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Add New Product</h1>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Image Upload Component */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center">
                        <label className="text-lg font-medium mb-2">Product Images</label>
                        <ImageUpload onUpload={handleImageUpload} />
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col">
                        <label className="text-lg font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                            placeholder="Enter product name"
                        />
                    </div>

                    {/* Description Input */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-lg font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={productData.description}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1 h-24"
                            placeholder="Enter product description"
                        />
                    </div>

                    {/* Discount Input */}
                    <div className="flex flex-col">
                        <label className="text-lg font-medium mb-1">Discount (%)</label>
                        <input
                            type="number"
                            name="discount"
                            value={productData.discount}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                            placeholder="Enter discount percentage"
                        />
                    </div>

                    {/* Quantity Input */}
                    <div className="flex flex-col">
                        <label className="text-lg font-medium mb-1">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                            placeholder="Enter available quantity"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-lg font-medium mb-1">Category</label>
                        <select
                            name="category"
                            value={productData.category}
                            onChange={handleInputChange}
                            className="border rounded px-2 py-1"
                        >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="furniture">Furniture</option>
                            <option value="toys">Toys</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </LayoutEl>
    );
};

export default AddProduct;
