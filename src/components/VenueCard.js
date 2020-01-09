import React from 'react'
import './VenueCard.css'

const VenueCard = ({ venue }) => {
  const { name, address1, postcode, city, listing_text } = venue

  return (
    <div className='venue-card'>
      <div className='venue-card-header'>
        <div className='venue-card-name-text'>{name}</div>
        <div className='venue-card-address-text'>{`${address1} | ${city} | ${postcode}`}</div>
      </div>
      <div className='venue-card-listing-text'>{listing_text}</div>
    </div>
  )
}

export default VenueCard
