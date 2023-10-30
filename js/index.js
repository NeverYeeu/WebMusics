import {songs, lyrics, genreMusic} from "./src.js"
import {renderImage,renderLyrics, handleSong} from "./function.js"
import {renderSongs, renderGenre} from "./function.js"
// -----------------------------------------------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audio = $('#audio');
const playBtn = $('.play');
const pauseBtn = $('.pause');
const col1 = $('.music_col:nth-child(1)')
const col2 = $('.music_col:nth-child(2)')
const boxBackg = $('.box-background')
const controlIcon = $$('.col-play_control > .control-icon')
const timeBar = $('#time-bar');
const boxTime = $('.box-time');
// -----------------------------------------------------------------


// Render nội dung ra trình duyệt------------------------------------------------------------------
boxBackg.innerHTML = renderImage();
col1.innerHTML = handleSong;
const genreList = $('.genre_list');
genreList.innerHTML = genreMusic.map(renderGenre).join('');
// Xử lý khi ta click vào bài nhạc-----------------------------------------------------------------
	const listSong = $$('.col-song_wrap');
	const activePause= $$('.col-song_active > .active-pause')
	// Render Audio--------------------------------------------------------------------------------------
var playName = $('.col-play_name')
var playSinger = $('.col-play_singer')
let idMusic = $(".identify-music")
	handleListSongs(listSong, songs)
function handleListSongs(arr, newArray) {
	arr.forEach((song, index) => {
		song.addEventListener('click', () => {
			// Chèn audio----------------------------------------------------------
			handleAudio(index)
			// Thêm hiệu ứng khi click-----------------------------
			if($('.active-pause.open')){
				$('.active-pause.open').classList.remove('open')
				$('.col-song_wrap.active-song').classList.remove('active-song')
			}
			song.classList.add('active-song')
			activePause[index].classList.add('open')
			// Khi phát nhạc---------------------------------------
			audio.play()
				
			//Khi tiến độ bài hát thay đổi--------------------------
			loadRangeTime();
		})
	})
}
	const list = $$('.genre_list > li')
list.forEach((item, key) => {
	item.addEventListener('click', () => {
		let genreName = item.innerText;
		col1.innerHTML = newArray.map(renderSongs).join('')
		let newList = $$('.col-song_wrap')
		handleListSongs(newList, newArray)
		if($('.genre_list > li.active3')){
			$('.genre_list > li.active3').classList.remove('active3')
		}
		item.classList.toggle('active3')
	})
})
// Xử lý với Lời Bài Hát--------------------------------------------------------------------------
	const closeList = $('.lyrics-box_icon');
	const boxLyric = $('.lyrics-box');
	const lyricsIcon =  $$('.lyric-icon');
function lyricSong() {
	lyricsIcon.forEach((icon, index) => {
		icon.addEventListener('click', () => {

			if($('.lyric-icon.active')){
				$('.lyric-icon.active').classList.remove('active')
			}
			icon.classList.add('active')			 
			let currentLyric = lyrics[index].lyric
			boxLyric.innerHTML = currentLyric.map(renderLyrics).join('')
			col2.classList.toggle('extra-lyric')

			if (col2.classList.contains('extra-lyric')){
				col2.classList.remove('close');
				boxLyric.classList.remove('close');
				closeList.classList.add('open')
				col1.classList.add('close')
			} else {
				boxLyric.classList.add('close');
				icon.classList.remove('active');
				closeList.classList.remove('open')
			}			
		})
	})
// Nút close list Box-------------------------------------------------------------------------------
	closeList.addEventListener('click', () => {
		boxLyric.classList.add('close')
		col2.classList.remove('extra-lyric')
		closeList.classList.remove('open')
		col1.classList.remove('close')
	})
}
lyricSong();

// Chay phat nhac
function controlPlay() {
	playBtn.onclick = () => {
		audio.play();
		pauseBtn.classList.toggle('close')
		playBtn.classList.toggle('close')
	}
	pauseBtn.onclick = () => {
		audio.pause()
		playBtn.classList.toggle('close')
		pauseBtn.classList.toggle('close')
	}
}
controlPlay();

// Hiển thị thanh thời gian--------------------------------------------------------------------------
function loadRangeTime() {
	audio.ontimeupdate = (() => {
		const progessPercent = Math.floor(audio.currentTime / audio.duration * 100)
		timeBar.value = progessPercent
	})
// Xử lý bài hát khi tua-----------------------------------------------------------------------------
	timeBar.onchange = (e) => {
		const seekTime = audio.duration / 100 * e.target.value;
		audio.currentTime = seekTime
	}
}
const navWebsite = $$('.box-nav > div')
const boxGenre = $('.box-genre_content')
function toggleBoxGenre() {
	navWebsite[0].onclick = () => {
		songs.forEach((item, key) => {
			item.addEventListener('click', () => {
				let genreName = item.innerText;
				let newArray = dd[0][genreName]
				col1.innerHTML = newArray.map(renderSongs).join('')
				let newList = $$('.col-song_wrap')
				handleListSongs(newList, newArray)
			})
		})
	}
	navWebsite[1].onclick = () => {
		boxGenre.classList.toggle('translate')
		navWebsite[1].classList.toggle('active2')
	}
}
toggleBoxGenre()
const boxMusic = $('.box-music');
navWebsite[2].addEventListener('click', () => {
	boxMusic.classList.toggle('close');
	navWebsite[2].classList.toggle('active2');
	boxTime.classList.toggle('close')
})
navWebsite[4].addEventListener('click', () => {
	boxBackg.innerHTML = renderImage()
})

// -----------------------------------------------------------------
const prevBtn = $('.prev-song');
const nextBtn = $('.next-song');
let currentMusic = +idMusic.innerText;
const songLength = $$('.music_col-song').length;
function handleMusic(){
	nextBtn.addEventListener('click', () => {
		let nextMusic = ++currentMusic;
		if (nextMusic < songLength){
			handleAudio(nextMusic)
		} else {
			handleAudio(0)
		}
	}) 
	prevBtn.addEventListener('click', () => {
		let prevMusic = --currentMusic;
		if (prevMusic >= 0){
			handleAudio(prevMusic)
		} else {
			handleAudio(songLength - 1)
		}
		handleAudio(prevMusic)
	})
} handleMusic();
// Xư ly khi ta click vao nut shuffle
const shuffleIcon = controlIcon[controlIcon.length-1];
shuffleIcon.addEventListener('click', () => {
	let numRandom = Math.floor(Math.random() * songLength);
	console.log(numRandom);
})
// Xư lý khi ta click vào cac ban nhac--------------------------------
function handleAudio(index){
	const indexSong = songs[index];
	playName.innerText = indexSong.name
	playSinger.innerText = indexSong.singer
	idMusic.innerText = indexSong.id
	audio.setAttribute('src', indexSong.linkSong)
	audio.play(); 
	pauseBtn.classList.remove('close')
	playBtn.classList.add('close')
}

// Đóng mở khung nhạc-------------------------------------------
// const boxMusic = $('.box-music');

// Khung Thời Gian---------------------------------------------------
// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
