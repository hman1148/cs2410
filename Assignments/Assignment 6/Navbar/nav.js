let isNavOpen = false;
const drawer = document.getElementById("drawer");
const buttonNav = document.getElementById('icon-button');

buttonNav.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    drawer.dataset.open = `${isNavOpen}`;
});
