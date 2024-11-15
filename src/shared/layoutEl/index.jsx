'use client'

import { Footer } from "../footerEl"
import Navbar2El from "../Navbar2El"

import React from "react"


export const LayoutEl = ({ children }) => {
    return (
        <>
            <Navbar2El/>
            {children}
            <Footer />
        </>
    )
}