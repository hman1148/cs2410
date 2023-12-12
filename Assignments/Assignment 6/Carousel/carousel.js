const carouselHTML = document.getElementById("carousel-HTML");
const carouselCSS = document.getElementById("carousel-CSS");
const carouselJS = document.getElementById("carousel-JS");


const carouselAnimmation = (slider) => {
    if (slider.children.length === 1) {
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    } else if (slider.children.length === 2) {
        const childTwo = slider.lastElementChild.clone(true);
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(childTwo);
    } else if (slider.children.length === 3) {
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }

    setInterval(() => {
        slider.animate([{
            transform: `translateX(-400px)`
        }], {
            duration: 1000,
            easing: "ease",
        }).onfinish = () => {
            const childOne = slider.firstElementChild;
            childOne.remove();
            slider.appendChild(childOne.cloneNode(true));
        }
    }, 2000);
}

const carouselMotion = document.getElementById("carousel-motion");
carouselAnimmation(carouselMotion);




carouselHTML.innerText = `

<div class = "carousel">
    <div class = "carousel-motion" id = "carousel-motion">
        <img src = "Carousel/Assets/img1.jpg" alt = "Image 1" width = "400px"  height="300px">
        <img src = "Carousel/Assets/img2 (2).jpg" alt = "Image 2" width = "400px"  height="300px">
        <img src = "Carousel/Assets/img3.jpg" alt = "Image 3" width = "400px"  height="300px">
        <img src = "Carousel/Assets/img4.jpg" alt = "Image 4" width = "400px"  height="300px">
    </div>
</div>
`;

carouselCSS.innerText = `

.carousel {
    overflow: hidden;
    width: 400px;
}
.carousel .carousel-motion {
    display: flex;
    /* transform: translateX(-300px); */
    border-radius: 15px;
}

.carousel .carousel-motion img {
    border: 1px solid white;
    border-radius: 15px;
}
`;

carouselJS.innerText = `


const carouselAnimmation = (slider) => {
    if (slider.children.length === 1) {
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    } else if (slider.children.length === 2) {
        const childTwo = slider.lastElementChild.clone(true);
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(childTwo);
    } else if (slider.children.length === 3) {
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }

    setInterval(() => {
        slider.animate([{
            transform: "\`translateX(-400px)\`"
        }], {
            duration: 1000,
            easing: "ease",
        }).onfinish = () => {
            const childOne = slider.firstElementChild;
            childOne.remove();
            slider.appendChild(childOne.cloneNode(true));
        }
    }, 2000);
}

const carouselMotion = document.getElementById("carousel-motion");
carouselAnimmation(carouselMotion);
`;

