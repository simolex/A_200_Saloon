const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const linkArray = [...linksHead, mainScroll];

linkArray.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const ID = event.target.getAttribute("href").substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    console.log();
  });
});
