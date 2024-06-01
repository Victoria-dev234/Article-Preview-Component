const shareIcon = document.querySelector(".share_icon");
const socials = document.querySelector(".share_socials");
const icon = document.querySelector(".share_icon svg");

const mediaQuery = window.matchMedia("(min-width:1440px)");
if (mediaQuery.matches) {
  shareIcon.addEventListener("click", () => {
    if (socials.style.display === "none") {
      socials.style.display = "flex";
      icon.style.fill = "#fff";
      shareIcon.style.backgroundColor = "#48556a";
    } else {
      socials.style.display = "none";
      icon.style.fill = "#6e8098";
      shareIcon.style.backgroundColor = "#ecf2f8";
    }
  });
} else {
  shareIcon.addEventListener("click", () => {
    socials.style.display = "flex";
  });
}
