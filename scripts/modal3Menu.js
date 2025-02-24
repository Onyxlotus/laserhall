const menu = document.getElementById("open-nav-list");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

// Проверяем существование элементов
if (menu && openMenu && closeMenu) {
    function updateMenuVisibility() {
        if (window.innerWidth >= 1280) {
            menu.style.display = "none";
            openMenu.style.display = "none";
            closeMenu.style.display = "none";
        } else {
            menu.style.display = "none";
            openMenu.style.display = "flex";
            closeMenu.style.display = "none";
        }
    }

    // Первоначальная настройка
    updateMenuVisibility();

    // Переключение меню
    openMenu.addEventListener("click", () => {
        menu.style.display = "flex";
        openMenu.style.display = "none";
        closeMenu.style.display = "flex";
    });

    closeMenu.addEventListener("click", () => {
        menu.style.display = "none";
        openMenu.style.display = "flex";
        closeMenu.style.display = "none";
    });

    // Слушаем изменение размера окна
    window.addEventListener("resize", updateMenuVisibility);
}

