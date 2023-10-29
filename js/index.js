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
const timeBar = $('#time-bar')
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
	navWebsite[2].classList.toggle('active2')
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