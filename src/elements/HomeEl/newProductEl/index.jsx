import { NewProductListEl2 } from "../newProductEl2";


const dummyProducts = [
    { id: 1, name: 'Men’s Shirt', price:500, discountPrice: 1000, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 2, name: 'Women’s Dress', price: 1200, discountPrice: 1500, image: './service.jpg' },
    { id: 3, name: 'Sneakers', price: 800, discountPrice: 1200, image: './service.jpg' },
    { id: 4, name: 'Casual T-Shirt', price: 300, discountPrice: 600, image: './service.jpg' },
    { id: 5, name: 'Jeans', price: 900, discountPrice: 1300, image: './service.jpg' },
    { id: 6, name: 'Formal Blazer', price: 2500, discountPrice: 3000, image: './service.jpg' },
    { id: 7, name: 'Shorts', price: 400, discountPrice: 800, image: './service.jpg' },
    { id: 8, name: 'Winter Jacket', price: 1500, discountPrice: 2000, image: 'service.jpg' },
    { id: 9, name: 'Skirt', price: 700, discountPrice: 1000, image: 'service.jpg' },
    { id: 10, name: 'Sandals', price: 500, discountPrice: 700, image: 'service.jpg' },
    { id: 11, name: 'Cap', price: 200, discountPrice: 500, image: 'service.jpg' },
    { id: 12, name: 'Sunglasses', price: 1000, discountPrice: 2000, image: 'service.jpg' },
];

export const NewProductListEl = () => (
    <div className=" container ml-auto mr-auto w-full flex flex-col gap-3 mt-7 p-2 " >
       <NewProductListEl2 dummyProducts={dummyProducts} tittle={'New products'} />

    </div>

);
