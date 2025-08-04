const modalBtn = document.querySelector(".Add-modal");
const closeBtn = document.querySelector(".close");
const popup = document.querySelector(".pop-modal");

modalBtn.addEventListener("click", () => {
  popup.classList.add("open");
  modalBtn.style.display = "none";

  console.log("NAMAN");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
  modalBtn.style.display = "block";
  popup.style.transform = "scale(0)";
  popup.style.opacity = "0";
});
