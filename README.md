# Venue Lister

Venue Lister is a small React.js application which displays a card style summary of venue data retrieved from a [JSON API](https://venue-lister.herokuapp.com/venues). Pagination allows the user to navigate between the 5 pages of venues.  <br/>

### `npm start`

Launches the application in the browser. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### `npm test`

Launches the Jest test runner in interactive watch mode. Snapshot tests were written for all main components and to test the 'getVenues' function in API.js. (Please note that testing was not something that was part of my curriculum at Flatiron School so these tests may not be 'best practice', but it is something I'm working on learning now!) <br />

## Design Decisions

The bulk of the logic for the application is container within App.js. 'App' is a functional component which uses hooks to manage state in order to reduce the verbosity of using 'setState' and 'this'. <br/>

The 'useEffect' hook makes a request to get the venue data from the API endpoint when the application is launched. The API logic is contained in a separate file, API.js, which helps reduce the length of the App.js file and encapsulates all API logic into one file. <br/>

App is responsible for rendering the remainder of the application's containers and components. A brief overview of each additional component is provided below. 

### LoadingContainer

Returns a [React Spinner](https://www.npmjs.com/package/react-spinners) while the application is fetching the venue data. 

### VenueCardsContainer

A functional component who's purpose is to map over the array of venues and return a VenueCard for each venue. 

### VenueCard

The card component which contains the details about an individual venue. 

### Pagination

Returns the pagination component which may be viewed at the bottom of the application. Page numbers are rendered dynamically based on the total number of venues and the venues per page (calculated in App.js).





