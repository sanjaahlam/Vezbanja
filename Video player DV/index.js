let playBtn = document.querySelector("#play");
let reloadBtn = document.querySelector("#reload");
let video = document.querySelector("video");

playBtn.addEventListener("click", playVideo);
reloadBtn.addEventListener("click", relaodVideo);

function playVideo() {
  if (this.getAttribute("src") == "play.png") {
    video.play();
    this.setAttribute("src", "pause.png");
  } else {
    video.pause();
    this.setAttribute("src", "play.png");
  }
}

function relaodVideo() {
  video.load();
  playBtn.setAttribute("src", "play.png");
}

/*(function(){
  let videoPlayer = {
    playBtn: document.querySelector("#play"),
    reloadBtn: document.querySelector("#reload"),
    video: document.querySelector("video"),
    init: function () {
      videoPlayer.playBtn.addEventListener("click", videoPlayer.playVideo);
      videoPlayer.reloadBtn.addEventListener("click", videoPlayer.reloadVideo);
    },
    playVideo: function () {
      if (this.getAttribute("src") == "play.png") {
        videoPlayer.video.play();
        this.setAttribute("src", "pause.png");
      } else {
        videoPlayer.video.pause();
        this.setAttribute("src", "play.png");
      }
    },
  
    reloadVideo: function () {
      videoPlayer.video.load();
      videoPlayer.playBtn.setAttribute("src", "play.png");
    },
  };
  videoPlayer.init();
  

})()

let videoPlayer = {
  playBtn: document.querySelector("#play"),
  reloadBtn: document.querySelector("#reload"),
  video: document.querySelector("video"),
  init: function () {
    videoPlayer.playBtn.addEventListener("click", videoPlayer.playVideo);
    videoPlayer.reloadBtn.addEventListener("click", videoPlayer.reloadVideo);
  },
  playVideo: function () {
    if (this.getAttribute("src") == "play.png") {
      videoPlayer.video.play();
      this.setAttribute("src", "pause.png");
    } else {
      videoPlayer.video.pause();
      this.setAttribute("src", "play.png");
    }
  },

  reloadVideo: function () {
    videoPlayer.video.load();
    videoPlayer.playBtn.setAttribute("src", "play.png");
  },
};
videoPlayer.init();*/
