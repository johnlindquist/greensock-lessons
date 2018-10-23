import { TweenMax } from "gsap"

const divs = Array.from({ length: 100 }, () =>
  document.createElement("div")
)

divs.forEach(div => {
  TweenMax.set(div, {
    position: "absolute",
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    width: 20,
    height: 20,
    //centering
    xPercent: -50,
    yPercent: -50,
    backgroundColor: "green",
    border: "3px solid black"
  })

  document.body.appendChild(div)
})

TweenMax.to(divs, 10, { x: 100, y: 100 })

document.addEventListener("click", event => {
  TweenMax.killAll(true)
})
