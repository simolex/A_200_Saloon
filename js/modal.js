const modalBtn = document.querySelector(".more");
const modalForm = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modalForm.classList.remove("hidden");
});

modalForm.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("modal__close")
  ) {
    modalForm.classList.add("hidden");
  }
});
