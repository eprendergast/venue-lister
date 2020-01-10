import React, { useState, useEffect } from 'react'
import API from './API.js'
import './App.css'
import VenueCardsContainer from './containers/VenueCardsContainer'
import Pagination from './components/Pagination'
import LoadingContainer from './containers/LoadingContainer.js'

const App = () => {
  const [venues, setVenues] = useState([])
  const [venuesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const indexOfLastVenue = currentPage * venuesPerPage
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage
  const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue)

  const pageNumbers = []
  const totalVenues = venues.length

  for (let i = 1; i <= Math.ceil(totalVenues / venuesPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => {
    currentPage !== Math.max(...pageNumbers) && setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    currentPage !== Math.min(...pageNumbers) && setCurrentPage(currentPage - 1)
  }

  useEffect(() => {
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

      {loading === true ? (
        <LoadingContainer/>
      ) : (
        
        <div className='app-content-container'>
          <VenueCardsContainer venues={currentVenues} />
          <Pagination
            pageNumbers={pageNumbers}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </div>
      )}
    </div>
  )
}

export default App
