let navbarBtns = document.querySelectorAll('[data-collapse-toggle="navbar-search"]')

navbarBtns.forEach((btn) => {
    btn.onclick = () => {
        let navbar = document.getElementById("navbar-search");
        navbar.classList.toggle("hidden")
    }
})