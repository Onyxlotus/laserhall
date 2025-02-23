const modal = document.getElementById("modal");
const openModal = document.querySelectorAll(".openModal");
const closeModal = document.getElementsByClassName("close");
const modalThanks = document.getElementById("modal-Thanks");
const openModalThanks = document.querySelectorAll(".btn");

openModal.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

Array.from(closeModal).forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "none";
    });
});

openModalThanks.forEach(button => {
    button.addEventListener("click", () =>{
        modalThanks.style.display = "flex";
        modal.style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});