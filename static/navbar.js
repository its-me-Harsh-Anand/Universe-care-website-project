const lists = Array.from(document.querySelectorAll(".lists"))
lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    lists.forEach((list) => {
      list.classList.remove("highlight")
    })
    e.target.classList.add("highlight")
  })
})

const burger = document.querySelector(".burger-img")
const mobileNav = document.querySelector(".mobile-nav")
burger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("flex-display")
})
