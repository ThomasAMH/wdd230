let imagesToLoad = document.querySelectorAll("img[data-src");

const loadImage = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src")
    }
}

imagesToLoad.forEach((img) => {
    loadImage(img);
});