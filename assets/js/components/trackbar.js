import Element from "../modules/element.js";

const Trackbar = (() =>{
    const state = {
        "currentTime": 0,
        "totalTime": 0,
        "currentwidth": 0
    }

    const setState = (obj) => {
        state.currentTime = obj.currentTime;
        state.totalTime = obj.totalTime;
        state.currentwidth = (obj.currentTime / obj.totalTime) * 100;
        renderBar();
    }

    const renderBar  = () => {
        Element.progressbar.style.width = `${(state.currentTime / state.totalTime) * 100}%`;
        console.log(state);
    }

    return { setState }

})();

export default Trackbar;