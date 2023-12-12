const spinnerHTML = document.getElementById("spinner-HTML");
const spinnerCSS = document.getElementById("spinner-CSS");

spinnerHTML.innerText = `
<div class = "display-item">
    <div class = "spinner-blue"></div>
    <div class = "spinner-text"><span>Loading</span></div>
</div>
`;

spinnerCSS.innerText = `
.spinner-blue {
    border: 16px solid whitesmoke;
    border-top: 16px solid #00b4d8;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: load-blue 1.5s linear infinite;
    transition: 1.5s ease;
}

.spinner-blue:hover {
    border: 25px solid whitesmoke;
    border-top: 25px solid gold;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    animation: load-blue .5s alternate-reverse infinite;
}

.spinner-text {
    text-transform: uppercase;
    font: bold;
    width: 150ppx;
    text-align: center;
    line-height: 50px;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: 1s ease;
}

.spinner-text span {
    position: relative;
    z-index: 999;
    color: #fff;
    transition: 1s ease;
}



.spinner-text:before {
    content: '';
    background: #00b4d8;
    width: 200px;
    height: 40px;
    display: block;
    position: absolute;
    top: 0;
    left: -40px;
    right: 0;
    bottom: 0;
    animation: 2s loadingBefore infinite ease-in-out;
}

.spinner-text:after {
    content: '';
    background: #ff3600;
    width: 14px;
    height: 60px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .5;
    animation: 2s loadingAfter infinite ease-in-out;
}


@keyframes loadingBefore {
    0% {
        transform: translateX(-20px);
    }
    50% {
        transform: translateX(14px);
    }
    100% {
        transform: translateX(-20px);
    }
}

@keyframes loadingAfter {
    0% {
        transform: translateX(-80px);
    }
    50% {
        transform: translateX(80px);
    }
    100% {
        transform: translateX(-80px);
    }
}

@keyframes load-blue {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
`;

