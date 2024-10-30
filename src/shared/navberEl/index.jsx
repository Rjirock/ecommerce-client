'use client';

import {
    CloseOutlined,
    MenuOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";  // Adjusted import
import { Separator } from "@/components/ui/separator";
import { useClickAway } from "@uidotdev/usehooks";
import logo from '../../Assets/logo.png';

export const Navbar = () => {
    const user = { name: 'John', role: 'admin' };
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();  // Get current pathname
    const [isClient, setIsClient] = useState(false);  // Track client-side rendering

    useEffect(() => {
        setIsClient(true);  // Ensure client-side rendering
    }, []);

    const isNavLinkActive = (pathName) =>
        isClient && path.includes(pathName);  // Check if the link is active

    const handleHamburgerClick = () => setIsOpen(!isOpen);

    const ref = useClickAway(() => setIsOpen(false));

    return (
        <div className="w-full sticky top-0 z-30 flex items-center p-4 justify-between bg-pink-100">
            {/* Desktop Navbar */}
            <div>
                <ul className="gap-2 hidden sm:flex">
                    <li
                        className={`cursor-pointer hover:underline ${isNavLinkActive('home') ? 'underline font-bold' : ''}`}
                        onClick={() => router.push('/home')}
                    >
                        Home
                    </li>
                    <li
                        className={`cursor-pointer hover:underline ${isNavLinkActive('shop') ? 'underline font-bold' : ''}`}
                        onClick={() => router.push('/shop')}
                    >
                        Shop
                    </li>
                    <li
                        className={`cursor-pointer hover:underline ${isNavLinkActive('about') ? 'underline font-bold' : ''}`}
                        onClick={() => router.push('/about')}
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
        </div>
    );
};
