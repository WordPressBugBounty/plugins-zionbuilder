var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function() {
  "use strict";
  class Video {
    constructor(domNode, options = {}) {
      __publicField(this, "options");
      __publicField(this, "domNode");
      __publicField(this, "youtubePlayer");
      __publicField(this, "vimeoPlayer");
      __publicField(this, "html5Player");
      __publicField(this, "isInit", false);
      __publicField(this, "videoElement");
      __publicField(this, "muted", false);
      __publicField(this, "playing", false);
      var _a, _b, _c, _d, _e;
      this.domNode = domNode;
      this.options = __spreadValues({
        autoplay: true,
        muted: true,
        loop: true,
        controls: true,
        videoSource: "local",
        isBackgroundVideo: false,
        controlsPosition: "bottom-left",
        playsInline: true
      }, options);
      if (this.options.isBackgroundVideo) {
        (_a = this.domNode) == null ? void 0 : _a.appendChild(this.getControlsHTML());
        (_b = this.domNode) == null ? void 0 : _b.classList.add("hg-video-bg__wrapper");
        this.options.controls = false;
      }
      this.muted = this.options.muted;
      this.playing = this.options.autoplay;
      if (this.options.isBackgroundVideo) {
        if (this.options.muted) {
          (_c = this.domNode) == null ? void 0 : _c.classList.add("hg-video-bg--muted");
        }
        if (this.options.autoplay) {
          (_d = this.domNode) == null ? void 0 : _d.classList.add("hg-video-bg--playing");
        }
      }
      const lazyLoadEnabled = ((_e = window.ZionBuilderVideo) == null ? void 0 : _e.lazy_load) || false;
      if (lazyLoadEnabled) {
        this.intersectionObserer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.enableVideo();
            }
          });
        });
        this.intersectionObserer.observe(this.domNode);
      } else {
        this.enableVideo();
      }
    }
    enableVideo() {
      const modalParent = this.domNode.closest(".zb-modal");
      if (modalParent) {
        modalParent.addEventListener("openModal", () => {
          if (this.isInit) {
            this.play();
          } else {
            this.init();
          }
        });
        modalParent.addEventListener("closeModal", () => {
          this.pause();
        });
      } else {
        this.init();
      }
    }
    initResponsive(iframe) {
      if (!this.options.isBackgroundVideo || !this.domNode || !iframe) {
        return;
      }
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          let width = 0;
          if (entry.contentBoxSize) {
            width = entry.contentBoxSize[0].inlineSize;
          } else {
            width = entry.contentRect.width;
          }
          const elementHeight = this.domNode.clientHeight;
          let height = width * 9 / 16;
          if (height < elementHeight) {
            width = elementHeight * 16 / 9;
            height = elementHeight;
          }
          iframe.style.width = `${width}px`;
          iframe.style.height = `${height}px`;
        }
      });
      resizeObserver.observe(this.domNode);
    }
    destroy() {
      var _a;
      const element = (_a = this.domNode) == null ? void 0 : _a.querySelector(".zb-el-video-element");
      if (element && element.parentElement) {
        element.parentElement.removeChild(element);
      }
    }
    // Plays the video
    play() {
      var _a;
      if (this.youtubePlayer) {
        this.youtubePlayer.playVideo();
      } else if (this.html5Player) {
        this.html5Player.play();
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.play();
      }
      this.playing = true;
      if (this.options.isBackgroundVideo) {
        (_a = this.domNode) == null ? void 0 : _a.classList.add("hg-video-bg--playing");
      }
    }
    // Pause the video
    pause() {
      var _a;
      if (this.youtubePlayer) {
        this.youtubePlayer.pauseVideo();
      } else if (this.html5Player) {
        this.html5Player.pause();
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.pause();
      }
      this.playing = false;
      if (this.options.isBackgroundVideo) {
        (_a = this.domNode) == null ? void 0 : _a.classList.remove("hg-video-bg--playing");
      }
    }
    togglePlay() {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    }
    mute() {
      var _a;
      if (this.youtubePlayer) {
        this.youtubePlayer.mute();
      } else if (this.html5Player) {
        this.html5Player.muted = true;
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.getVolume().then((volume) => {
          vimeoVolume = volume;
        });
        this.vimeoPlayer.setVolume(0);
      }
      this.muted = true;
      if (this.options.isBackgroundVideo) {
        (_a = this.domNode) == null ? void 0 : _a.classList.add("hg-video-bg--muted");
      }
    }
    unMute() {
      var _a;
      if (this.youtubePlayer) {
        this.youtubePlayer.unMute();
      } else if (this.html5Player) {
        this.html5Player.muted = false;
      } else if (this.vimeoPlayer) {
        this.vimeoPlayer.setVolume(vimeoVolume);
      }
      this.muted = false;
      if (this.options.isBackgroundVideo) {
        (_a = this.domNode) == null ? void 0 : _a.classList.remove("hg-video-bg--muted");
      }
    }
    toggleMute() {
      if (this.muted) {
        this.unMute();
      } else {
        this.mute();
      }
    }
    init() {
      if (this.options.use_image_overlay) {
        this.initBackdrop();
      } else {
        this.initVideo();
      }
    }
    initBackdrop() {
      var _a;
      const backdrop = (_a = this.domNode) == null ? void 0 : _a.querySelector(".zb-el-zionVideo-overlay");
      backdrop == null ? void 0 : backdrop.addEventListener("click", () => {
        var _a2;
        this.initVideo();
        (_a2 = backdrop.parentElement) == null ? void 0 : _a2.removeChild(backdrop);
      });
    }
    // Initialize the video
    initVideo() {
      var _a, _b, _c;
      if (this.isInit) {
        return;
      }
      if (((_a = this.options) == null ? void 0 : _a.videoSource) === "youtube") {
        this.initYoutube();
      } else if (((_b = this.options) == null ? void 0 : _b.videoSource) === "local") {
        this.initHTML5();
      } else if (((_c = this.options) == null ? void 0 : _c.videoSource) === "vimeo") {
        this.initVimeo();
      }
      this.isInit = true;
    }
    getYoutubeVideoID(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : void 0;
    }
    onYoutubeAPIReady(callback) {
      if (window.YT && window.YT.Player) {
        callback();
        return;
      } else if (!window.ZbAttachedYoutubeScript) {
        this.attachYoutubeScript();
      }
      setTimeout(() => {
        this.onYoutubeAPIReady(callback);
      }, 200);
    }
    attachYoutubeScript() {
      var _a;
      if (window.ZbAttachedYoutubeScript) {
        return;
      }
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      (_a = firstScriptTag == null ? void 0 : firstScriptTag.parentNode) == null ? void 0 : _a.insertBefore(tag, firstScriptTag);
      window.ZbAttachedYoutubeScript = true;
    }
    initYoutube() {
      var _a;
      if (!this.options.youtubeURL) {
        return;
      }
      const videoID = this.getYoutubeVideoID(this.options.youtubeURL);
      const videoElement = document.createElement("div");
      videoElement.classList.add("zb-el-video-element");
      (_a = this.domNode) == null ? void 0 : _a.appendChild(videoElement);
      const paramsString = this.options.youtubeURL.split("?")[1];
      const playerParams = new URLSearchParams(paramsString);
      const playerVarsFromURL = {};
      for (const entry of playerParams.entries()) {
        playerVarsFromURL[entry[0]] = entry[1];
      }
      if (playerVarsFromURL.v) {
        delete playerVarsFromURL.v;
      }
      if (!videoID) {
        return;
      }
      const playerVars = __spreadProps(__spreadValues({}, playerVarsFromURL), {
        autoplay: this.options.autoplay ? 1 : 0,
        controls: this.options.controls ? 1 : 0,
        mute: this.options.muted ? 1 : 0,
        playsinline: 1,
        modestbranding: 1,
        origin: window.location.host,
        loop: this.options.loop ? 1 : 0
      });
      if (this.options.loop) {
        playerVars.playlist = videoID;
      }
      this.onYoutubeAPIReady(() => {
        this.youtubePlayer = new window.YT.Player(videoElement, {
          videoId: videoID,
          playerVars,
          host: "https://www.youtube-nocookie.com"
        });
        this.initResponsive(this.youtubePlayer.h);
      });
    }
    onVimeoApiReady(callback) {
      if (window.Vimeo && window.Vimeo.Player) {
        callback();
        return;
      } else if (!window.ZbAttachedVimeoScript) {
        this.attachVimeoScript();
      }
      setTimeout(() => {
        this.onVimeoApiReady(callback);
      }, 200);
    }
    attachVimeoScript() {
      var _a;
      if (window.ZbAttachedVimeoScript) {
        return;
      }
      const tag = document.createElement("script");
      tag.src = "https://player.vimeo.com/api/player.js";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      (_a = firstScriptTag == null ? void 0 : firstScriptTag.parentNode) == null ? void 0 : _a.insertBefore(tag, firstScriptTag);
      window.ZbAttachedVimeoScript = true;
    }
    initVimeo() {
      var _a, _b;
      if (!this.options.vimeoURL) {
        return;
      }
      const videoElement = document.createElement("div");
      videoElement.classList.add("zb-el-video-element");
      (_a = this.domNode) == null ? void 0 : _a.appendChild(videoElement);
      const playerVars = {
        id: (_b = this.options) == null ? void 0 : _b.vimeoURL,
        background: false,
        muted: this.options.muted,
        transparent: true,
        autoplay: this.options.autoplay,
        controls: this.options.controls
      };
      if (this.options.loop) {
        playerVars.loop = 1;
      }
      this.onVimeoApiReady(() => {
        this.vimeoPlayer = new window.Vimeo.Player(videoElement, playerVars);
        this.vimeoPlayer.on("loaded", () => {
          this.initResponsive(this.vimeoPlayer.element);
        });
      });
    }
    // Init HTML5 Video
    initHTML5() {
      var _a;
      const videoElement = document.createElement("video");
      if (!this.options.mp4) {
        return;
      }
      if (this.options.autoplay) {
        videoElement.setAttribute("autoplay", "");
      }
      videoElement.muted = this.options.muted;
      if (this.options.muted) {
        videoElement.setAttribute("muted", "");
      }
      if (this.options.loop) {
        videoElement.setAttribute("loop", "");
      }
      if (this.options.controls) {
        videoElement.controls = true;
      }
      if (this.options.playsInline) {
        videoElement.playsInline = true;
      }
      videoElement.src = this.options.mp4;
      videoElement.classList.add("zb-el-video-element");
      (_a = this.domNode) == null ? void 0 : _a.appendChild(videoElement);
      this.html5Player = videoElement;
    }
    getControlsHTML() {
      const videoControlsWrapper = document.createElement("div");
      videoControlsWrapper.className = "hg-video-bg__controls";
      videoControlsWrapper.dataset.position = this.options.controlsPosition;
      const playButton = document.createElement("span");
      playButton.className = "hg-video-bg__controls-button hg-video-bg__controls-button--play";
      playButton.innerHTML = `
			<svg class="zb-icon hg-video-bg__controls-button--svg-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M15.1 16.3 42.5 32 15.1 47.7V16.3M8.7 5.1v53.8L55.3 32 8.7 5.1z"/></svg>
			<svg class="zb-icon hg-video-bg__controls-button--svg-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M11.5 10.9h10.2v42.2H11.5V10.9zm30.7 0h10.2v42.2H42.2V10.9z"/></svg>
		`;
      const muteButton = document.createElement("span");
      muteButton.className = "hg-video-bg__controls-button hg-video-bg__controls-button--mute";
      muteButton.innerHTML = `
			<svg class="zb-icon hg-video-bg__controls-button--svg-mute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M24.7 16.3v31.6l-10.1-5.8-1.5-.9H6.4V22.9h6.7l1.5-.9 10.1-5.7m6.4-11.2L11.4 16.5H0v31h11.4l19.7 11.4V5.1zM64 23.8l-4.5-4.5-8.2 8.2-8.2-8.2-4.5 4.5 8.1 8.2-8.1 8.2 4.5 4.5 8.2-8.2 8.2 8.2 4.5-4.5-8.2-8.2 8.2-8.2z"/></svg>
			<svg class="zb-icon hg-video-bg__controls-button--svg-unmute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M24.7 16.3v31.6l-10.1-5.8-1.6-.9H6.4V22.9H13l1.5-.9 10.2-5.7m6.4-11.2L11.4 16.5H0v31h11.4l19.7 11.4V5.1zM53 58.6l-4.5-4.5c12.2-12.2 12.2-32 0-44.1L53 5.5c14.7 14.6 14.7 38.4 0 53.1zm-10.5-8.7L38 45.4c7.4-7.4 7.4-19.3 0-26.7l4.5-4.5c9.8 9.7 9.8 25.9 0 35.7z"/></svg>
		`;
      videoControlsWrapper.appendChild(playButton);
      videoControlsWrapper.appendChild(muteButton);
      muteButton.addEventListener("click", this.toggleMute.bind(this));
      playButton.addEventListener("click", this.togglePlay.bind(this));
      return videoControlsWrapper;
    }
  }
  window.zbVideo = Video;
  document.querySelectorAll(".zb-el-zionVideo, .zbjs_video_background").forEach(
    (domNode) => {
      const configAttr = domNode.dataset.zionVideo;
      const options = configAttr ? JSON.parse(configAttr) : {};
      new Video(domNode, options);
    }
  );
  window.zbScripts = window.zbScripts || {};
  window.zbScripts.video = Video;
})();
