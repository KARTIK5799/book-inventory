import { Link } from "react-router-dom";

const AddBookButton = () => {
  return (
    <div className="text-center mb-4">
      <Link
        to="/add-book"
        className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
      >
        Add New Book
      </Link>
    </div>
  );
};

export default AddBookButton;
