import { useState } from "react";
import { LeftOutlined, RightOutlined, StarFilled } from "@ant-design/icons";

export const NewProductListEl2 = ({ dummyProducts = [], tittle = "" }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container mx-auto w-full flex flex-col gap-8 mt-10 p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl">
            {/* Title Section */}
            <div className="w-full flex items-center justify-center">
                <h2 className="font-extrabold text-5xl text-purple-700">{tittle}</h2>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentPage - 1) * 100}%)`,
                    }}
                >
                    {dummyProducts.map((product) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-2"
                        >
                            <div className="group bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-transform duration-700 transform hover:scale-105">
                                <div className="relative w-full h-56 overflow-hidden rounded-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        height={700}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 left-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                        <StarFilled className="text-white" /> 4.5
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-700">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-2">
                                        <span className="line-through text-gray-400">
                                            ₹{product.discountPrice}
                                        </span>
                                        <span className="font-bold text-purple-700 ml-2">
                                            ₹{product.price}
                                        </span>
                                    </p>
                                    <button className="mt-4 px-5 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-transform duration-700 ease-in-out">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {currentPage > 1 && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-transform duration-700 ease-in-out"
                    >
                        <LeftOutlined style={{ fontSize: "20px" }} />
                    </button>
                )}
                {currentPage < totalPages && (
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-transform duration-700 ease-in-out"
                    >
                        <RightOutlined style={{ fontSize: "20px" }} />
                    </button>
                )}
            </div>
        </div>
    );
};




