/*let playBtn = document.querySelector("#play");
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
}*/

//ENKAPSUALIZACIJA KODA

/*(function () {
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
})(); */

//CONSTRUCTOR FUNCTION

/*(function () {
  function VideoPlayer() {
    this.playBtn = document.querySelector("#play");
    this.reloadBtn = document.querySelector("#reload");
    this.video = document.querySelector("video");
    this.init = function () {
      this.playBtn.addEventListener("click", this.playVideo.bind(this));
      this.reloadBtn.addEventListener("click", this.reloadVideo.bind(this));
    };
    this.playVideo = function () {
      if (this.playBtn.getAttribute("src") == "play.png") {
        this.video.play();
        this.playBtn.setAttribute("src", "pause.png");
      } else {
        this.video.pause();
        this.playBtnsetAttribute("src", "play.png");
      }
    };
    this.reloadVideo = function () {
      this.video.load();
      this.playBtn.setAttribute("src", "play.png");
    };
  }
  let vp = new VideoPlayer().init();
})();*/

//Finalna verzija (više playera)

(function () {
  function VideoPlayer(id) {
    this.container = document.querySelector("#" + id);
    this.playBtn = this.container.querySelector(".play");
    this.reloadBtn = this.container.querySelector(".reload");
    this.video = this.container.querySelector("video");
    this.init = function () {
      this.playBtn.addEventListener("click", this.playVideo.bind(this));
      this.reloadBtn.addEventListener("click", this.reloadVideo.bind(this));
    };
    this.playVideo = function () {
      if (this.playBtn.getAttribute("src") == "play.png") {
        this.video.play();
        this.playBtn.setAttribute("src", "pause.png");
      } else {
        this.video.pause();
        this.playBtnsetAttribute("src", "play.png");
      }
    };
    this.reloadVideo = function () {
      this.video.load();
      this.playBtn.setAttribute("src", "play.png");
    };
  }
  let vp = new VideoPlayer("one").init();
  let vp2 = new VideoPlayer("two").init();
})();
