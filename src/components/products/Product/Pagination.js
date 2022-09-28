import React from "react";
import styles from "../../products/Product/Pagination.module.css";
const Pagination = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div>
        <ul className={styles.Pagination}>
          <p>
            {currentPage === 1 ? (
              ""
            ) : (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`${styles.buttons__btn} ${styles.details__addBtn}`}
              >
                Prev
              </button>
            )}
          </p>
          {pageNumbers.map((number) => (
            <p>
              <button
                onClick={() => paginate(number)}
                className={`${styles.buttons__btn} ${styles.details__addBtn}`}
                key={number}
              >
                {number}
              </button>
            </p>
          ))}
          <p>
            {currentPage === Math.ceil(totalPosts / postsPerPage) ? (
              ""
            ) : (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`${styles.buttons__btn} ${styles.details__addBtn}`}
              >
                Next
              </button>
            )}
          </p>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
