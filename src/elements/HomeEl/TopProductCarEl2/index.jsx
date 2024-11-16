
"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "antd";

const products = [
  {
    title: "Grocery",
    href: "/grocery-supermart-store",
    gradient: "from-green-400 to-green-600",
    imageSrc: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
  },
  {
    title: "Mobiles",
    href: "/mobile-phones-store",
    gradient: "from-blue-400 to-blue-600",
    imageSrc: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    title: "Fashion",
    href: "/fashion-store",
    gradient: "from-purple-400 to-purple-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    title: "Electronics",
    href: "/electronics-store",
    gradient: "from-yellow-400 to-yellow-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6f9a66d5db3d2f92.png?q=100",
  },
  {
    title: "Beauty",
    href: "/beauty-personal-care",
    gradient: "from-pink-400 to-pink-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6976fe557c3aaf6b.png?q=100",
  },
  {
    title: "Home & Furniture",
    href: "/home-furniture-store",
    gradient: "from-teal-400 to-teal-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/12a6e8e3eae6f846.png?q=100",
  },
  {
    title: "Sports",
    href: "/sports-outdoors-store",
    gradient: "from-orange-400 to-orange-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/cc11fa6c211d7b64.png?q=100",
  },
  {
    title: "Toys",
    href: "/toys-games-store",
    gradient: "from-indigo-400 to-indigo-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/74b013afc59d839d.png?q=100",
  },
  {
    title: "Books",
    href: "/books-store",
    gradient: "from-gray-400 to-gray-600",
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/7ed7f097a3a5e393.png?q=100",
  },
];

const TopProductCarEl2 = () => {
  return (
    <div
      className="bg-white p-1 rounded-lg shadow-xl"
      style={{
        order: 1,
        height: "calc(100% - 16px)",
        zIndex: 10,
      }}
    >
      <Carousel
        autoplay
        dots={false}
        infinite
        speed={400}
        slidesToShow={5}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Link href={product.href}>
              <div
                className={`flex flex-col items-center bg-gradient-to-r ${product.gradient} p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out`}
              >
                <div className="w-16 h-16 mb-3">
                  <Image
                    className="rounded-lg"
                    alt={product.title}
                    src={product.imageSrc}
                    width={64}
                    height={64}
                  />
                </div>
                <span className="font-semibold text-white text-lg">
                  {product.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopProductCarEl2;
