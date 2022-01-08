import { observable, action } from 'mobx'
class LeftSelectBarStore {
    @observable selectUrl = ''
    @action changeVideoUrl = (url) => {
        this.selectUrl = url
        this.handleVideoInit(url)
    }
    @action handleVideoInit = (url) => {
        if (url) {
            new window.Aliplayer({
                "id": "player-con",
                "source": url,
                'height': '100vh',
                "autoplay": true,
                "isLive": true,
                "playsinline": true,
                "preload": true,
                "controlBarVisibility": "hover",
                "useH5Prism": true
            }, function (player) {
                console.log('player: ', player);
                console.log("The player is created");
            }
            );
        }
    }
}
const leftSelectBarStore = new LeftSelectBarStore();
export default leftSelectBarStore;
