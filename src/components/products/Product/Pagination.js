import React from 'react';
import styles from "../../products/Product/Pagination.module.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className={styles.Pagination}>
        {pageNumbers.map(number => (
        //   <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className={`${styles.buttons__btn} ${styles.details__addBtn}`}>
            {number}
            </button>
        //   </li>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;