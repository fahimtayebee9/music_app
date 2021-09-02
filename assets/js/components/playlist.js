import Element from "../modules/element.js";
import Songs from "../files/songsList.js";
import Player from "./player.js";
import App from "../modules/app.js";
import Trackbar from "./trackbar.js";

const PlayList = (() => {
    let currentPlayingIndex = Songs.songs_list.indexOf[Player.getState().currentSong];
    let currentSong         = new Audio(Player.getState().currentSong.audio);
    let isPlaying           = false;

    const toggleAction = () => {
        return currentSong.paused ? currentSong.play() : currentSong.pause();
    }

    const changeSong = (itemIndex) => {
        if(itemIndex == currentPlayingIndex) {
            toggleAction();
            LoadPlaylist();
            isPlaying = currentSong.paused ? false : true;
            Player.setState({
                currentSong: Songs.songs_list[currentPlayingIndex],
                isPlaying : isPlaying,
            });

            Trackbar.setState({
                currentTime: currentSong.currentTime,
                totalTime: currentSong.duration,
                currentwidth: 0
            });
        }
        else{
            currentPlayingIndex = itemIndex;
            currentSong.src = Songs.songs_list[itemIndex].audio;
            toggleAction();
            LoadPlaylist();
            Player.GetSongByIndex(currentPlayingIndex);
            isPlaying = currentSong.paused ? false : true;
            Player.setState({
                currentSong: Songs.songs_list[currentPlayingIndex],
                isPlaying : isPlaying,
            });

            Trackbar.setState({
                currentTime: currentSong.currentTime,
                totalTime: currentSong.duration,
                currentwidth: 0
            });
        }
    }

    const toggleIcon = (index) => {
        if(currentPlayingIndex == index){
            return currentSong.paused ? 'fa-play' : 'fa-pause';
        }
        else{
            return 'fa-play';
        }
    }

    const LoadPlaylist = () => {
        let markUp = "";
        Songs.songs_list.forEach( (item, index) => {
            markUp += `<tr class="s-tr ${(index == currentPlayingIndex) ? 'active': ''}">
                            <th scope="row">
                                <div class="tbl-img-box">
                                    <img src="${item.poster}" alt="" class="img-fluid tbl-img">
                                    <div class="icon-box ${(index == currentPlayingIndex) ? 'active': ''}">
                                        <button class="btns btn-pp" id="pp-song">
                                            <i class="fa ${toggleIcon(index)}"  id="${index}"></i>
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <td>
                                <div class="tbl-con">
                                    <p class="s-title">${item.title}</p>
                                    <p class="s-artist font-weight-normal">${item.artist}</p>
                                </div>
                            </td>
                            <td>
                                <div class="tbl-con">
                                    <p class="s-duration">${item.duration}</p>
                                </div>
                            </td>
                        </tr>`;
        });
        Element.pltBody.innerHTML = markUp;
        Element.songCount.innerHTML = `${Songs.songs_list.length} Songs`;
    }

    const eventListeners = () => {
        Element.pltBody.addEventListener('click', event => {
            if(event.target.matches('.fa')){
                changeSong(event.target.id);
                LoadPlaylist();
                Player.setState({
                    currentSong: Songs.songs_list[currentPlayingIndex],
                    isPlaying : isPlaying,
                });

                if(isPlaying){
                    App.closePlaylist();
                }
            }
        });
    }

    const init = () => {
        LoadPlaylist();
        eventListeners();
    }

    return {
        init
    }

})();
export default PlayList;