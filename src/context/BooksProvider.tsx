"use client"
import React, { createContext, useState } from 'react';

export const BookContext = createContext({})

const BooksProvider = ({children}) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishlist] = useState([]);

    const shareData = {
        readBooks, setReadBooks, wishList, setWishlist
    }

    return (
        <BookContext.Provider value={shareData} > {children} </BookContext.Provider>
    );
};

export default BooksProvider;