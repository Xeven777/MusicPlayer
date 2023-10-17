let musicplayer = document.querySelector(".music-player-container");
let togglePlayer = document.querySelector(".toggle-player");
let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".track-name");
let soundbars = document.querySelector(".sound-bars");
let trackArtist = document.querySelector(".track-artist");
let trackNav = document.querySelector(".track-nav");
let playPausebtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let currentPlaybackTime = 0;
let lottiePlayer = document.getElementById("lottiePlayer");

let prevBtn = document.querySelector(".prev-track");
let trackIndex = 0;
let isPlaying = false;
let isHidden = false;
let currentTrack = document.createElement("audio");

togglePlayer.addEventListener("click", function () {
  isHidden = !isHidden;
  if (isHidden) {
    musicplayer.classList.remove("hide");
    togglePlayer.innerHTML = "<ion-icon name='remove-outline'></ion-icon>";
    trackInfo.style.transitionDelay = "0.4s";
    trackNav.style.transitionDelay = "0.4s";
    soundbars.style.transitionDelay = "0.4s";
  } else {
    musicplayer.classList.add("hide");
    togglePlayer.innerHTML = "<ion-icon name='add-outline'></ion-icon>";
    trackInfo.style.transitionDelay = "0s";
    trackNav.style.transitionDelay = "0s";
    soundbars.style.transitionDelay = "0s";
  }
});

let trackList = [
  {
    name: "Vengeance",
    artist: "iwilldiehere",
    path: "./music/Vengeance(MP3_160K).mp3",
  },
  {
    name: "Hope",
    artist: "XXXTentacion",
    path: "./music/XXXTENTACION - Hope(MP3_128K).mp3",
  },
  {
    name: "Moth To A Flame",
    artist: "Weeknd",
    path: "./music/Swedish House Mafia and The Weeknd - Moth To A Flame (Official Video)(MP3_160K).mp3",
  },
  {
    name: "Breathe Without",
    artist: "Nurko",
    path: "./music/Nurko ft. Luma - Breathe Without [Lyric Video] (Proximity Release)(MP3_160K).mp3",
  },
  {
    name: "Nothing's Perfect",
    artist: "NGHTMRE",
    path: "./music/NGHTMRE - Nothing_s Perfect (TWISTED   Tearz Remix) (feat. Oliver Tree)(MP3_320K).mp3",
  },
  {
    name: "Save me",
    artist: "Nurko",
    path: "./music/NURKO_ Kyle Hume - Save Me (From Myself) (Official Visualizer)(MP3_160K).mp3",
  },
];

function loadTrack(trackIndex) {
  currentTrack.src = trackList[trackIndex].path;
  currentTrack.load();
  trackName.textContent = trackList[trackIndex].name;
  trackArtist.textContent = trackList[trackIndex].artist;
  currentTrack.addEventListener("ended", nextTrack);
}
loadTrack(trackIndex);

function playpauseTrack() {
  if (!isPlaying) {
    playTrack();
  } else {
    pauseTrack();
  }
}
function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPausebtn.innerHTML = "<ion-icon name='play-sharp'></ion-icon>";
  lottiePlayer.pause();
}

function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPausebtn.innerHTML = "<ion-icon name='pause-sharp'></ion-icon>";
  lottiePlayer.play();
}

function nextTrack() {
  if (trackIndex < trackList.length - 1) {
    trackIndex++;
  } else {
    trackIndex = 0;
  }
  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex--;
  } else {
    trackIndex = trackList.length - 1;
  }
  loadTrack(trackIndex);
  playTrack();
}

playPausebtn.addEventListener("click", function () {
  loadTrack(trackIndex); // Load the track
  playpauseTrack(); // Start playback
});
nextBtn.addEventListener("click", function () {
  nextTrack(); //next one
});
prevBtn.addEventListener("click", function () {
  prevTrack(); //previous one
});
