
export const apiKey = 'ed95abf5';


export function DisplayMovieInfo(obj) {



              if (obj.Response === 'True') {

                            const div_movieInfo = document.createElement('div');
                            div_movieInfo.setAttribute('id', 'movieInfo');

                            const title = document.createElement('h2');
                            title.textContent = obj.Title;
                            div_movieInfo.appendChild(title);

                            const parag_year = document.createElement('p');
                            const span_year = document.createElement('span');
                            span_year.textContent = 'Year: ';
                            parag_year.appendChild(span_year);
                            parag_year.textContent = obj.Year;
                            div_movieInfo.appendChild(parag_year);

                            const parag_genre = document.createElement('p');
                            const span_genre = document.createElement('span');
                            span_year.textContent = 'Genre: ';
                            parag_genre.appendChild(span_genre);
                            parag_year.textContent = obj.Genre;
                            div_movieInfo.appendChild(parag_genre);

                            const parag_plot = document.createElement('p');
                            const span_plot = document.createElement('span');
                            span_plot.textContent = 'Plot: ';
                            parag_plot.appendChild(span_plot);
                            parag_plot.textContent = obj.Plot
                            div_movieInfo.appendChild(parag_plot);

                            const img = document.createElement('img');
                            img.src = obj.Poster;



                            const imdb_id = document.createElement("p")
                            imdb_id.textContent = `IMDBID: ${obj.imdbID}`

                            div_movieInfo.appendChild(imdb_id);




                            const imdb_rate = document.createElement("span")
                            imdb_rate.textContent = obj.imdbRating

                            const imdb_puan_yazisi = document.createElement("p")
                            imdb_puan_yazisi.textContent = "İMDB Rate: "
                            imdb_puan_yazisi.classList.add("imdbrate")

                            imdb_puan_yazisi.appendChild(imdb_rate)
                            div_movieInfo.appendChild(imdb_puan_yazisi);


                            const tit = obj.Title.split(':')[0];
                            img.alt = tit;
                            div_movieInfo.appendChild(img);
                            return div_movieInfo

              } else if (obj.Response != 'True') {
                            const error = document.createElement('p');
                            error.textContent = 'No movie found with that title.';
                            return error


              }



}

