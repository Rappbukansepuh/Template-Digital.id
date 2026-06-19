var typed = new Typed('#element', {
    strings: ['Rafa Ghazali', 'Web Developer', 'Ui/Ux Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    hamburger.classList.toggle("ri-close-large-line");
});

window.onscroll = () => {
    menu.classList.remove("menu-active");
    hamburger.classList.remove("ri-close-large-line");
};

const btnFilter = document.querySelectorAll(".produk-box ul li");
const itemImg = document.querySelectorAll(".produk-list img");

btnFilter.forEach((data) => {
    data.onclick = () => {
        btnFilter.forEach((btn) => {
            btn.className = "";
        });

        data.className = "active";

        const btnText = data.textContent.trim().toLowerCase();
        
        itemImg.forEach((img) => {
            img.style.display = "none";
            const imgFilter = img.getAttribute("data-filter") ? img.getAttribute("data-filter").toLowerCase() : "";
            
            if (imgFilter === btnText || btnText === "all produk") {
                img.style.display = "block";
            }
        });
    };
});
