const navHtml = document.getElementById("navbardrawer-HTML");
const navCSS = document.getElementById("navbardrawer-CSS");
const navJS = document.getElementById("navbardrawer-JS");



navHtml.innerText = `
    <!-- Note must instal google's 'material-icons' library -->

    <div class = "navbar-section">
            <nav class = "navbar-nav">
                <button id = "icon-button" class = "icon-button">
                    <span class = "material-icons">menu</span>
                </button>
            <h2>Some Title</h2>
         </nav>
    <nav id = "drawer" class = "drawer">
        <a><span class = "material-icons">language</span>Link 1</a>
        <a><span class = "material-icons">dashboard</span>Link 2</a>
        <a><span class="material-icons">person</span>Link 3</a>
        <a><span class = "material-icons">settings</span>Link 4</a>
    </nav>
</div>
`;

navCSS.innerText = `

:root {
    --main: #6C6F7D;
    --secondary: #219ebc;
    --light: #f1faee;
    --contrast: #f48c06;
}

.navbar-nav {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    padding: 20px;
    gap: 8px;
    background-color: var(--main);
    color: white;
    left: 0;
    right: 0;
    border-radius: 15px;
}

.icon-button {
    background-color: transparent;
    padding: 6px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
}

.drawer {
    position: fixed;
    top: 225px;
    border-radius: 15px;
    left: -310px;
    bottom: 0px;
    width: 300px;
    background-color: var(--secondary);
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    transition: all .5s ease;
}

.drawer[data-open="true"] {
    left: 0px;
}

.drawer > a{
    display: flex;
    padding: 16px 16px;
    align-items: center;
    gap: 8px;
    color: whitesmoke;   
    cursor: pointer;
}
`;

navJS.innerText = `
    
    let isNavOpen = false;
    const drawer = document.getElementById("drawer");   
    const buttonNav = document.getElementById('icon-button');

    buttonNav.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    drawer.dataset.open = \$"{"isNavOpen"\}";
});
`;