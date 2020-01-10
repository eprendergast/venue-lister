import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from '../components/Pagination.js'

it('renders correctly', () => {
  const pageNumbers = [1, 2, 3, 4, 5]

  const tree = renderer
    .create(<Pagination pageNumbers={pageNumbers} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
