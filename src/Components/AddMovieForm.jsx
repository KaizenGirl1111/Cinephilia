import { useState } from "react"

function AddMovieForm({ movieList, setMovieList }) { 

    const [movieName, setMovieName] = useState("")
    const [movieRating, setMovieRating] = useState(0)
    const [movieYear, setMovieYear] = useState(0)
    const [movieGenre, setMovieGenre] = useState("")
    const [movieSummary, setMovieSummary] = useState("")
    const [movieDirector, setMovieDirector] = useState("")
    const [moviePoster, setMoviePoster] = useState("")
   
    const showInConsole = () => {
        const newMovie = {
            name: movieName,
            poster: moviePoster,
            rating: movieRating,
            summary: movieSummary,
            director: movieDirector,
            year: movieYear,
            genre: movieGenre

        };
        console.log(movieList) 
        setMovieList([...movieList, newMovie])
       console.log(movieList)
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // To ensure the div covers the entire height of the viewport
            backgroundColor: "rgba(0,0,0,0.5)",
        }}>
            <div style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "10px",
                padding: "2rem",
                backdropFilter: "blur(5px)",
                color: "white",
                width: "60vw",
                maxWidth: "600px",
            }}>
                <h3 style={{ textAlign: "center" }}>Add Movie</h3>
                <label htmlFor="movie-name">Movie Name:</label>
                <input
                    type="text"
                    value={movieName}
                    placeholder="Movie Name"
                    onChange={(e) => { setMovieName(e.target.value) }}
                    style={{ marginBottom: "1rem", width: "80%", padding: "0.5rem", borderRadius: "5px" }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <label htmlFor="movie-rating">Rating:</label>
                    <input
                        type="text"
                        value={movieRating}
                        placeholder="Rating"
                        onChange={(e) => { setMovieRating(e.target.value) }}
                        style={{
                            marginBottom: "1rem", width: "30%", padding: "0.5rem", borderRadius: "5px"
                        }}
                    />
                    <label htmlFor="movie-year">Release Year:</label>
                    <input
                        type="text"
                        value={movieYear}
                        placeholder="Year"
                        onChange={(e) => { setMovieYear(e.target.value) }}
                        style={{ marginBottom: "1rem", width: "30%", padding: "0.5rem", borderRadius: "5px" }}
                    />
                </div>

                <label htmlFor="movie-genre">Movie Genre:</label>
                <input
                    type="text"
                    value={movieGenre}
                    placeholder="Movie Genre"
                    onChange={(e) => { setMovieGenre(e.target.value) }}
                    style={{ marginBottom: "1rem", width: "30%", padding: "0.5rem", borderRadius: "5px" }}
                />

                <label htmlFor="movie-director">Movie Director:</label>
                <input
                    type="text"
                    value={movieDirector}
                    placeholder="Movie Director"
                    onChange={(e) => { setMovieDirector(e.target.value) }}
                    style={{
                        marginBottom: "1rem", width: "30%", padding: "0.5rem", borderRadius: "5px"
                    }}
                />

                <label htmlFor="movie-summary">Movie Summary:</label>
                <textarea
                    value={movieSummary}
                    placeholder="Movie Summary"
                    onChange={(e) => { setMovieSummary(e.target.value) }}
                    style={{ marginBottom: "1rem", width: "95%", padding: "0.5rem", borderRadius: "5px", resize: "vertical" }}
                />

                <label htmlFor="movie-poster">Movie Poster:</label>
                <input
                    type="text"
                    value={moviePoster}
                    placeholder="Poster link"
                    onChange={(e) => { setMoviePoster(e.target.value) }}
                    style={{ marginBottom: "1rem", width: "80%", padding: "0.5rem", borderRadius: "5px" }}
                />

                <button onClick={showInConsole} style={{ width: "80%", padding: "0.5rem", borderRadius: "5px", cursor: "pointer", marginLeft: "auto", marginRight: "auto", display: "block" }}>Submit</button>
            </div>
        </div>
    );
};

export default AddMovieForm;