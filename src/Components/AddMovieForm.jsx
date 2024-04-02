import { useState } from "react"

function AddMovieForm() {
    return (
        <div>
                <input type="text" value="" id="movie-name"/>
                <label htmlFor="movie-name">Movie Name</label>

                <button>Enter</button>
                <input type="text" value="" id="movie-rating" />
                <label htmlFor="movie-rating">Rating</label>

                <button>Enter</button>
                <input type="text" value="" id="movie-year" />
                <label htmlFor="movie-year">Year</label>

                <button>Enter</button>
                <input type="text" value="" id="movie-name" />
                <label htmlFor="movie-name">Movie Name</label>

                <button>Enter</button>
                <input type="text" value="" id="movie-director" />
                <label htmlFor="movie-director">Movie Director</label>

                <button >Enter</button>
                <input type="text" value="" id="movie-genre" />
                <label htmlFor="movie-director">Movie Director</label>

                <button>Enter</button>
                <input type="text" value="" id="movie-genre" />
                <label htmlFor="movie-director">Movie Director</label>

                <button>Enter</button>
      </div>
    )
}