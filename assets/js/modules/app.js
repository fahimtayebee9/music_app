
import Songs from "../files/songsList.js";
import PlayList from "../components/playlist.js";
import Player from "../components/player.js";
import Element from "./element.js";
const App = (() => {
    const init = () => {
        Player.init();
        PlayList.init();
    }

    const openPlaylist = () => {
        Element.playlistTable.classList.add('slide-in');
        Element.playlistTable.classList.remove('slide-out');
        Element.playlistTable.style.right = "0%";
    }

    const closePlaylist = () => {
        Element.playlistTable.classList.remove('slide-in');
        Element.playlistTable.classList.add('slide-out');
        Element.playlistTable.style.right = "-58%";
    }

    const eventListeners = () => {
        if (Element.playlistBtn != null) {
            Element.playlistBtn.addEventListener('click', function () {
                openPlaylist();
            });
        }

        if (Element.closeBtn != null) {
            Element.closeBtn.addEventListener('click', function () {
                closePlaylist();
            });
        }
    }

    return {
        init,
        eventListeners,
        closePlaylist
    }
})();

export default App
