import{images, songs, lyrics} from "./src.js"

const handleSong = songs.map(renderSongs).join('');
export{handleSong}

// ---------------------------------------
function renderSongs(item){
	const {image, name, singer} = item;
	return (`
			<div class="music_col-song">
				<div class="col-song_wrap">
					<img src=${image} alt="" class="col-song_img">
					<div class="col-song_active">
						<ion-icon class="active-pause" name="pause-outline"></ion-icon>
					</div>
					<div class="col-song_info">
						<span class="song_info-name">${name}</span>
						<span class="song_info-singer">${singer}</span>
					</div>
				</div>
				<div class="col-song_lyric">
					<ion-icon class="lyric-icon" name="list-outline"></ion-icon>
				</div>
			</div>
		`)
}
export {renderSongs}
// ---------------------------------------
function renderLyrics(item){
	let {line} = item;
	return (`
		<li>${line}</li>
	`)
}
export{renderLyrics}
function renderGenre(item){
	let {genre} = item
	return (`
		<li>${genre}</li>
	`)
}
export {renderGenre}
function renderImage(){
	let imagesLength = images.length;
	let randomImg = Math.floor(Math.random() * imagesLength)
	return (`
		<img src=${images[randomImg].srcImage} alt=${images[randomImg].altImage} class="background-image">
	`)
}
export {renderImage}
// ---------------------------------------
