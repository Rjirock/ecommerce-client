'use client '

import CarouselEl from "@/elements/HomeEl/CarouselEl"
import { FeturedProductEl } from "@/elements/HomeEl/featuredProductEl"
import HelpChatEl from "@/elements/HomeEl/HelpChatEl"
import { HomeInfoEl } from "@/elements/HomeEl/homeInfoEl"
import { NewProductListEl } from "@/elements/HomeEl/newProductEl"
import { PromotionalBannerEl } from "@/elements/HomeEl/PromotionalBannerEl"
import TestimonialsPageEl from "@/elements/HomeEl/TestimonialEl"
import ProductCarousel from "@/elements/HomeEl/TopProductCarousel"


export const Home = () => {
    return (
        <>
            <CarouselEl />
            <ProductCarousel />
            <HomeInfoEl />
            <NewProductListEl />
            <FeturedProductEl />
            <PromotionalBannerEl />
            <TestimonialsPageEl />
            <HelpChatEl />
        </>
    )
}