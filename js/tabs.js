const tabsHandlerElems = document.querySelectorAll(`[data-tabs-handler]`);
const tabsFieldElems = document.querySelectorAll(`[data-tabs-field]`);

for (let tabElement of tabsHandlerElems) {
  tabElement.addEventListener("click", () => {
    tabsHandlerElems.forEach((tabHandler) =>
      tabHandler.classList.remove("design-list__item_active")
    );
    tabElement.classList.add("design-list__item_active");

    tabsFieldElems.forEach((tabField) => {
      if (tabElement.dataset.tabsHandler === tabField.dataset.tabsField) {
        tabField.classList.remove("hidden");
      } else {
        tabField.classList.add("hidden");
      }
    });
  });
}
