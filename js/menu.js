( () => {
    const menuBbtnRef = document.querySelector ("[data-menu-button]");
    
    menuBbtnRef.addEventlistener ("click", () => {
        
        menuBbtnRef.classList.toggle ("is-open");
    
    });
})();
