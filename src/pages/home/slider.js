const container = document.querySelector("#content");

export function createSlider() {
    var slideIndex = 1;
    const slider = document.createElement("div");
    slider.setAttribute("class", "slideshow-container");
    container.appendChild(slider);

    const fader = document.createElement('div');
    fader.classList.add('mySlides')
    fader.classList.add('fade')
    slider.appendChild(fader);

    const img1 = document.createElement('img');
    img1.setAttribute("src", "https://cdn.pixabay.com/photo/2017/06/07/10/53/pizza-2380025_1280.jpg");
    fader.appendChild(img1);


    const fader2 = document.createElement('div');
    fader2.classList.add('mySlides')
    fader2.classList.add('fade')
    slider.appendChild(fader2);

    const img2 = document.createElement('img');
    img2.setAttribute("src", "https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_1280.jpg");
    fader2.appendChild(img2);

    const fader3 = document.createElement('div');
    fader3.classList.add('mySlides')
    fader3.classList.add('fade')
    slider.appendChild(fader3);

    const img3 = document.createElement('img');
    img3.setAttribute("src", "https://cdn.pixabay.com/photo/2017/10/02/22/24/pizza-2810589_1280.jpg");
    fader3.appendChild(img3);

    const slide = document.createElement('a');
    slide.classList.add('prev')
    slide.innerText = '❮';
    slider.appendChild(slide);

    const slide2 = document.createElement('a');
    slide2.classList.add('next')
    slide2.innerText = '❯';
    slider.appendChild(slide2);

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    var prev = document.querySelector(".prev");
    prev.addEventListener("click", function () { plusSlides(-1); });

    var next = document.querySelector(".next");
    next.addEventListener("click", function () { plusSlides(1); });
}


