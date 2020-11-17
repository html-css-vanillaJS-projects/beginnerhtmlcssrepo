const $detailbutton = document.querySelector("p");
$detailbutton.addEventListener("click", (evt) => {

    let $desc = document.querySelector(".about-desc");
    if ($desc.style.display === "flex") {
        $desc.style.display = "none";
    } else {
        $desc.style.display = "flex";
        window.scrollTo(0, 1000);

    }


});