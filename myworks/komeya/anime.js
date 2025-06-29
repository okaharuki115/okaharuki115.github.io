document.addEventListener("DOMContentLoaded", function () {
    function fadeInOnScroll(selector) {
        const target = document.querySelector(selector);
        if (!target) {
            console.error(`要素が見つかりませんでした: ${selector}`);
            return;
        }
  
        function handleScroll() {
            const rect = target.getBoundingClientRect();
            const windowHeight = window.innerHeight;
  
            if (rect.top < windowHeight - 100) {
                target.classList.add("show");
                window.removeEventListener("scroll", handleScroll);
            }
        }
  
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }
  
    fadeInOnScroll(".mainimage");
    fadeInOnScroll(".concept");
    fadeInOnScroll(".menu");
    fadeInOnScroll(".access");
  });
  