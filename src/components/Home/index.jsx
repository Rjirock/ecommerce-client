'use client '

import { BookPanditNavigateBtn } from "@/elements/bookPanditNavigateEl"
import CarouselEl from "@/elements/HomeEl/CarouselEl"
import { FeturedProductEl } from "@/elements/HomeEl/featuredProductEl"
import HelpChatEl from "@/elements/HomeEl/HelpChatEl"
import { HomeInfoEl } from "@/elements/HomeEl/homeInfoEl"
import { NewProductListEl } from "@/elements/HomeEl/newProductEl"
import { PromotionalBannerEl } from "@/elements/HomeEl/PromotionalBannerEl"
import TestimonialsPageEl from "@/elements/HomeEl/TestimonialEl"
import TopProductCarEl2 from "@/elements/HomeEl/TopProductCarEl2"
import TopProductCarrousel from "@/elements/HomeEl/TopProductCarousel"

export const Home = () => {
    return (
        <>
            <CarouselEl />
            {/* <HomeInfoEl /> */}
            {/* <TopProductCarEl2/> */}
            <TopProductCarrousel />

            <NewProductListEl />
            <FeturedProductEl />
            <PromotionalBannerEl />
            <TestimonialsPageEl />
            <HelpChatEl />
            <BookPanditNavigateBtn />
        </>
    )
}