function renderSetting() {
	return(
	
		<div id="web-set">
			<div class="web-set_icon">
				<ion-icon name="settings-outline"></ion-icon>
			</div>
			<div class="web-set_box">
				<div class="set_box-title">Cài đặt</div>
					<span>Phông nền Website</span>
				<div class="set_box-colors"><!--Background-color--></div>

				<div class="set_box-font">
					<span>Phông chữ</span>
					<select name="" id="">
						<option value="Time New Roman">Time New Roman</option>
						<option value="Arial">Arial</option>
						<option value="">Time New Roman</option>
					</select>
				</div>
				<div id="set_box-text">
					<div class="box-text_wrap fontSize">
						<span class="boxt-text_head"><ion-icon name="text-outline"></ion-icon>
							Cỡ chữ
						</span>
						<div class="text_size-show">
							<ion-icon class="increaseBtn" name="chevron-up-outline"></ion-icon>
							<span>16</span>
							<ion-icon class="decreaseBtn" name="chevron-down-outline"></ion-icon>
						</div>
					</div>
					<div class="box-text_wrap color">
						<span class="boxt-text_head"><ion-icon name="color-palette-outline"></ion-icon>
							Màu chữ
						</span>
						<div class="text_size-show">
							<p></p>
						</div>
					</div>
					<div class="box-text_wrap lineHeight">
						<span class="boxt-text_head"><ion-icon name="swap-vertical-outline"></ion-icon>
							Khoảng cách dòng
						</span>
						<div class="text_size-show">
							<ion-icon class="increaseBtn" name="chevron-up-outline"></ion-icon>
							<span>1</span>
							<ion-icon class="decreaseBtn" name="chevron-down-outline"></ion-icon>
						</div>
					</div>
					<div class="box-text_wrap wordSpace">
						<span class="boxt-text_head"><ion-icon name="resize-outline"></ion-icon>
							Khoảng cách từ</span>
						<div class="text_size-show">
							<ion-icon class="increaseBtn" name="chevron-up-outline"></ion-icon>
							<span>160</span>
							<ion-icon class="decreaseBtn" name="chevron-down-outline"></ion-icon>
						</div>
					</div>
				</div>

					<span>Hiển thị Website</span>
				<div id="set_box-display">
					<div class="box-display_col">
						Đây là đoạn demo hiển thị nội dung tuyện bạn muốn cài đặt, Hãy chọn các thuộc tính ở trên để cài đặt phông chữ mã màu ,....
					</div>
				</div>
				<div class="set_box-close">Đóng <ion-icon name="close-outline"></ion-icon></div>
			</div>
		</div>
	)
}
export{renderSetting}
