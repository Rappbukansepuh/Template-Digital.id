var typed = new Typed('#element', {
      strings: ['Rafa Ghazali', 'Web Developer', 'Ui/Ux Designer'],
      typeSpeed: 50,
    });


const hamburger = document.querySelector
(".ri-menu-3-line");

const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active")
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
}

const btnFilter = document.querySelectorAll
(".produk-box ul li")
const itemImg = document.querySelectorAll(".produk-list img");

btnFilter.forEach((data) => {

    data.onclick = () => {
        btnFilter.forEach((data) => {
            data.className = "";
        });

      data.className = "active";

      // filter active 
      const btnText = data.textContent;
        itemImg.forEach((img) => {
            img.style.display = "none";
            if (img.getAttribute("data-filter") == 
            btnText.toLowerCase() || btnText == "All Produk") {
            img.style.display = "block";
     }
    });
  };
});
