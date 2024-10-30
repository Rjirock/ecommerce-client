'use client'

import { Footer } from "../footerEl"
import { Navbar } from "../navberEl"
import React from "react"


export const LayoutEl = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}