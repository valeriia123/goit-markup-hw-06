(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openNavigationBtn: document.querySelector("[data-navigation-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeNavigationBtn: document.querySelector("[data-navigation-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      navigation: document.querySelector("[data-navigation]"),
    };
    refs.openNavigationBtn.addEventListener("click", toggleNavigation);
    refs.closeNavigationBtn.addEventListener("click", toggleNavigation);
    function toggleNavigation() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.navigation.classList.toggle("is-open");
    }
  })();