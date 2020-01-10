import API from '../API.js'

describe('getVenues', () => {
  test('it returns an array of 50 venues', () => {
    return API.getVenues().then(venues => {
      expect(venues.length).toBe(50)
    })
  })
})
