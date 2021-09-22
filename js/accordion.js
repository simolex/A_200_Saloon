const btns = document.querySelectorAll(".feature__link");
const featureSubLists = document.querySelectorAll(".feature-sub");

btns.forEach((btnItem) => {
  btnItem.addEventListener("click", () => {
    btns.forEach((btnItemList, idxList) => {
      if (btnItemList === btnItem) {
        btnItem.classList.toggle("feature__link_active");
        featureSubLists[idxList].classList.toggle("hidden");
      } else {
        btnItemList.classList.remove("feature__link_active");
        featureSubLists[idxList].classList.add("hidden");
      }
    });
  });
});
