import React from 'react'
import renderer from 'react-test-renderer'
import VenueCard from '../components/VenueCard.js'

it('renders correctly', () => {
  const venue = {
    id: '835e83df-56c3-4808-8299-580bb4618ea8',
    name: 'Novotel Suites Den Haag City Center',
    address1: 'Grote Marktstraat 46',
    postcode: '2511',
    city: 'The Hague',
    listing_text:
      'Novotel Suites Den Haag City Center is located in the Nieuwe Haagsche Passage shopping arcade in the center of The Hague. The hotel has 118 suites for the guests, all are well equipped with all modern amenities.'
  }

  const tree = renderer.create(<VenueCard venue={venue} />).toJSON()
  expect(tree).toMatchSnapshot()
})
