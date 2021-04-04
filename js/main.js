let Mybutton = document.querySelector(".menu-button")
let FadeLayer = document.querySelector(".fade-layer")
let Meny = document.querySelector(".nav")

let show = function () {

    Meny.classList.add("show")
    console.log('hej hej');

    FadeLayer.classList.add("visible")
}

let hide = function () {
    Meny.classList.remove("show")

    FadeLayer.classList.remove("visible")

}

Mybutton.addEventListener("click", show)
FadeLayer.addEventListener("click", hide)