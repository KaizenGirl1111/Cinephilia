

function Page404() {
     const movieQuotes = [
        {
            dialogue: "Always remember, Frodo, the page is trying to get back to its master. It wants to be found.",
            movieInfo: "Gandalf, The Lord of the Rings: The Fellowship of the Ring (2001)"
        },
        {
            dialogue: "Webpages? Where we're going, we don't need webpages.",
            movieInfo: "Dr. Emmett Brown, Back to the Future (1985)"
        },
        {
            dialogue: "Surely you can't be serious! I am serious. And don't call me Shirley.",
            movieInfo: "Ted Striker & Rumack, Airplane! (1980)"
        },
        {
            dialogue: "Someday we'll find it...the website connection...",
            movieInfo: "Kermit the Frog, The Muppet Movie (1979)"
        },
        {
            dialogue: "There is no page.",
            movieInfo: "Spoon Boy, The Matrix (1999)"
        },
        {
            dialogue: "Lord! It's a miracle! Webpage up and vanished like a fart in the wind!",
            movieInfo: "Warden Norton, The Shawshank Redemption (1994)"
        },
        {
            dialogue: "It's the one that says 'Page not found'.",
            movieInfo: "Jules Winnfield, Pulp Fiction (1994)"
        },
        {
            dialogue: "What we've got here is... failure to communicate.",
            movieInfo: "Captain, Cool Hand Luke (1967)"
        },
        {
            dialogue: "Page not found? INCONCEIVABLE.",
            movieInfo: "Vizzini, The Princess Bride (1987)"
        },
        {
            dialogue: "Where's the page, Lebowski? Where's the page?",
            movieInfo: "Blond Thug, The Big Lebowski (1998)"
        },
        {
            dialogue: "I've got a feeling we're not in Kansas anymore.",
            movieInfo: "Dorothy, The Wizard of Oz (1939)"
        },
        {
            dialogue: "He's off the map! He's off the map!",
            movieInfo: "Stan, Eternal Sunshine of the Spotless Mind (2004)"
        },
        {
            dialogue: "What's on the page?!",
            movieInfo: "Detective David Mills, Se7en (1995)"
        },
        {
            dialogue: "Yeah... I'm gonna need you to go ahead and find another page.",
            movieInfo: "Bill Lumbergh, Office Space (1999)"
        },
        {
            dialogue: "Dude, where's my webpage?",
            movieInfo: "Jesse Montgomery III, Dude, Where's My Car? (2000)"
        },
        {
            dialogue: "This is not the webpage you're looking for.",
            movieInfo: "Obi-Wan, Star Wars: Episode IV - A New Hope (1977)"
        },
        {
            dialogue: "I am Jack's missing page.",
            movieInfo: "The Narrator, Fight Club (1999)"
        },
        {
            dialogue: "Dude...",
            movieInfo: "Hurley, Lost (2004) - TV Series"
        },
        {
            dialogue: "Well, what if there is no webpage? There wasn't one today.",
            movieInfo: "Phil Connors, Groundhog Day (1993)"
        }
    ];
    
const randomIndex = Math.floor(Math.random() * movieQuotes.length);
const selectedQuote = movieQuotes[randomIndex];

return (
    <div style={{marginTop:"10rem" ,margin: "auto", width: "50%", fontFamily: "URW Chancery L, cursive", color: "white", backgroundColor:"rgba(255, 255, 255, 0.7)"}}>
        <h1>{selectedQuote.dialogue}</h1>
        <p>{selectedQuote.movieInfo}</p>
        <img src="https://pbs.twimg.com/media/FtmPqWhXoAUgnn1.jpg" alt="Octopus" style={{ width: "70%", height: "90%",textAlign:"center",marginLeft:"15%"}} /> {/* Add the octopus image */}
    </div>
);
}

export default Page404;