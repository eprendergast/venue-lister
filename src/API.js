const BASE_URL = 'https://venue-lister.herokuapp.com'
const VENUES_URL = `${BASE_URL}/venues`

const getVenues = async () => {
    const resp = await fetch(VENUES_URL)
    return await resp.json()
}

export default {
    getVenues
}