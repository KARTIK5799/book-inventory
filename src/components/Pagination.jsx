
// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`bg-blue-500 text-white px-3 py-2 rounded mr-2 prev ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Prev
      </button>
      <span className="text-blue-500">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`bg-blue-500 text-white px-3 py-2 rounded ml-2 next ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
