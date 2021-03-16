let Mybutton = document.querySelector("i")
let FadeLayer = document.querySelector("div")
let Meny = document.querySelector("nav")

let show = function() {

    Meny.classList.add("show")

    FadeLayer.classList.add("visible")
}

let hide = function() {
    Meny.classList.remove("show")

    FadeLayer.classList.remove("visible")

}

Mybutton.addEventListener("click",show)
FadeLayer.addEventListener("click",hide)