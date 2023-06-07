let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.setAttribute("srcset", image.getAttribute("data-srcset"));
    image.setAttribute("sizes", image.getAttribute("data-sizes"));
    image.onLoad = () => {
        image.removeAttribute("data-src");
        image.removeAttribute("data-srcset");
        image.removeAttribute("data-sizes");
    };
};


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
}