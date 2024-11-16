

import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'antd'; 

const ProductCarousel = () => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-xl"
      style={{
        order: 1,
        height: 'calc(100% - 16px)',
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
        
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/grocery-supermart-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-lg shadow-lg hover:bg-green-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Grocery"
                //   src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Grocery</span>
            </div>
          </Link>
        </div>

      
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/mobile-phones-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-lg shadow-lg hover:bg-blue-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Mobiles"
                //   src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Mobiles</span>
            </div>
          </Link>
        </div>

       
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/fashion-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-lg shadow-lg hover:bg-purple-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Fashion"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=/00"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Fashion</span>
            </div>
          </Link>
        </div>

        {/* Electronics Link */}
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/electronics-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Electronics"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6f9a66d5db3d2f92.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Electronics</span>
            </div>
          </Link>
        </div>

        {/* Beauty & Personal Care Link */}
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/beauty-personal-care">
            <div className="flex flex-col items-center bg-gradient-to-r from-pink-400 to-pink-600 p-4 rounded-lg shadow-lg hover:bg-pink-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Beauty"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/6976fe557c3aaf6b.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Beauty</span>
            </div>
          </Link>
        </div>

        {/* Home & Furniture Link */}
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/home-furniture-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-teal-400 to-teal-600 p-4 rounded-lg shadow-lg hover:bg-teal-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Home & Furniture"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/12a6e8e3eae6f846.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Home & Furniture</span>
            </div>
          </Link>
        </div>

        {/* Sports & Outdoors Link */}
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/sports-outdoors-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 to-orange-600 p-4 rounded-lg shadow-lg hover:bg-orange-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Sports"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/cc11fa6c211d7b64.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Sports</span>
            </div>
          </Link>
        </div>

        {/* Toys & Games Link */}
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/toys-games-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-indigo-400 to-indigo-600 p-4 rounded-lg shadow-lg hover:bg-indigo-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Toys"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/74b013afc59d839d.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Toys</span>
            </div>
          </Link>
        </div>

        {/* Books Link */}
        <div className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/books-store">
            <div className="flex flex-col items-center bg-gradient-to-r from-gray-400 to-gray-600 p-4 rounded-lg shadow-lg hover:bg-gray-500 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 mb-3">
                <Image
                  className="rounded-lg"
                  alt="Books"
                //   src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/7ed7f097a3a5e393.png?q=100"
                  width={64}
                  height={64}
                />
              </div>
              <span className="font-semibold text-white text-lg">Books</span>
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;


