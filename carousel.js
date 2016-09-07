var images = new Array();
var length = 4;
var slideIndex = 1;
var timer;

var slideImage = document.getElementById('images');
var dots = document.getElementsByClassName('dot');
var captions = document.getElementsByClassName('captions');
var imageCaption = document.getElementById('image-caption');


images[0] = "../../Pictures/ronaldo.jpg";
images[1] = "../../Pictures/wenger.jpg";
images[2] = "../../Pictures/messi.jpg";
images[3] = "../../Pictures/nadal.jpg";

function showSlides()	{
	var i;
	for(i=0;i<length;i++)	{
		dots[i].className = dots[i].className.replace(" active", "");
		captions[i].className = captions[i].className.replace(" active-caption", "");
	}
    dots[slideIndex].className += " active";
    captions[slideIndex].className += " active-caption";
    imageCaption.innerHTML = captions[slideIndex].innerHTML;
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
	console.log(slideIndex);
}

function start()	{
	timer = setInterval(showSlides,4000);
}

function halt()	{
	clearInterval(timer);
}

start();
