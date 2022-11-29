let cardBoxLength = document.querySelectorAll(".card-box").length;
let cardBox = document.querySelectorAll(".card-box");
// window.addEventListener("scroll", function () {
//   console.log(this.scrollY);
//   if (this.scrollY == 1000) {
//     cardBox[0].style.opacity = "0";
//   } else if (this.scrollY == 2000) {
//     cardBox[1].style.opacity = "0";
//   } else if (this.scrollY == 3000) {
//     cardBox[2].style.opacity = "0";
//   }
// });

window.addEventListener("scroll", function () {
  for (i = 0; i < cardBoxLength; i++) {
    if (Math.floor(this.scrollY / 100) * 100 == i + "000" - 300) {
      console.log(i + "000");
      cardBox[i - 1].classList.add("hidden");
    } else if (this.scrollY >= 4000) {
      document.querySelector(".body").classList.add("black");
    } else if (this.scrollY <= 4000) {
      document.querySelector(".body").classList.remove("black");
    }
  }
});
window.addEventListener("scroll", function () {
  console.log(Math.floor(this.scrollY / 100) * 100);
  for (i = cardBox.length; i > 0; i--)
    if (
      cardBox[i - 1].classList.contains("hidden") &&
      Math.floor(this.scrollY / 100) * 100 == i + "000" - 400
    ) {
      cardBox[i - 1].classList.remove("hidden");
    }
});
