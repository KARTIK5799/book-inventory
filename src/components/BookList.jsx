import  { useState } from "react";
import { Link } from "react-router-dom";
import booksData from "../data/books";
import Pagination from "./Pagination";

// eslint-disable-next-line react/prop-types
const BookList = ({ userType }) => {
  const [books, setBooks] = useState(booksData);
  const [editedBook, setEditedBook] = useState(null);
  const booksPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEditClick = (bookId) => {
    setEditedBook({ ...books.find((book) => book.id === bookId) });
  };

  const handleSaveChanges = (bookId) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, ...editedBook } : book
    );

    saveBooksData(updatedBooks);
    setEditedBook(null);
  };

  const handleDeleteClick = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    saveBooksData(updatedBooks);
  };

  const handleInputChange = (e, field) => {
    setEditedBook({ ...editedBook, [field]: e.target.value });
  };

  const saveBooksData = (updatedBooks) => {
    setBooks(updatedBooks);
    console.log("Saving data to books.json:", updatedBooks);
  };

  return (
    <div className="container mx-auto my-8 list-books">
      {userType === "teacher" && (
        <div className="text-center mb-4">
          <Link
            to="/add-book"
            className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
          >
            Add New Book
          </Link>
        </div>
      )}

      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-4/5 mx-auto overflow-x-auto">
        <div className="flex bg-gray-800 text-white">
          <div className="w-1/3 sm:w-1/3 p-2 border">Name</div>
          <div className="w-1/3 sm:w-1/3 p-2 border">Author</div>
          <div className="w-1/3 sm:w-1/3 p-2 border">Availability</div>
          {userType === "teacher" && (
            <div className="w-1/3 p-2 border">Actions</div>
          )}
        </div>

        {currentBooks.map((book) => (
          <div key={book.id} className="flex border hover:bg-gray-100 transition duration-300 ease-in">
            {editedBook && editedBook.id === book.id ? (
              <>
                <div className="w-1/3 sm:w-1/3 p-2 border">
                  <input
                    type="text"
                    value={editedBook.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="w-full"
                  />
                </div>
                <div className="w-1/3 sm:w-1/3 p-2 border">
                  <input
                    type="text"
                    value={editedBook.author}
                    onChange={(e) => handleInputChange(e, "author")}
                    className="w-full"
                  />
                </div>
                <div className={`w-1/3 sm:w-1/3 p-2 border font-bold ${editedBook.available ? "text-green-500" : "text-red-500"}`}>
                  {editedBook.available ? "Available" : "Not Available"}
                </div>
                {userType === "teacher" && (
                  <div className="w-1/3 p-2 border">
                    <button onClick={() => handleSaveChanges(book.id)} className="bg-blue-500 text-white px-3 py-1 rounded">
                      Save
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="w-1/3 sm:w-1/3 p-2 border">
                  <Link to={`/book/${book.id}`} className="text-blue-500">
                    {book.name}
                  </Link>
                </div>
                <div className="w-1/3 sm:w-1/3 p-2 border">{book.author}</div>
                <div className={`w-1/3 sm:w-1/3 p-2 border font-bold ${book.available ? "text-green-500" : "text-red-500"}`}>
                  {book.available ? "Available" : "Not Available"}
                </div>
                {userType === "teacher" && (
                  <div className="w-1/3 p-2 border">
                    <button className="text-blue-500 mr-2" onClick={() => handleEditClick(book.id)}>
                      Edit
                    </button>
                    <button className="text-blue-500 mr-2" onClick={() => handleDeleteClick(book.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default BookList;
