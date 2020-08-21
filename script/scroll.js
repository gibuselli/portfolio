function initSmoothScroll() {

    const innerLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const section = document.querySelector(href);
        

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    innerLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};

initSmoothScroll();


function initAnimatedScroll() {

    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const windowHalf = window.innerHeight * 0.7;

        function animatedScroll() {
            sections.forEach((section) => {
                const sectionTop = Math.round(section.getBoundingClientRect().top);

                const isSectionVisible = (sectionTop - windowHalf) < 0;

                if(isSectionVisible) {
                    section.classList.add('scroll-ativo');
                } else {
                    section.classList.remove('scroll-ativo');
                };
            });
        };

        animatedScroll();
        window.addEventListener('scroll', animatedScroll);
    };
};

initAnimatedScroll();