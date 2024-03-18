import { apiKey, DisplayMovieInfo } from './main.js';

document.querySelector('button').addEventListener('click', searchMovie);
document.querySelector('input').addEventListener('keydown', keypress);

const movieInfoDiv = document.getElementsByClassName('movie-container')[0];

function keypress(event) {
              if (event.key == 'Enter') {
                            searchMovie();
              }
}

function searchMovie() {
              const movieTitle = document.getElementById('movieTitle').value;

              const apiUrl = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`;
              movieInfoDiv.innerHTML = '<p>Searching...</p>';
              axios
                            .get(apiUrl)
                            .then((response) => {
                                          const movieInfo = response.data.Search
                                          let search_id_list = []
                                          
                                          
                                          movieInfo.forEach((element) => {

                                                        search_id_list.push(element.imdbID)
                                                        

                                          })
                                          
                                          const response_result = response.data
                                          movieInfoDiv.firstChild.remove();
                                          search_id_list.forEach( (element) => {
                                                        const apiURLID = `https://www.omdbapi.com/?i=${element}&apikey=${apiKey}`;
                                                        axios.get(apiURLID).then( (response)=> {
                                                                      const movieDetails = response.data
                                                                      
                                                                      movieInfoDiv.append(DisplayMovieInfo(movieDetails));

                                                        }


                                                        ).catch(err => console.log("id üzerinden hata aldın"))


                                          })

                            })
                            .catch((error) => {
                                          console.error('Error fetching movie data:', error);
                                          movieInfoDiv.innerHTML = '<p>Film ismi kısa veya böyle bir film malesef yok.</p>';
                            });
}


