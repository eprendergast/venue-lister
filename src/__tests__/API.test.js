import API from '../API.js'

describe('getVenues', () => {
    test('it returns an array of 50 venues', () => {
        const venues = API.getVenues()
        const arrayLength = venues.length
        expect(arrayLength).toEqual(50)
        API.getVenues().then()
    })
})

describe('My work', () => {
    test('works', () => {
      expect(2).toEqual(2)
    })
  })