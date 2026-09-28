import ReadButton from '@/components/button/ReadButton';
import WishButton from '@/components/button/WishButton';
import Image from 'next/image';
import React from 'react';

const getBook = async () => {
    const res = await fetch('http://localhost:3000//booksData.json')
    const data = await res.json()
    return data ;
}

const bookDetailes = async ({params}) => {

    const {id} = await params ;

    const bookData = await getBook();

    const book = bookData.find((book)=> book.bookId == id);

    console.log(book);
    

    return (
       <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 flex flex-col lg:flex-row gap-10">
        
        {/* Left Side: Image Component */}
        <div className="bg-gray-100 p-8 rounded-2xl flex items-center justify-center shadow-sm w-full lg:w-1/2">
          <Image
            height={1000}
            width={800}
            src={book.image} 
            alt={book.bookName}
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* Right Side: Content / Details Component */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.bookName}</h1>
            <p className="text-gray-600 mb-4">By : {book.author}</p>
            
            <p className="text-gray-700 font-medium pb-4 border-b border-gray-200">{book.category}</p>

            <div className="py-4 text-sm text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-900">Review : </span>
              {book.review}
            </div>

            <div className="flex items-center gap-3 my-4">
              <span className="font-bold text-gray-900 text-sm">Tag  : </span>
              {book.tags.map((tag, index) => (
                <span key={index} className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-y-3 text-sm my-6 text-gray-700">
              <div className="text-gray-500">Number of Pages:</div>
              <div className="font-semibold text-gray-900">{book.totalPages}</div>
              
              <div className="text-gray-500">Publisher:</div>
              <div className="font-semibold text-gray-900">{book.publisher}</div>
              
              <div className="text-gray-500">Year of Publishing:</div>
              <div className="font-semibold text-gray-900">{book.yearOfPublishing}</div>
              
              <div className="text-gray-500">Rating:</div>
              <div className="font-semibold text-gray-900">{book.rating}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <ReadButton book= {book}> </ReadButton>
            <WishButton book={book} ></WishButton>
          </div>
        </div>

      </div>
    </div>
    );
};

export default bookDetailes;