import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageCount, currentPage }) => {
    if (pageCount <= 1) return null;

    const handlePageChange = (e) => {
        setPageNumber(e.selected + 1);
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: 0,
        });
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={<HiOutlineChevronRight size={22} />}
            onPageChange={handlePageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            forcePage={currentPage - 1}
            previousLabel={<HiOutlineChevronLeft size={22} />}
            renderOnZeroPageCount={null}
            className="flex items-center flex-wrap gap-3"
            pageClassName="rounded-md border transition-colors duration-300 hover:bg-primary hover:text-white"
            pageLinkClassName="min-w-9 min-h-9 flex justify-center items-center py-1 px-2.5"
            activeClassName="bg-primary text-white"
            previousClassName="flex pr-3"
            nextClassName="flex pl-3"
            previousLinkClassName="min-w-9 min-h-9 flex items-center justify-center border rounded-md py-1 px-2 text-primary transition-colors duration-300 hover:bg-primary hover:!text-white"
            nextLinkClassName="min-w-9 min-h-9 flex items-center justify-center border rounded-md py-1 px-2 text-primary transition-colors duration-300 hover:bg-primary hover:!text-white"
            disabledClassName="flex"
        />
    );
};

export default Pagination;
