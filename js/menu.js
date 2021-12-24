( () => {
        const menuBbtnRef = document.querySelector ("[data-menu-button]");
            // const mobileMenuRef = document.querySelector ("data-menu")
        menuBbtnRef.addEventlistener ("click", () => {
            // const expanded = menuBtnRef.getAttribute ("aria-expanded") === "true" || false;
        
        menuBbtnRef.classList.toggle ("is-open");
            // menuBbtnRef.setAttribute("aria-expanded", !expanded);
            // // mobileMenuRef.classList.toggle("is-open");
    });
})();
