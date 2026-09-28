
"use client"

import { BookContext } from "@/context/BooksProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}) => {

    const {readBooks, setReadBooks} = useContext(BookContext)
    

    const handleClick = ()=>{

       setReadBooks([...readBooks, book]);

        toast.success('Added')
       
    }

    return (
        <div>
            <button onClick={ () => handleClick()} className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer">
              Read
            </button>
        </div>
    );
};

export default ReadButton;