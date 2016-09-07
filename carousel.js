var images = new Array();
var length = 4;
var slideIndex = 1;
var timer;

var slideImage = document.getElementById('images');
var dots = document.getElementsByClassName('dot');
var captions = document.getElementsByClassName('captions');
var imageCaption = document.getElementById('image-caption');


images[0] = "ronaldo.jpg";
images[1] = "wenger.jpg";
images[2] = "messi.jpg";
images[3] = "nadal.jpg";

function makeOpaque()	{
	slideImage.style.opacity = 1;
	slideImage.src = images[slideIndex];
	slideIndex = (slideIndex+1)%length;
}

function showSlides()	{
	var i;
	for(i=0;i<length;i++)	{
		dots[i].className = dots[i].className.replace(" active", "");
		captions[i].className = captions[i].className.replace(" active-caption", "");
	}
    dots[slideIndex].className += " active";
    captions[slideIndex].className += " active-caption";
    imageCaption.innerHTML = captions[slideIndex].innerHTML;
    slideImage.style.opacity = 0;
	setTimeout(makeOpaque,1000);
}

function currentSlide(i)	{
	halt();
	slideIndex = i;
	showSlides();
	start();
}

function pauseSlidesAt(i)	{
	halt();
	slideIndex = i;
	showSlides();
}

function start()	{
	timer = setInterval(showSlides,4000);
}

function halt()	{
	clearInterval(timer);
}

start();
