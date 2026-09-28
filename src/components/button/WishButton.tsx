
"use client"

import { BookContext } from "@/context/BooksProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishButton = ({book}) => {

    const {wishList, setWishlist} = useContext(BookContext)
    

    const handleClick = ()=>{

       setWishlist([...wishList, book]);

       toast.success('Added')

       console.log(wishList);
    }

    return (
        <div>
            <button onClick={ () => handleClick()} className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer">
              Wish List
            </button>
        </div>
    );
};

export default WishButton;