import { TweenMax, TimelineMax } from "gsap"

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "50px",
  height: "50px",
  x: "50px",
  y: "50px",
  //centering the origin
  left: "50%",
  top: "50%",
  xPercent: "-50",
  yPercent: "-50"
})

document.addEventListener("click", event => {
  const { x, y } = event
  TweenMax.fromTo(
    "#box",
    1,
    { x, y },
    { x: 500, y: 500 }
  )
})
