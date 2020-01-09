import React, { useState, useEffect } from 'react'
import API from './API.js'
import './App.css'
import VenueCardsContainer from './containers/VenueCardsContainer'
import Pagination from './components/Pagination'

const App = () => {
  const [venues, setVenues] = useState([])
  const [venuesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const indexOfLastVenue = currentPage * venuesPerPage
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage
  const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue)

  const pageNumbers = []
  const totalVenues = venues.length

  for (let i = 1; i <= Math.ceil(totalVenues / venuesPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const nextPage = () => {
    currentPage !== Math.max(...pageNumbers) && setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    currentPage !== Math.min(...pageNumbers) && setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
    setLoading(true)
    API.getVenues().then(setVenues)
    setLoading(false)
  }, [])

  return (
    <div>
      <div className='header-container'>
        <div className='header-text' onClick={() => setCurrentPage(1)}>
          VenueLister
        </div>
      </div>
      <div className='app-content-container'>
        <VenueCardsContainer venues={currentVenues} loading={loading} />
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  )
}

export default App
