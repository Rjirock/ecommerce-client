'use client';

import React, { useState } from "react";
import { LayoutEl } from "@/shared/layoutEl";
import ImageUpload from "@/elements/addProductEl/uploadImageEl";
import toast from "react-hot-toast";
import AddProductHero from "@/elements/addProductEl/addProductHeroEl";

export const AddProduct = () => {


    return (
        <LayoutEl>
            <AddProductHero />
        </LayoutEl>
    );
};

export default AddProduct;
