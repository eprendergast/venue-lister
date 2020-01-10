import React from 'react'
import './Pagination.css'

const Pagination = ({
  pageNumbers,
  currentPage,
  setCurrentPage,
  nextPage,
  previousPage
}) => {
  return (
    <div className='pagination-container'>
      <div className='pagination-link-container'>
        <div className='pagination-link' onClick={() => previousPage()}>
          Prev
        </div>
      </div>
      {pageNumbers.map(number => (
        <div
          key={number}
          className={
            number === currentPage
              ? 'pagination-link-container-active'
              : 'pagination-link-container'
          }
        >
          <div
            className='pagination-link'
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </div>
        </div>
      ))}
      <div className='pagination-link-container'>
        <div className='pagination-link' onClick={() => nextPage()}>
          Next
        </div>
      </div>
    </div>
  )
}

export default Pagination
