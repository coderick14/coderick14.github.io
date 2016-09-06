var images = new Array();
var length = 4;
var slideIndex = 0;
var timer;

var slideImage = document.getElementById('images');
var dots = document.getElementsByClassName('dot');
var captions = document.getElementsByClassName('captions');


images[0] = "tiger.jpg";
images[1] = "wolf.jpg";
images[2] = "bird.jpg";
images[3] = "tiger2.jpg";

function showSlides()	{
	var i;
	for(i=0;i<length;i++)	{
		dots[i].className = dots[i].className.replace(" active", "");
		captions[i].className = captions[i].className.replace(" active-caption", "");
	}
    dots[slideIndex].className += " active";
    captions[slideIndex].className += " active-caption";
	slideImage.src = images[slideIndex];
	slideIndex = (slideIndex+1)%length;
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
	timer = setInterval(showSlides,5000);
}

function halt()	{
	clearInterval(timer);
}

showSlides();
start();
