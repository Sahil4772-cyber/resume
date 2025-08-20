// Initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let homeLink = document.getElementById('homeLink');
let aboutLink = document.getElementById('aboutLink');
let homeSection = document.getElementById('homeSection');
let aboutSection = document.getElementById('aboutSection');

homeLink.addEventListener('click', () => {
  homeSection.style.display = 'block';
  aboutSection.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  aboutSection.style.display = 'block';
});


let songs = [
  
  { songName: "Surat Al-Fatihah", filePath: "songs/1.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Baqarah", filePath: "songs/2.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ali 'Imran", filePath: "songs/3.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Nisa", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ma'idah", filePath: "songs/5.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-An'am", filePath: "songs/6.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-A'raf", filePath: "songs/7.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Anfal", filePath: "songs/8.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Tawbah", filePath: "songs/9.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Yunus", filePath: "songs/10.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Hud", filePath: "songs/11.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Yusuf", filePath: "songs/12.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ar-Ra'd", filePath: "songs/13.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ibrahim", filePath: "songs/14.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Hijr", filePath: "songs/15.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Nahl", filePath: "songs/16.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Isra", filePath: "songs/17.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Kahf", filePath: "songs/18.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Maryam", filePath: "songs/19.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Taha", filePath: "songs/20.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Anbiya", filePath: "songs/21.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Hajj", filePath: "songs/22.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Mu’minun", filePath: "songs/23.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Nur", filePath: "songs/24.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Furqan", filePath: "songs/25.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ash-Shu’ara", filePath: "songs/26.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Naml", filePath: "songs/27.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Qasas", filePath: "songs/28.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ankabut", filePath: "songs/29.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ar-Rum", filePath: "songs/30.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Luqman", filePath: "songs/031.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat As-Sajdah", filePath: "songs/032.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ahzab", filePath: "songs/033.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Saba", filePath: "songs/034.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Fatir", filePath: "songs/035.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ya-Sin", filePath: "songs/036.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat As-Saffat", filePath: "songs/037.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Sad", filePath: "songs/038.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Az-Zumar", filePath: "songs/039.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ghafir", filePath: "songs/040.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Fussilat", filePath: "songs/041.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ash-Shura", filePath: "songs/042.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Az-Zukhruf", filePath: "songs/043.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ad-Dukhan", filePath: "songs/044.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Jathiyah", filePath: "songs/045.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ahqaf", filePath: "songs/046.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Muhammad", filePath: "songs/047.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Fath", filePath: "songs/048.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Hujurat", filePath: "songs/049.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Qaf", filePath: "songs/050.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Adh-Dhariyat", filePath: "songs/051.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Tur", filePath: "songs/052.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Najm", filePath: "songs/053.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Qamar", filePath: "songs/054.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ar-Rahman", filePath: "songs/055.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Waqi’ah", filePath: "songs/056.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Hadid", filePath: "songs/057.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Mujadila", filePath: "songs/058.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Hashr", filePath: "songs/059.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Mumtahanah", filePath: "songs/060.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat As-Saff", filePath: "songs/061.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Jumu’ah", filePath: "songs/062.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Munafiqun", filePath: "songs/063.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Taghabun", filePath: "songs/064.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Talaq", filePath: "songs/065.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Tahrim", filePath: "songs/066.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Mulk", filePath: "songs/067.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Qalam", filePath: "songs/068.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Haqqah", filePath: "songs/069.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ma’arij", filePath: "songs/070.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Nuh", filePath: "songs/071.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Jinn", filePath: "songs/072.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Muzzammil", filePath: "songs/073.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Muddaththir", filePath: "songs/074.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Qiyamah", filePath: "songs/075.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Insan", filePath: "songs/076.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Mursalat", filePath: "songs/077.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Naba", filePath: "songs/078.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Nazi’at", filePath: "songs/079.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Abasa", filePath: "songs/080.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Takwir", filePath: "songs/081.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Infitar", filePath: "songs/082.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Mutaffifin", filePath: "songs/083.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Inshiqaq", filePath: "songs/084.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Buruj", filePath: "songs/085.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Tariq", filePath: "songs/086.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-A’la", filePath: "songs/087.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ghashiyah", filePath: "songs/088.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Fajr", filePath: "songs/089.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Balad", filePath: "songs/090.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ash-Shams", filePath: "songs/091.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Lail", filePath: "songs/092.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ad-Duhaa", filePath: "songs/093.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Ash-Sharh", filePath: "songs/094.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Tin", filePath: "songs/095.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-‘Alaq", filePath: "songs/096.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Qadr", filePath: "songs/097.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Bayyinah", filePath: "songs/098.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Az-Zalzalah", filePath: "songs/099.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-‘Adiyat", filePath: "songs/100.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Qari’ah", filePath: "songs/101.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat At-Takathur", filePath: "songs/102.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-‘Asr", filePath: "songs/103.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Humazah", filePath: "songs/104.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Fil", filePath: "songs/105.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Quraysh", filePath: "songs/106.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ma’un", filePath: "songs/107.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Kawthar", filePath: "songs/108.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Kafirun", filePath: "songs/109.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Nasr", filePath: "songs/110.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Masad", filePath: "songs/111.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Ikhlas", filePath: "songs/112.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat Al-Falaq", filePath: "songs/113.mp3", coverPath: "cover/4.jpg" },
  { songName: "Surat An-Nas", filePath: "songs/114.mp3", coverPath: "cover/4.jpg" },
  // ...
  // continues till 114


];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

const playSong = (index) => {
  songIndex = index;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  makeAllPlays();
  document.getElementById(songIndex).classList.remove("fa-circle-play");
  document.getElementById(songIndex).classList.add("fa-circle-pause");
};

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    let index = parseInt(e.target.id);
    if (index === songIndex && !audioElement.paused) {
      audioElement.pause();
      e.target.classList.remove("fa-circle-pause");
      e.target.classList.add("fa-circle-play");
      masterPlay.classList.remove("fa-circle-pause");
      masterPlay.classList.add("fa-circle-play");
      gif.style.opacity = 0;
    } else {
      playSong(index);
    }
  });
});

document.getElementById("next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
});

document.getElementById("previous").addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
});

audio.pause();
audio.src = newSrc;
audio.load();
audio.play().catch((err) => console.log("Play error:", err));

