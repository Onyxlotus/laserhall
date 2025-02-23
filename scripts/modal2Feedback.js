const closeModalThanks = document.getElementsByClassName("close");

// Проверяем, что modalThanks уже объявлена
if (typeof modalThanks !== "undefined" && modalThanks !== null) {
    Array.from(closeModalThanks).forEach(button => {
        button.addEventListener("click", () => {
            modalThanks.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === modalThanks) {
            modalThanks.style.display = "none";
        }
    });
}