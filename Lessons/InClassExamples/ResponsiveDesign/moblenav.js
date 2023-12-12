const drawer = document.getElementById("drawer");

document.getElementById("navbutton").addEventListener("click", () => {
    drawer.classList.toggle("open"); // toggles css classes
    document.getElementById("overlay").classList.toggle("visible")
});

document.getElementById("overlay").addEventListener("click", () => {
    document.getElementById("navbutton").click();
});


let drawerLeft = -300;

//touch events;

const swipeDrawer = window.addEventListener("touch", (startEvent) => {

    let x = startEvent.touches[0].clientX;

    if (startEvent.touches[0].clientX > 50) {
        return;
    }

    const touchMove = (e) => {
        const delta = e.touches[0].clientX - x;
        x = e.touches[0].clientX;

        drawerLeft = delta;
        if (drawerLeft < -300) {
            drawerLeft = -300;
        }

        if (drawerLeft > 0) {
            drawerLeft = 0;
        }

        drawer.style.left = `${drawerLeft}px`;
    }

    const touchEnd = () => {

        if (drawerLeft > -150) {
            drawer.animate([
                {left: drawerLeft > -150 ? "0px": "-300px"}
            ], {
                easing: "ease",
                duration: 300
            }).addEventListener("finish", () => {
                drawerLeft = drawerLeft > -150 ? 0: -300;
                drawer.style.left = `${drawerLeft}`;
            });
        }

        window.removeEventListener("touchmove", touchMove);
        window.removeEventListener("touchend", touchEnd);
    }
    
    window.addEventListener("touchend", () => {
        
    });
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", touchMove);

});

window.addEventListener("touch", () => {
    swipeDrawer
});


drawer.addEventListener("touchstart", (e) => {
    e.stopPropagation();
    swipeDrawer(e);
});