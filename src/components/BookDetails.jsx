import { useParams } from 'react-router-dom';
import booksData from '../data/books';

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="container mx-auto my-4">Book not found.</div>;
  }

  return (
    <div className="container mx-auto my-4 flex justify-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white border border-gray-300 shadow-md rounded p-8">
        <h2 className="text-3xl font-bold mb-4">{book.name}</h2>
        <p className="text-gray-500 mb-2">Author: {book.author}</p>
        <p className="mb-4">Description: {book.description}</p>
        <div className="flex justify-between">
          <div>
            <p className="text-blue-500">Genre: {book.genre}</p>
          </div>
          <div>
            <p className={`font-bold ${book.available ? 'text-green-500' : 'text-red-500'}`}>
              Availability: {book.available ? 'Available' : 'Not Available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
