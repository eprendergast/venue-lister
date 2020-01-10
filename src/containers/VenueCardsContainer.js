import React from 'react'
import VenueCard from '../components/VenueCard'
import './VenueCardsContainer.css'

const VenueCardsContainer = ({ venues }) => {
  return (
    <div className='venue-cards-container'>
      {venues.map(venue => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  )
}

export default VenueCardsContainer
