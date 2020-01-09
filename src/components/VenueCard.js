import React from 'react'

const VenueCard = ({ venue }) => {
  const { id, name, address1, postcode, city, listing_text } = venue

  return (
    <div className='venue-card'>
      <div className='venue-card-name-text'>{name}</div>
      <div className='venue-card-address-text'>{`${address1} | ${city} | ${postcode}`}</div>
      <div className='venue-card-listing-text'>{listing_text}</div>
    </div>
  )
}

export default VenueCard
