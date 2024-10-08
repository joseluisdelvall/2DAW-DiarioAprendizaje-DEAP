document.addEventListener('DOMContentLoaded', function() {
    function toggleSubMenus() {
        const subMenus = document.querySelectorAll('.sub-menu');
        let closestSection = null;
        let closestDistance = Number.POSITIVE_INFINITY;

        subMenus.forEach(subMenu => {
            const sectionId = subMenu.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (section) {
                const rect = section.getBoundingClientRect();
                const distanceFromTop = Math.abs(rect.top);

                // Verifica si la sección está parcialmente visible
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    if (distanceFromTop < closestDistance) {
                        closestDistance = distanceFromTop;
                        closestSection = subMenu;
                    }
                }
            }
        });

        // Ocultar todos los submenús y solo mostrar el que esté más arriba
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });

        if (closestSection) {
            closestSection.style.display = 'block';
        }
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    toggleSubMenus();
    window.addEventListener('scroll', toggleSubMenus);
});