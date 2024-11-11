import { ProductCardEl } from "@/elements/productCardEl";
import { BackwardOutlined, ForwardOutlined } from "@ant-design/icons";
import { useRef } from "react";

const dummyProducts = [
    { id: 1, name: 'Men’s Shirt', price: 500, discountPrice: 1000, image: 'https://example.com/original-shirts/mens-shirt.jpg' },
    { id: 2, name: 'Women’s Dress', price: 1200, discountPrice: 1500, image: 'https://example.com/original-dresses/womens-dress.jpg' },
    { id: 3, name: 'Sneakers', price: 800, discountPrice: 1200, image: 'https://example.com/original-shoes/sneakers.jpg' },
    { id: 4, name: 'Casual T-Shirt', price: 300, discountPrice: 600, image: 'https://example.com/original-shirts/casual-tshirt.jpg' },
    { id: 5, name: 'Jeans', price: 900, discountPrice: 1300, image: 'https://example.com/original-pants/jeans.jpg' },
    { id: 6, name: 'Formal Blazer', price: 2500, discountPrice: 3000, image: 'https://example.com/original-jackets/formal-blazer.jpg' },
    { id: 7, name: 'Shorts', price: 400, discountPrice: 800, image: 'https://example.com/original-pants/shorts.jpg' },
    { id: 8, name: 'Winter Jacket', price: 1500, discountPrice: 2000, image: 'https://example.com/original-jackets/winter-jacket.jpg' },
    { id: 9, name: 'Skirt', price: 700, discountPrice: 1000, image: 'https://example.com/original-dresses/skirt.jpg' },
    { id: 10, name: 'Sandals', price: 500, discountPrice: 700, image: 'https://example.com/original-shoes/sandals.jpg' }
];

export const NewProductListEl = () => {
    const scrollContainerRef = useRef(null);
    console.log(scrollContainerRef);



    const handleForwardBtn = () => {
        const scrollAmount = scrollContainerRef.current.clientWidth;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleBackBtn = () => {
        const scrollAmount = scrollContainerRef.current.clientWidth;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto w-full flex flex-col gap-3 mt-7 p-2 relative">
            <div className="w-full flex items-center justify-start">
                <p className="font-bold text-3xl">New Arrival</p>
            </div>
            <div
                ref={scrollContainerRef}
                className="overflow-x-scroll overflow-y-hidden grid grid-flow-col auto-cols-max gap-2 w-full scrollbar-hide"
            >
                {dummyProducts.map(product => (
                    <ProductCardEl
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        discountPrice={product.discountPrice}
                        image={product.image}
                    />
                ))}
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] left-0 right-0 w-full hidden sm:block">
                <div className="flex w-full text-3xl justify-between px-4">
                    <div onClick={handleBackBtn} className="px-2 py-4 flex items-center justify-center rounded-sm bg-slate-300 cursor-pointer active:scale-95">
                        <BackwardOutlined />
                    </div>
                    <div onClick={handleForwardBtn} className="px-2 py-4 flex items-center justify-center rounded-sm bg-slate-300 cursor-pointer active:scale-95">
                        <ForwardOutlined />
                    </div>
                </div>
            </div>
        </div>
    );
};
