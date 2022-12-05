
const home = document.querySelector(".home")
home.onclick = () => {
    window.location.href = "index.html"
}

const about = document.querySelector(".about-page")
about.onclick = () => {
    window.location.href = "about.html"
}

const services = document.querySelector(".services-page")
services.onclick = () => {
    window.location.href = "services.html"
}

const contact = document.querySelector(".contact-btn")
contact.onclick = () => {
    window.location.href = "contact.html"
}



const open = document.getElementById("menu-bar")
const close = document.getElementById("close-bar")
const navbar = document.querySelector(".nav_links")

open.onclick = () => {
    close.style.display = "flex"
    navbar.style.display = "flex"
    open.style.display = "none"
}

close.onclick = () => {
    close.style.display = "none"
    navbar.style.display = "none"
    open.style.display = "flex"
}

