const content = {
    title: "The best website ever",
    ImageLinks: [
        "images/AEON LOGO MARK - 2025.svg",
        "images/pen.png",
        "images/stand.png",
        "images/image-removebg-preview.png",
        "images/drawing-tablet.png",
        "images/img2.jpg",
        "images/img3.jpg",
        "images/img4.jpg",
        "images/AEON LOGO MARK - 2025.svg",
        "images/Illustration2.png",
        "images/roaster-main01.webp",
    ],  

    Links: [
        "style.css",
        "body.css",
        "boxes.css",
        "header.css",
        "popular.css",
        "phone.css",
    ],
};


console.log(content);

document.title = content.title;
const heading1 = document.getElementByTagName("h1")[0];
heading1.innerText = content.title;