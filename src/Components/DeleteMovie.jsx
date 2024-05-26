import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DeleteMovieComponent = ({ idNo }) => {
    const [movie, setMovie] = useState(null);

    const getMovieById = async () => {
        try {
            const res = await axios.get(`https://664b361fa300e8795d44a446.mockapi.io/movies/movies/${idNo}`);
            console.log(res);
            setMovie(res.data);
        } catch (error) {
            console.error("Error fetching the movie:", error);
        }
    };

    const deleteMovieById = async () => {
        try {
            const res = await axios.delete(`https://664b361fa300e8795d44a446.mockapi.io/movies/movies/${idNo}`);
            console.log("Delete response:", res);
            
            setMovie(null); 
        } catch (error) {
            console.error("Error deleting the movie:", error);
        }
    };

    useEffect(() => {
        getMovieById();
    }, []);

    return (
        <div>
            {movie ? (
                <div>
                    <h1>{movie.title}</h1>
                    <button onClick={deleteMovieById}>Delete Movie</button>
                </div>
            ) : (
                <p>Loading movie...</p>
            )}
        </div>
    );
};

export default DeleteMovieComponent;
