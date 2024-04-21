import { useLocation } from 'react-router-dom';
import GiphyEmbed from './GiphyEmbed.jsx'
function GiphyEmbedWithDynamicImage() {
    const location = useLocation();
     
    // Map route paths to corresponding Giphy image URLs
    const giphyImages = {
        '/thriller': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHo0N3A2d2w4bGt0a2gwbWJmcm5jYnJmbGJlZHJzOGdqODYxeWwyMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L3ERvA6jWCd0qO4NdX/giphy.gif',
        '/drama': 'https://media.giphy.com/media/tyttpH11RzaJZrsIRH2/giphy.gif?cid=790b7611khudsij9jq6ugfpab71qx9a85m4hlig6n1zfdyyq&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        '/classic': 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2l1Y2h0YnRsZTYxNHBsbWttZzJlbGo2Nnd5aGZ4eGtwdzU5bzJoMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J9d0qSv2nsSFG/giphy.gif',
        '/romance': 'https://media.giphy.com/media/l3vRh2ESbSv2PkKdi/giphy.gif?cid=790b7611mdwuhnicrgw63jqrls6vuiij9wxb3qelfjwu4nnn&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        '/': 'https://64.media.tumblr.com/0707cc67f826530cc15d3915855f16d7/tumblr_p7atvmVMNw1sr5vsyo5_r4_540.gifv',
        '/404': '',
        '/addmovie': '',
        '/movie':''
    };

    // Get the image URL based on the current route
    const imageUrl = giphyImages[location.pathname];

    return <GiphyEmbed imageUrl={imageUrl} />;
}
export default GiphyEmbedWithDynamicImage;