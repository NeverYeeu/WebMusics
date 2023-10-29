const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navMoveSlide = $$('.navMoveSlide');
var sizeLinks = $$('.book-page');
var sizeLink = sizeLinks[0].clientWidth + 12;
var slideContent = $('#list-book');
var moveSlide = 0;
var maxLink = sizeLink * (sizeLinks.length - 2 );
	maxLink -= sizeLink;
	var nextSlide = () => {
		if (moveSlide < maxLink) moveSlide += sizeLink;
		else moveSlide = 0; 
		slideContent.style.marginLeft = '-' + moveSlide + 'px';
	}
	var prevSlide = () => {
		if (moveSlide == 0) moveSlide = maxLink;
		else moveSlide -= sizeLink;
		slideContent.style.marginLeft = '-' + moveSlide + 'px';
	}
	navMoveSlide[1].addEventListener('click', nextSlide);
	navMoveSlide[0].addEventListener('click', prevSlide);
	setInterval(() =>{
		nextSlide();
	}, 40000);
