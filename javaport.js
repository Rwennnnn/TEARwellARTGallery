document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-hidden");

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        return (
            elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) - offset &&
            elementBottom >= offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scroll-visible");
        element.classList.remove("scroll-out");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("scroll-visible");
        element.classList.add("scroll-out");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});