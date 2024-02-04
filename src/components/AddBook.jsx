import  { useState } from 'react';
import booksData from '../data/books';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState(true);
  const navigate = useNavigate();

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      id: booksData.length + 1,
      name,
      author,
      genre,
      description,
      availability,
    };

    booksData.push(newBook);

    navigate('/');
  };

  return (
    <div className="container mx-auto my-8 flex items-center justify-center">
      <div className="bg-white border border-gray-300 shadow-md rounded p-8 w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>
        <form onSubmit={handleAddBook}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
              Genre:
            </label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Availability:
            </label>
            <select
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value === 'true')}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value={true}>Available</option>
              <option value={false}>Not Available</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!name || !author || !genre || !description}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
