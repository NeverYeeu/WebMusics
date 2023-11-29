function handleWhiteDown() {
	let boxAnimation = document.querySelector('.box-animation');
	var borderArray = ["50%", "60%"];
	var blurArray = [ '5px', "2px", "4px"];
	var colorArray = ["#fff", "#d3c5c5ba", "#958f8fba"];
	var widthScreen = document.documentElement.clientWidth;
	var heightScreen = document.documentElement.clientHeight;
	let count = 40;
		function createElementRandom() {
			for (var i = 0; i < count; i++){
				var randomLeft = Math.floor(Math.random() * widthScreen)
				var randomRight = Math.floor(Math.random() * heightScreen)
				let colorRandom = Math.floor(Math.random() * colorArray.length);
				let borderRandom = Math.floor(Math.random() * borderArray.length);
				let blurRandom = Math.floor(Math.random() * blurArray.length);
				let widthElement = Math.floor(Math.random() * 5) + 5;
				let timeAnimation = Math.floor(Math.random() * 8) + 5

				let div = document.createElement('div');
				div.style.background = colorArray[colorRandom];
				div.style.position = 'absolute';
				div.style.width = widthElement + 'px' ;
				div.style.height = widthElement + 'px';
				div.style.marginLeft = randomLeft + 'px' ;
				div.style.marginTop = randomRight + 'px' ;
				div.style.borderRadius = blurArray[borderRandom];
				div.style.filter = 'blur(' + blurArray[blurRandom] + ')';
				div.style.animation = 'moveWhiteDown ' + timeAnimation + 's ease-in infinite';
				boxAnimation.appendChild(div)
			}
		} ; createElementRandom()
}
export{handleWhiteDown}