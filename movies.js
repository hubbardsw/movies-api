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

sabio.services.movies = {};

//sabio.services.movies.url = "http://www.omdbapi.com/?";
sabio.services.movies.url = "https://api.themoviedb.org/3/search/movie/"
//sabio.services.movies.key = "&apikey=9767d011";
sabio.services.movies.key = "?api_key=c0e86896e7759430c42631468bbf46d3"

sabio.services.movies.getMovie = (onSuccess, onError) => {
    //sabio.services.movies.parameters = `s=${$('#searchTerms').val()}`;
    sabio.services.movies.parameters = `&query=${$('#searchTerms').val()}`;
    console.log(sabio.services.movies.parameters)
    const settings = {

        cache: false
        ,dataType:"JSONP"
        ,success: onSuccess
        ,error: onError
        ,type: "GET"
    }
    $.ajax(`${sabio.services.movies.url}${sabio.services.movies.key}${sabio.services.movies.parameters}`, settings);
}

sabio.services.movies.getMovieSuccess = (data, message, xhr) => {
    console.log('Get Request Successful');
    //console.log(data.Search);
    console.log(data);
    sabio.page.searchData(data.results)
   //$('#movieList').append(`<img class="movie-poster" src="https://image.tmdb.org/t/p/w500/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg""/>`)
}

//Standard error function
sabio.services.movies.onError = (xhr, error, status) => {
    console.log("Post request was unsuccesful");
    console.log(data.responseText);
}

sabio.page.searchMovies = () => {
    sabio.services.movies.getMovie(sabio.services.movies.getMovieSuccess, sabio.services.movies.onSuccess)
}
sabio.page.searchData = array => {
    let movies = array
    for (let movie of movies){
        console.log(movie)
    $('#movieList').append(`
    <img class="movie-poster" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}"/>`
    )
}
}
