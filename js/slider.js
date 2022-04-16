var i = 0;
var images = [];
var time = 3000;


//Image list

images[0] = 'img/banner/1.jpg';
images[1] = 'img/banner/2.jpg';
images[2] = 'img/banner/3.jpg';
images[3] = 'img/banner/4.jpg';

// change Image

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;

    } else {
        i = 0;
    }


    setTimeout("changeImg()", time);
}

window.onload = changeImg;