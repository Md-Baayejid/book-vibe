import Image from "next/image";
import Link from "next/link";


const BookCard = ({book}) => {
    return (
        <div>
             <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300">

            {/* Book Image */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center overflow-hidden">
                <Image
                    width={400}
                    height={600}
                    src={book.image}
                    alt={book.bookName}
                    className="h-full w-full object-contain"
                />
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-5">
                {book.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className="text-sm bg-green-50 text-green-600 px-3 py-1 rounded-full font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name */}
            <h2 className="text-xl font-bold text-gray-900 mt-3">
                {book.bookName}
            </h2>

            {/* Author */}
            <p className="text-gray-500 mt-1">
                By <span className="font-medium text-gray-700">{book.author}</span>
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Book Information */}
            <div className="flex justify-between text-sm text-gray-500">
                <div>
                    <p>Pages</p>
                    <p className="font-semibold text-gray-800">
                        {book.totalPages}
                    </p>
                </div>

                <div>
                    <p>Published</p>
                    <p className="font-semibold text-gray-800">
                        {book.yearOfPublishing}
                    </p>
                </div>

                <div>
                    <p>Rating</p>
                    <p className="font-semibold text-yellow-500">
                        ★ {book.rating}
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between mt-5">
                <span className="text-sm text-gray-500">
                    {book.category}
                </span>

                <Link href={`/allBooks/${book.bookId}`}>
                <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition">
                    View Details
                </button>
                </Link>
            </div>

        </div>
        </div>
    );
};

export default BookCard;