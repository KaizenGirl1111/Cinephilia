import { useLocation } from 'react-router-dom';
import GiphyEmbed from './GiphyEmbed.jsx'
import {useEffect,useState } from "react"
import Shimmer from './Shimmer.jsx';
function GiphyEmbedWithDynamicImage() {
    const location = useLocation();
    const [loading,setLoading] = useState(false)
    // Map route paths to corresponding Giphy image URLs
    const giphyImages = {
        '/thriller': 'http://thefilmexperience.net/storage/black%20swan.gif?__SQUARESPACE_CACHEVERSION=1606767668543',
        '/drama': 'https://i.pinimg.com/originals/91/43/48/9143486a348271a843918be0f987ed1a.gif',
        '/classic': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2l1Y2h0YnRsZTYxNHBsbWttZzJlbGo2Nnd5aGZ4eGtwdzU5bzJoMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J9d0qSv2nsSFG/giphy.gif',
        '/romance': 'https://media.giphy.com/media/l3vRh2ESbSv2PkKdi/giphy.gif?cid=790b7611mdwuhnicrgw63jqrls6vuiij9wxb3qelfjwu4nnn&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        '/': 'https://64.media.tumblr.com/0707cc67f826530cc15d3915855f16d7/tumblr_p7atvmVMNw1sr5vsyo5_r4_540.gifv',
        '/404': '',
        '/addmovie': '',
        '/movie': '',
        'movieform':''
    };
    const imageUrl = giphyImages[location.pathname];
    useEffect(()=>{
        if(imageUrl) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => setLoading(false)
        }
        else{
            setLoading(false)
        }
    },[imageUrl])
    // Get the image URL based on the current route
    if (loading) {
        return <><div style={{ backgroundColor: "lightgray", height: window.innerWidth <= 768 ? "50vh" : "75vh" }}></div></>
    }

    return <GiphyEmbed imageUrl={imageUrl} />;
}
export default GiphyEmbedWithDynamicImage;