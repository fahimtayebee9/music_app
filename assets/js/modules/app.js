
import Songs from "../files/songsList.js";
import PlayList from "../components/playlist.js";
import Player from "../components/player.js";

const App = (() => {
    const loadedSong = Songs.getRandom();

    const init = () => {
        PlayList.init();
        Player.RenderPlayer(loadedSong);
    }

    return {
        init
    }
})();

export default App
