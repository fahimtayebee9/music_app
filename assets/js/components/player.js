import Element from "../modules/element.js";

export default class Player{

    static RenderPlayer = (item) => {
        Element.title.innerHTML = item.title + " - " + item.artist;
        Element.poster.setAttribute('src', item.poster);
        Element.artist.innerHTML = item.artist;
        Element.album.innerHTML = item.album;
        Element.views.innerHTML = item.views;
        Element.release.innerHTML = item.release;
        Element.mediaBg.style.backgroundImage = `${item.background}`;
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
}