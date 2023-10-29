const songs = [
	{
		id: 1, name: "Tổng Hợp Bài Hát Của Phan Mạnh Quỳnh",
		singer: "Phan Mạnh Quỳnh",
		linkSong: "music/PhanManhQuynhSongs.mp3", image: "https://i.postimg.cc/R0XWXT8d/001.jpg"
	},
	{
		id: 2, name: "Tổng Hợp Bài Hát Của Adele",
		singer: "Adele",
		linkSong: "music/AdeleSongs.mp3", image: "https://i.postimg.cc/s2Fm33Dq/002.jpg"
	},
	{
		id: 3, name: "Tổng Hợp Bài Hát Của Avicii",
		singer: "Avicii",
		linkSong: "music/AviciiSongs.mp3", image: "https://i.postimg.cc/W3qsg6Ph/003.jpg"
	},
	{
		id: 4, name: "VietNamSongs1",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/VietNamSongs1.mp3", image: "https://i.postimg.cc/g23cBKwR/004.jpg"
	},
	{
		id: 5, name: "VietNamSongs2",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/VietNamSongs2.mp3", image: "https://i.postimg.cc/D0WnQQkS/005.jpg"
	},
	{
		id: 6, name: "VietNamSongs3",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/VietNamSongs3.mp3", image: "https://i.postimg.cc/W3qsg6Ph/003.jpg"
	},
	{
		id: 7, name: "EnglishSongs2",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/EnglishSongs2.mp3", image: "https://i.postimg.cc/wBsrkW78/012.jpg"
	},
	{
		id: 8, name: "EnglishSongs3",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/EnglishSongs3.mp3", image: "https://i.postimg.cc/D0WnQQkS/005.jpg"
	},
	{
		id: 9, name: "EnglishSongs4",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/EnglishSongs4.mp3", image: "https://i.postimg.cc/D0WnQQkS/005.jpg"
	},
	{
		id: 10, name: "EnglishSongs5",
		singer: "Nhiều Nghệ Sĩ",
		linkSong: "music/EnglishSongs5.mp3", image: "https://i.postimg.cc/wBsrkW78/012.jpg"
	},

]
export {songs}
const lyrics = [
	{
		id: 1, lyric: [
			{line: "LỜI BÀI HÁT: CÓ CHÀNG TRAI VIẾT LÊN CÂY"},{line: "Lời yêu thương cô gái ấy"},{line: "Mối tình như gió như mây"},{line: "Nhiều năm trôi qua vẫn thấy"},{line: "Giống như bức tranh vẽ bằng dịu êm ngày thơ"},{line: "Có khi trong tiềm thức ngỡ là mơ."	},{line: "Câu chuyện đã rất xa xôi"},{line: "Niềm riêng không ai biết tới"},{line: "Hai người sống ở hai nơi"},{line: "Từ lâu không đi sát lối"},{line: "Chỉ thương có người vẫn hoài gìn giữ nhiều luyến lưu"},{line: "Mỗi khi nhớ đôi mắt biếc như Thời chưa biết buồn đau."	},{line: "[ĐK]:"	},{line: "Ngày cô ấy đi theo chân mẹ cha"},{line: "Chàng trai bơ vơ từ xa trong tim hụt hẫng như mất một thứ gì"},{line: "Không ai hiểu thấu vì"},{line: "Tình yêu những đứa trẻ con thì"},{line: "Vu vơ nhanh qua đâu nghĩ gieo Tương tư đến dài như thế."	},{line: "Đời muôn ngả mang số kiếp đổi thay"},{line: "Rồi khi tình cờ gặp lại hai thân phận khác dẫu tên người vẫn vậy,"},{line: "Có một người vẫn vậy"},{line: "Thì ra xa nhau là mất thôi"},{line: "Tay không chung đôi chỉ giấc mơ vẫn còn bồi hồi trọn đời."	},{line: "Có chàng trai lúc xuân xanh"},{line: "Ngược xuôi bon chen đất khách"},{line: "Mối tình cứ thế phai nhanh"},{line: "Dường như thôi không nghĩ đến."	},{line: "Ít lâu có cô gái làm dịu êm hồn đã khô"},{line: "Dẫu không có đôi mắt giống mùa thu"},{line: "Câu chuyện đáng lẽ xa xôi"},{line: "Niềm riêng không ai nhắc tới"},{line: "Nhưng rồi ngăn cách xa khơi"},{line: "Một hôm cơn mưa dẫn lối."	},{line: "Thấy cô gái năm ấy khiến thổn thức như lúc đầu"},{line: "Vẫn nơi đó đôi mắt biếc nhưng giờ đã biết buồn đau."	},{line: "Ngày cô ấy đi theo nơi phồn hoa"},{line: "Chàng trai bơ vơ từ xa trong tim hụt hẫng như mất một thứ gì"},{line: "Không ai hiểu thấu vì"},{line: "Tình yêu những đứa trẻ con thì"},{line: "Vu vơ nhanh qua đâu nghĩ gieo tương tư đến dài như thế"	},{line: "Đời muôn ngả mang số kiếp đổi thay"},{line: "Rồi khi tình cờ gặp lại hai thân phận khác dẫu tên người vẫn vậy"},{line: "Có một người vẫn vậy"},{line: "Thì ra xa nhau là mất thôi"},{line: "Tay không chung đôi chỉ giấc mơ vẫn còn bồi hồi trọn đời."},
			{line: "--*--"},{line: "LỜI BÀI HÁT: KHI PHẢI QUÊN ĐI"},{line: "Đau buồn chăng phải khi người bỏ anh đi"},{line: "Vì khi yêu thương ƿhôi phai anh biết làm gì"},{line: "Chuyện đến sẽ đến chẳng như ta vẫn nghĩ"},{line: "Người kết thúc vội...Những ƿhút giây anh ngủ mê"},{line: "Đau buồn chăng phải khi người quên tên anh"},{line: "Thời gian trôi qua nhanh mang th℮o kí ức ngày nào"},{line: "Cuộc sống tiếp diễn đưa em bên người khác"},{line: "Rồi chẳng mấy khi nhớ lại"},{line: "Một người đã đi quɑ"},{line: "ĐK:"},{line: "Nhưng anh đau khi anh đánh mất em"},{line: "Làm sao anh quên đi năm tháng ấy"},{line: "Từng hoài niệm đó ɑnh ghi vào tim"},{line: "Từng ấm ấp ấy anh giữ lại đây"},{line: "Cho vơi chua cay khi a cô đơn..."},{line: "Nhưng anh đɑu khi em dứt cánh tay"},{line: "Rồi quay lưng đi khi anh cố níu"},{line: "Tìm hình dáng ấy trong đêm mù tối"},{line: "Ţìm tiếng nói ấy sau những màn mưa"},{line: "A xua tan đi giây phút có em..."},{line: "Qua rồi....!"},{line: ""},{line: "Ngước nhìn lên trời cɑo rồi hỏi trăng sao, tình yêu nơi nao không mang những tiếng thở dài."},{line: "Hạnh phúc quá ngắn khi ta sớm lìɑ nhau, đành dấu chôn đi nỗi buồn chờ ngày hình dung phai....."},{line: ""},{line: "ĐK:"},{line: "Nhưng anh đau khi anh đánh mất ℮m"},{line: "Làm sao anh quên đi năm tháng ấy"},{line: "Từng hoài niệm đó anh ghi vào tim"},{line: "Từng ấm ấp ấy anh giữ lại đâу"},{line: "Cho vơi chua cay khi a cô đơn..."},{line: "Nhưng anh đau khi em dứt cánh tay"},{line: "Rồi quay lưng đi khi ɑnh cố níu"},{line: "Tìm hình dáng ấy trong đêm mù tối"},{line: "Tìm tiếng nói ấy sau những màn mưa"},{line: "A xua tan đi giâу phút có em..."},{line: "ĐK:"},{line: "Nhưng anh đau khi anh đánh mất em"},{line: "Làm sao anh quên đi năm tháng ấy"},{line: "Ţừng hoài niệm đó anh ghi vào tim"},{line: "Từng ấm ấp ấy anh giữ lại đây"},{line: "Cho vơi chua cay khi a cô đơn..."},{line: "Ɲhưng anh đau khi em dứt cánh tay"},{line: "Rồi quay lưng đi khi anh cố níu"},{line: "Tìm hình dáng ấy trong đêm mù tối"},{line: "Ţìm tiếng nói ấy sau những màn mưa"},{line: "A xua tan đi giây phút có em..."},{line: "Qua rồi....!"},
			{line: "--*--"},
			{line: "LỜI BÀI HÁT: HỒI ỨC"},{line: "Tôi đi thắp nén nhang những ngày đầu năm"},{line: "Nơi đây là nghĩa trang bao nhiêu người nằm"},{line: "Nơi ai mỏi bước chân tìm về nương náu"},{line: "Nhẹ gối đầu, ngừng nỗi đau."	},{line: "Tôi đi qua tấm bia không in hình dung"},{line: "Trước mắt những cái tên xa xôi lạ lùng"},{line: "Sinh ra hay chết đi giờ như dĩ vãng"},{line: "Người ghé ngang, rồi biến tan."	},{line: "Những đêm đông nghe chuyện xưa thấy nhớ"},{line: "Ngày ấy cha như đứa trẻ thơ bỡ ngỡ"},{line: "Bà lão không tên xa rồi"},{line: "Người cũ như cơn gió trôi"},{line: "Hồi ức nơi cha đong đầy những ấm áp chưa vơi."	},{line: "Giữa mênh mang bao điều chưa biết tới"},{line: "Người hãy cho tôi cúi đầu nghe dẫn lối"},{line: "Ngày sau lúc tôi như là một cơn gió bay thoáng qua"},{line: "Đời nhắc hay quên người lạ vội vã."	},{line: "Bên kia những đám cây bé như mầm tươi"},{line: "Sau bao năm vút cao lớn che mặt trời"},{line: "Nhăn nheo quanh khóe môi thanh xuân đâu nữa"},{line: "Tuổi hết thơ, đời hết mơ."	},{line: "Rẽ đi qua bao buồn vui kiếp sống"},{line: "Hạnh phúc đau thương không còn nhiều trông mong"},{line: "Người tay bế tôi xa rồi, hình bóng khuất sau đá núi"},{line: "Hằn in trí khôn nụ cười và những tiếng nói xa khơi."	},{line: "Sẽ băng qua con đường chia thế giới"},{line: "Mọi dấu chân xưa phai mờ trên khắp lối"},{line: "Tạ ơn phút giây tương phùng, người xưa khiến tôi nhớ nhung"},{line: "Hẹn nhau lúc trái đất ngưng tận cùng."	},{line: "Nhìn lại tôi như lá cây trên cành"},{line: "Từ chồi non dần xanh rồi khô héo"},{line: "Định mệnh cho đôi khi ta lưu nơi tim nhau"},{line: "Hay có khi bâng quơ không vết dấu."	},{line: "Hãy ở đây gần tôi một đoạn đường"},{line: "Rồi mỉm cười chào nhau khi khác hướng"},{line: "Yêu thương nhé trước khi vô hình trước gương."	},{line: "Gió xuân sang lay nhẹ bay mái tóc"},{line: "Và nắng trên vai ai buồn ai đứng khóc"},{line: "Dịu đi nỗi đau trong lòng"},{line: "Rồi biết đâu ai ngoái trông"},{line: "Hồi ức nay mai chỉ còn lại mỗi quá khứ hư không."	},{line: "Sẽ băng qua con đường chia thế giới"},{line: "Mọi dấu chân xưa phai mờ trên khắp lối"},{line: "Ngày sau lúc tôi như là"},{line: "Một cơn gió bay thoáng qua"},{line: "Đời nhắc hay quên người lạ, vội vã."		},
			{line: "--*--"},
			{line: "LỜI BÀI HÁT: KHI NGƯỜI MÌNH YÊU KHÓC"},{line: "Nước mắt em đang rơi trên những ngón tay"},{line: "Nước mắt em mang nỗi nhớ nỗi đắng cay"},{line: "Khi những yêu thương em trao cho ai tan thành mây như hôm nay."	},{line: "Bối rối tôi đang bên em tai lắng nghe"},{line: "Muốn giữ đôi vai đang run trong tái tê"},{line: "Muốn nói quên anh ta đi em nhé sao phải mãi não nề."	},{line: "Tình yêu xưa đến nay là cơn lốc xoay"},{line: "Dù ai cũng hay mà trong phút giây"},{line: "Chấp nhận hết niềm vui dịu êm lẫn đọa đầy, yeah"},{line: "Và nơi tôi có khi điều đang giấu đi"},{line: "Chẳng hề khác chi giọt nước trên mi em rơi…"	},{line: "Khi người mình yêu khóc"},{line: "Nắng khắp lối nhưng mây giăng kín lòng"},{line: "Mất người em say đắm, hẳn là quá khổ tâm"},{line: "Khi người mình yêu khóc"},{line: "Tôi cũng đớn đau tôi cũng đớn lòng"},{line: "Bao ngày dài trông ngóng, chỉ còn biết hy vọng"	},{line: "Có những cơn mưa ngăn ta không thấy nhau"},{line: "Có nỗi ưu tư riêng thôi ai biết đâu"},{line: "Dẫu trái tim anh luôn yêu thương em như là mối tình đầu."	},{line: "Muốn nắng theo đôi chân em trên bước đi,"},{line: "Muốn thấy ai yêu em như anh nghĩ suy"},{line: "Những yếu đuối mong qua nhanh mỗi khi không hạnh phúc điều gì"	},{line: "Tình yêu xưa đến nay là cơn lốc xoay"},{line: "Dù ai cũng hay mà trong phút giây"},{line: "Chấp nhận hết niềm vui dịu êm lẫn đọa đầy, yeah"},{line: "Và nơi tôi có khi điều đang giấu đi"},{line: "Chẳng hề khác chi giọt nước trên mi em rơi…"	},{line: "Khi người mình yêu khóc"},{line: "Nắng khắp lối nhưng mây giăng kín lòng"},{line: "Mất người em say đắm, hẳn là quá khổ tâm"},{line: "Khi người mình yêu khóc"},{line: "Tôi cũng đớn đau tôi cũng đớn lòng"},{line: "Bao ngày dài trông ngóng, chỉ còn biết hy vọng",},
			{line: "--*--"},
			{line: "LỜI BÀI HÁT: NƯỚC NGOÀI"},{line: "Mẹ ơi con mới xong việc, đã lâu con chưa gọi về"},{line: "Nhà ta thế nào, Cha có đỡ đau ốm hơn ko?"},{line: "Mùa đông đã sang rồi"},{line: "Mẹ nhóm than ấm cha ngồi để vơi gió rét bên trời"},{line: "Mẹ bên đây tuyết rơi nhiều"},{line: "Lê chân về sau ca chiều, ở nơi xứ người cũng may sống chung mấy anh em"},{line: "Chỉ lúc chẳng yên bình bạn con nó khóc một mình"},{line: "Làm ai cũng nhớ gia đình"},{line: "Ngày chưa biết quê ta nghèo"},{line: "Chỉ mơ bước đi muôn nẻo, thả đôi cánh bay xa hoài oh oh nước ngoài!"},{line: "Giờ con đã ở nơi này, cuộc sống khác xa quá vậy"},{line: "Chỉ mong bớt lo tương lai…"},{line: "Vì con đi kiếm đồng tiền cho thôi ngày sau bần tiện nên xin mẹ chớ buồn phiền"},{line: "Ngày hôm qua ai nhắn gửi cô bên nhà lấy chồng rồi…"},{line: "Người ta nói đợi nên khi biết con thấy chơi vơi…"},{line: "Tuổi xuân có mấy hồi…"},{line: "Tha phương nổi trôi dòng đời nên con nào dám nặng lời"},{line: "Vì khi biết quê ta nghèo, rủ nhau bước đi muôn nẻo"},{line: "…tìm đất khách mong làm giàu mai sau ngẩng đầu"},{line: "Mà đâu biết trong đêm dài người không muốn ta ở lại"},{line: "Chạy trong giá băng mệt nhoài tâm tư hoang mang"},{line: "Dù nghe lắm nỗi bi hài…"},{line: "Người ta vẫn đi nước ngoài rời xa bữa cơm ở nhà qua nơi khác lạ"},{line: "Và trong lớp thanh niên làng người may mắn đi vững vàng còn ai trắng tay quay về…"},{line: "Mẹ nghe không tiếng ồn ào… anh em họ gửi lời chào"},{line: "Mẹ chớ nghĩ ngợi bên này chúng con mến thương nhau"},{line: "Một mai nắng xanh trời, rời nơi nương náu một thời"},{line: "Về trong đôi mắt rạng ngời",}
		]
	},
	{
		id: 2, lyric: [
			
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 3, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 4, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 5, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 6, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 7, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 8, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 9, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	{
		id: 10, lyric: [
			{line: "Chưa có thông tin hiển thị."},
		]
	},
	
]


export {lyrics}
const images = [
{id: 1, srcImage:"https://i.postimg.cc/R0XWXT8d/001.jpg", altImage: "001.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/s2Fm33Dq/002.jpg", altImage: "002.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/W3qsg6Ph/003.jpg", altImage: "003.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/g23cBKwR/004.jpg", altImage: "004.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/D0WnQQkS/005.jpg", altImage: "005.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/NFTfq8NW/006.jpg", altImage: "006.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/SQGvVYNs/007.jpg", altImage: "007.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/C1TGp7Jg/008.gif", altImage: "008.gif"},
{id: 1, srcImage:"https://i.postimg.cc/xdHsmc49/009.jpg", altImage: "009.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/QthqWS7q/010.jpg", altImage: "010.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/x1Fr5J5H/011.jpg", altImage: "011.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/wBsrkW78/012.jpg", altImage: "012.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/tCT25rMS/013.jpg", altImage: "013.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/Tw0Jjmqv/014.jpg", altImage: "014.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/qv2nXy4D/015.jpg", altImage: "015.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/ZqT98Qf0/016.jpg", altImage: "016.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/brGSG2mT/017.jpg", altImage: "017.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/kgN6tCvk/018.jpg", altImage: "018.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/SjFRJ12S/019.jpg", altImage: "019.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/MKmfnxDg/020.jpg", altImage: "020.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/CxdMwV6G/021.jpg", altImage: "021.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/kM8bdWtJ/29-10-2021-1.jpg", altImage: "1.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/MpscYDgD/29-10-2021-2.jpg", altImage: "2.jpg"},
{id: 1, srcImage:"https://i.postimg.cc/R0HMnLmq/gif6.gif", altImage: "gif6.gif"},
	
]
export {images}

const genreMusic = [
	{genre: "US - UK"},
	{genre: "Quê Hương"},
	{genre: "Nhạc Việt"},
	{genre: "Nhạc Nhật"},
	{genre: "Không Lời"},
	{genre: "Nhạc EDM"},
]
export {genreMusic}