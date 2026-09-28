import React from 'react';
import BookCard from '../homePage/BookCard';

const ListedBook = ({readBooks, wishList}) => {
    return (
        <div>
             <div className="tabs tabs-lift">

                {/* Read Books */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label="Read Books"
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {readBooks.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {readBooks.map((book) => (
                                <BookCard
                                    book={book}
                                    key={book.bookId}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                No Books
                            </h2>
                            <p className="text-gray-400 mt-2">
                                You haven't added any books yet.
                            </p>
                        </div>
                    )}

                </div>


                {/* Wishlist Books */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label="Wishlist Books"
                    defaultChecked
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {wishList.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {wishList.map((book) => (
                                <BookCard
                                    book={book}
                                    key={book.bookId}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                No Books
                            </h2>
                            <p className="text-gray-400 mt-2">
                                You haven't added any books to your wishlist yet.
                            </p>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default ListedBook;