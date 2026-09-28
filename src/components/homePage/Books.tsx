import React from 'react';
import BookCard from './BookCard';

const getBook = async () => {
    const res = await fetch('http://localhost:3000//booksData.json')
    const data = await res.json()
    return data ;
}

const Books = async () => {

    const BookData = await getBook()

    console.log(BookData);

    return (
        <div className=' container mx-auto px-4 sm:px-6 lg:px-8 py-8 ' >
            <p className=' text-center text-6xl font-bold mb-9 '>
                Books
            </p>

        <div  className=' grid grid-cols-3 gap-5 ' >
            {
                BookData.map((book)=> <BookCard key={book.bookId} book = {book} ></BookCard>)
            }
        </div>


        </div>
    );
};

export default Books;