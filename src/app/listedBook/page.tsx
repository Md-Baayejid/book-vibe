"use client";

import ListedBook from "@/components/share/ListedBook";
import { BookContext } from "@/context/BooksProvider";
import React, { useContext, useState } from "react";

const ListedBooks = () => {

    const { readBooks, wishList } = useContext(BookContext);

    const [sortBy, setSortBy] = useState("");

    const sortBooks = (books) => {
        return [...books].sort((a, b) => {

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            if (sortBy === "pages") {
                return b.totalPages - a.totalPages;
            }

            if (sortBy === "year") {
                return b.yearOfPublishing - a.yearOfPublishing;
            }

            return 0;
        });
    };

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishList = sortBooks(wishList);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <p className="font-bold text-4xl text-center m-5">
                Listed Books
            </p>

            {/* Sort By */}
            <div className="flex justify-center my-6">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select select-bordered bg-white"
                >
                    <option value="">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="pages">Number of Pages</option>
                    <option value="year">Publish Year</option>
                </select>
            </div>

            <ListedBook
                readBooks={sortedReadBooks}
                wishList={sortedWishList}
            />

        </div>
    );
};

export default ListedBooks;