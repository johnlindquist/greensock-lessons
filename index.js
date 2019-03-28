import { TweenMax } from "gsap"

const box = document.createElement("div")
box.setAttribute("class", "box")
document.body.appendChild(box)

box.addEventListener("click", () => {
  TweenMax.to(box, 1, { rotationY: "+=180" })
})
