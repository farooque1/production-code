import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];
    console.log(pages);

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    console.log(pages);
    return (
        <div className='d-flex justify-content-center my-5'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "btn btn-primary" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
