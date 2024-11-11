'use client'

import {
    CloseOutlined,
    HomeOutlined,
    MenuOutlined,
    SearchOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useClickAway } from "@uidotdev/usehooks";
import logo from '../../Assets/logo.png';
import { useRouter } from "next/navigation";
import { Tabs } from "antd";

export const Navbar = () => {
    const user = { name: 'John', role: 'admin' };
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const [isClient, setIsClient] = useState(false);
    const router = useRouter()


    useEffect(() => {
        setIsClient(true);
    }, []);

    const isNavLinkActive = (pathName) =>
        isClient && path.includes(pathName);

    const handleHamburgerClick = () => setIsOpen(!isOpen);

    const tabItems = [
        { key: 'home', label: 'Home', icon: <HomeOutlined />, route: '/' },
        { key: 'shop', label: 'Shop', icon: <ShopOutlined />, route: '/shop' },
        { key: 'cart', label: 'Cart', icon: <ShoppingCartOutlined />, route: '/cart' },
        { key: 'profile', label: 'Profile', icon: <UserOutlined />, route: '/profile' }
    ];

    const ref = useClickAway(() => setIsOpen(false));

    return (
        <div className="w-full sticky top-0 z-30 flex items-center p-4 justify-between bg-pink-100">
            {/* Desktop Navbar */}
            <div>
                <ul className="gap-2 hidden sm:flex">
                    <li
                        className={`cursor-pointer hover:underline ${isNavLinkActive('home') ? 'underline font-bold' : ''}`}
                        onClick={() => router.replace('/')}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer hover:underline ${isNavLinkActive('shop') ? 'underline font-bold' : ''}`}
                        onClick={() => router.replace('/shop')}
                    >
                        Shop
                    </li>
                    <li
                        className={`cursor-pointer hover:underline ${isNavLinkActive('about') ? 'underline font-bold' : ''}`}
                        onClick={() => router.replace('/about')}
                    >
                        About
                    </li>
                </ul>
            </div>

            {/* Mobile Sidebar */}
            <div
                ref={ref}
                className={`fixed top-0 z-40 h-screen max-w-screen w-[300px] bg-pink-100 text-black transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-[-10%]' : '-translate-x-[150%]'
                    } sm:hidden`}
            >
                <ul className="gap-4 flex flex-col justify-center items-center w-full mt-[70px] p-2">
                    <li className="cursor-pointer hover:underline">Home</li>
                    <Separator />
                    <li className="cursor-pointer hover:underline">Shop</li>
                    <Separator />
                    <li className="cursor-pointer hover:underline">About</li>
                    <Separator />
                </ul>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div onClick={handleHamburgerClick} className="text-2xl sm:hidden absolute left-3 top-3 z-50">
                {isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </div>

            {/* Logo */}
            <div className="relative h-[30px] w-[75px] bg-cover">
                <img className="absolute top-[-15px] left-0 w-[60px]" src={logo.src} alt="Logo" />
            </div>

            {/* User Section */}
            <div>
                {user ? (
                    <div className="flex gap-2 text-2xl">
                        <SearchOutlined />
                        <ShoppingCartOutlined />
                        <UserOutlined />
                    </div>
                ) : (
                    <ul className="flex gap-2">
                        <li className="cursor-pointer">Login</li>
                        <li className="cursor-pointer">Register</li>
                    </ul>
                )}
            </div>


            <div className="fixed bottom-0 left-0 right-0 z-30 w-full py-1 bg-yellow-200 shadow-lg sm:hidden">
                <div className="flex justify-between px-4">
                    {tabItems.map((item) => (
                        <div
                            key={item.key}
                            className={`flex flex-col items-center justify-center text-gray-600 cursor-pointer ${path.includes(item.route) ? 'text-black' : ''}`}
                            onClick={() => router.replace(item.route)}
                        >
                            <div className="text-xl">{item.icon}</div>
                            <span className="text-xs">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};
