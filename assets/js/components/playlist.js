import Element from "../modules/element.js";
import Songs from "../files/songsList.js";
import Player from "./player.js";

const PlayList = (() => {
    let currentPlayingIndex = 0;
    let currentSong         = new Audio(Songs.songs_list[currentPlayingIndex].audio);
    // currentSong.crossOrigin = 'anonymous';
    let isPlaying           = false;

    const toggleAction = () => {
        return currentSong.paused ? currentSong.play() : currentSong.pause();
    }

    const changeSong = (itemIndex) => {
        if(itemIndex == currentPlayingIndex) {
            toggleAction();
        }
        else{
            currentPlayingIndex = itemIndex;
            currentSong.src = Songs.songs_list[itemIndex].audio;
            toggleAction();
            console.log("IND :: " + currentPlayingIndex);
            console.log("SRC :: " + currentSong.src)
        }
    }

    const LoadPlaylist = () => {
        let markUp = "";

        const toggleIcon = (index) => {
            if(currentPlayingIndex == index){
                return currentSong.paused ? 'fa-play' : 'fa-pause';
            }
            else{
                return 'fa-play';
            }
        }

        Songs.songs_list.forEach( (item, index) => {
            markUp += `<tr class="s-tr ${(index == currentPlayingIndex) ? 'active': ''}">
                            <th scope="row">
                                <div class="tbl-img-box">
                                    <img src="${item.poster}" alt="" class="img-fluid tbl-img">
                                    <div class="icon-box ${(index == currentPlayingIndex) ? 'active': ''}">
                                        <button class="btns btn-pp" id="pp-song">
                                            <i class="fas ${toggleIcon(index)}"></i>
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
        // document.querySelectorAll('.s-tr').forEach( item => {
        //     Element.pltBody.addEventListener('click', event => {
        //         if(event.target.matches('.fas')){
        //             console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode)
        //             changeSong([...document.querySelectorAll('.s-tr')].indexOf(item));
        //             LoadPlaylist();
        //         }
        //     });
        // });
        Element.pltBody.addEventListener('click', event => {
            if(event.target.matches('.fas')){
                const item = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                changeSong([...item.parentNode.children].indexOf(item));
                LoadPlaylist();
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