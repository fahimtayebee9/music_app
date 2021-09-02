import Songs from "../files/songsList.js";
import Element from "../modules/element.js";


const Player = (() => {

    const state = {
        "isplaying"  : false,
        "currentSong": Songs.getRandom()
    }
    let song = null;

    const setState = (item) => {
        state.currentSong = item.currentSong;
        state.isplaying   = item.isplaying;
        RenderPlayerButton();
    }

    const getState = () => {
        return state;
    }

    const RenderSongInfo = (item) => {
        Element.title.innerHTML = item.title + " - " + item.artist;
        Element.poster.setAttribute('src', item.poster);
        Element.artist.innerHTML = item.artist;
        Element.album.innerHTML = item.album;
        Element.views.innerHTML = item.views;
        Element.release.innerHTML = item.release;
        Element.mediaBg.style.backgroundImage = `${item.background}`;
        Element.totalTime.innerHTML = item.duration;
        if(item.mode == true){
            Element.msCon.classList.add('text-dark');
            Element.msCon.classList.remove('text-white');
        }
        else{
            Element.msCon.classList.remove('text-dark');
            Element.msCon.classList.add('text-white');
            Element.timeElements.classList.add('text-dark');
        }
    }

    const renderProgressBar = (item) => {
        
    }

    const RenderPlayerButton = () => {
        song = new Audio(state.currentSong.audio);
        Element.ppSongBtn.children[0].className = state.isplaying ? "fas fa-pause danger" : "fas fa-play success";
    }

    const eventListeners = () => {
        Element.ppSongBtn.addEventListener('click', event => {
            if(state.isplaying){
                song.pause();
                state.isplaying = false;
            }
            else{
                song.play();
                renderProgressBar(song);
                state.isplaying = true;
            }
            RenderPlayerButton();
        });

        Element.prevSong.addEventListener('click', event => {
            let currentIndex = Songs.songs_list.indexOf(state.currentSong);
            if(currentIndex > 0 && currentIndex < Songs.songs_list.length){
                GetSongByIndex(--currentIndex);
            }
        });

        Element.nextSong.addEventListener('click', event => {
            let currentIndex = Songs.songs_list.indexOf(state.currentSong);
            if(currentIndex >= 0 && currentIndex < Songs.songs_list.length - 1){
                GetSongByIndex(++currentIndex);
            }
        });
    }

    const GetSongByIndex = (index) => {
        let song = Songs.songs_list[index];
        state.currentSong = song;
        RenderSongInfo(song);
        return song;
    }

    const init = () => {
        RenderSongInfo(state.currentSong);
        eventListeners();
    }

    return {
        init,
        GetSongByIndex,
        setState,
        getState
    }

})();
export default Player;