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

        // filepath: c:\Users\pc\Desktop\Arwen\TR art portfolio\javaport.js
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        document.getElementById('bg1').style.transform = `translateY(${scrollY * 0.1}px)`;
        document.getElementById('bg6').style.transform = `translateY(${scrollY * 0.1}px)`;
        document.getElementById('bg2').style.transform = `translateY(${scrollY * 0.01}px)`;
        document.getElementById('bg7').style.transform = `translateY(${scrollY * 0.02}px)`;
        document.getElementById('bg3').style.transform = `translateY(${scrollY * 0.02}px)`;
        document.getElementById('bg4').style.transform = `translateY(${scrollY * 0.1}px)`;
        document.getElementById('bg5').style.transform = `translateY(${scrollY * 0.1}px)`;
        document.getElementById('bg8').style.transform = `translateY(${scrollY * 0.08}px)`;
    });
});
