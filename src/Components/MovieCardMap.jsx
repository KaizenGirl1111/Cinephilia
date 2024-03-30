import MovieCard from './MovieCard.jsx'

function MovieCardMap() {
    /*
    const movie = [
        {
            name: "Vikram",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
            rating: 8.4,
            summary:
                "An action-packed Tamil film follows a fearless and determined police officer as he combats corruption and challenges societal norms to uphold justice."
        },
        {
            name: "RRR",
            poster:
                "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
            rating: 8.8,
            summary:
                "Telgu period action directed by S. S. Rajamouli, featuring the epic tale of two revolutionaries during India's pre-independence era.",
        },
        {
            name: "Iron man 2",
            poster:
                "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
            rating: 7,
            summary:
                "Tony Stark, pressured to share his Iron Man technology, faces a new enemy while navigating personal challenges with Pepper Potts and James Rhodes by his side."
        },
        {
            name: "No Country for Old Men",
            poster:
                "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
            rating: 8.1,
            summary:
                "A hunter's discovery of drug money triggers a deadly pursuit by a relentless killer in this gripping tale of chance, fate, and moral ambiguity."
        },
        {
            name: "Jai Bhim",
            poster:
                "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
            summary:
                "A Tamil drama portrays the struggles of a Dalit lawyer fighting against caste discrimination in the Indian legal system, highlighting themes of social justice.",
            rating: 8.8
        },
        {
            name: "The Avengers",
            rating: 8,
            summary:
                " Marvel's superhero team battles cosmic threats, uniting iconic characters in a thrilling narrative of heroism, teamwork, and sacrifice to protect Earth.",
            poster:
                "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
        },
        {
            name: "Interstellar",
            poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
            rating: 8.6,
            summary:
                "Ex-NASA pilot Joseph Cooper leads a perilous mission to find a new planet for humanity's survival, exploring cosmic mysteries and the bonds of love."
        },
        {
            name: "Baahubali",
            poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
            rating: 8,
            summary:
                "Set in Mahishmati, this Telugu epic follows Shivudu's quest for love and identity amidst familial conflicts, political intrigue, and grand battles."
        },
        {
            name: "Ratatouille",
            poster:
                "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
            rating: 8,
            summary:
                "An animated tale follows Remy, a rat with culinary dreams, as he defies stereotypes to pursue his passion for cooking, serving up a heartwarming story of determination."
        }
    ];
    */
    const movie = [
        {
            name: "Casablanca",
            poster: "https://upload.wikimedia.org/wikipedia/commons/0/00/Bogart_Bergman_Casablanca.jpg",
            rating: 8.5,
            summary: "A timeless romantic drama set during World War II, showcasing love, sacrifice, and political intrigue in the Moroccan city of Casablanca."
        },
        
        {
            name: "Pyaasa",
            poster: "data:image/jpeg;base64,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",
            rating: 8.5,
            summary: "Considered a masterpiece of Indian cinema, 'Pyaasa' tells the story of a struggling poet who finds solace and purpose amidst societal indifference and personal turmoil."
        },
        {
            name: "Pather Panchali",
            poster: "https://qph.cf2.quoracdn.net/main-qimg-d957d26bd8bbe706c51f4cdb7fc23d39-lq",
            rating: 8.6,
            summary: "Regarded as one of the greatest films in world cinema, 'Pather Panchali' is a lyrical portrayal of childhood, poverty, and dreams in rural Bengal, directed by Satyajit Ray."
        },
        {
            name: "The Seventh Seal",
            poster: "data:image/jpeg;base64,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",
            rating: 6.8,
            summary: "A landmark of Swedish cinema, 'The Seventh Seal' follows a medieval knight's existential crisis as he plays a game of chess with Death, exploring themes of faith"
        },
        {
            name: "Persona",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/08/Persona_Poster.jpg",
            rating: 6.6,
            summary: "Directed by Ingmar Bergman, 'Persona' is an enigmatic psychological drama exploring the blurred boundaries between identity,reality and illusions"
        },
        {
            name: "Citizen Kane",
            poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/330px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
            rating: 8.3,
            summary: "Regarded as one of the greatest films ever made, 'Citizen Kane' follows the life and legacy of a wealthy newspaper tycoon, exploring themes of power & corruption."
        },
        {
            name: "Gone with the Wind",
            poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Poster_-_Gone_With_the_Wind_01.jpg/330px-Poster_-_Gone_With_the_Wind_01.jpg",
            rating: 8.1,
            summary: "A sweeping epic set against the backdrop of the American Civil War and Reconstruction era, 'Gone with the Wind' portrays the tumultuous romance."
        },
        {
            name: "Sholay",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Sholay-poster.jpg",
            rating: 8.2,
            summary: "An iconic Bollywood classic, 'Sholay' is a tale of friendship, revenge, and redemption set in the lawless village of Ramgarh, featuring memorable characters."
        },
        {
            name: "La Dolce Vita",
            poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/La_Dolce_Vita_%281960_film%29_coverart.jpg",
            rating: 8.0,
            summary: "Federico Fellini's masterpiece, 'La Dolce Vita', is a satirical take on the hedonistic lifestyles of the Roman elite, capturing the emptiness beneath the glamour of society."
        },
        {
            name: "Mahanagar",
            poster: "https://upload.wikimedia.org/wikipedia/en/1/18/Mahanagar2.jpg",
            rating: 8.2,
            summary: "Directed by Satyajit Ray, 'Mahanagar' (The Big City) is a poignant exploration of a middle-class woman's journey towards self-discovery and empowerment in 1950s."
        },
        {
            name: "Bhuvan Shome",
            poster: "https://upload.wikimedia.org/wikipedia/en/f/fe/Bhuvan_Shome.jpg",
            rating: 7.9,
            summary: "Directed by Mrinal Sen, 'Bhuvan Shome' is a minimalist masterpiece that tells the story of a lonely bureaucrat's transformative encounter with a young woman."
        },
        {
            name: "Charulata",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/CharulataG.jpg/220px-CharulataG.jpg",
            rating: 8.4,
            summary: "Directed by Satyajit Ray, 'Charulata' is a masterful depiction of loneliness, desire, and societal constraints as seen through the eyes of a lonely housewife in 19th-century."
        }
    ];
    return (
        <>
        <div className="cards-container">
            {movie.map((element,index) => {
              return  <MovieCard key={index} {...element} />
            })}
            </div>
        </>
    )
}
export default MovieCardMap;