
        const burger = document.getElementById('burger');
        const mobileMenu = document.getElementById('mobileMenu');

        burger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            burger.classList.toggle('active', isOpen);
            burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
        });

        function closeMobileMenu() {
            mobileMenu.classList.remove('open');
            burger.classList.remove('active');
            burger.setAttribute('aria-label', 'Открыть меню');
        }

        //Закрытие меню при клике вне его
        document.addEventListener('click', (e) => {
            if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
