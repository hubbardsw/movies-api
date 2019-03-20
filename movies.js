// OMDb API Key: 9767d011
// Example: http://www.omdbapi.com/?i=tt3896198&apikey=9767d011
// http://www.omdbapi.com/?t=Hackers ...Title Only
//http://www.omdbapi.com/?t=Hackers&y=2000&plot=full ...Title and Year

/*Your goal is to create an html page that will search for movies and after getting back the movies that match the search you should display the list of movies poster images.

Once you click on the movie's image you should open a modal that should show the movie's trailer and the movie's:

Director

Year: 

Genre: 

Rotten Tomato Rating:

Plot: 

To show the movie's trailer you can use a google youtube api to find and display it. Reference https://developers.google.com/youtube/v3/docs/.

Use your creativity for UI (make it look nice).
*/

sabio.page.services.movies = {};

sabio.page.services.movies.url =  "http://www.omdbapi.com?"
sabio.page.services.movies.key = "&apikey=9767d011&"

sabio.services.movies.getMovie = (onSuccess, onError) => {
const settings = {

    cache: false
    ,success: onSuccess
    ,error: onError
    ,type: "GET"
}
$.ajax(`${sabio.page.services.movies.url}${parameters}${sabio.page.services.movie.key}`)
}

