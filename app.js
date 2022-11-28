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
    if (this.scrollY == i + "000") {
      console.log(i + "000");
      cardBox[i - 1].style.opacity = "0";
    }
  }
});
