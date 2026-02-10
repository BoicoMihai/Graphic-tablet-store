const content = {
    title: "The best website ever",
    
    ImageLinks: [
        "images/AEON LOGO MARK - 2025.svg",
        "images/pen.png",
        "images/stand.png",
        "images/image-removebg-preview.png",
        "images/drawing-tablet.png",
        "images/AEON LOGO MARK - 2025.svg",
        "images/Illustration2.png",
        "images/roaster-main01.webp",
    ],  

    ImageContainerLinks: [
        "images/img2.jpg",
        "images/img3.jpg",
        "images/img4.jpg",
    ],

    Links: [
        "style.css",
        "body.css",
        "boxes.css",
        "header.css",
        "popular.css",
        "phone.css",
    ],

    Buttons: [
        {name: "Discover", link: "#", class: "navbar"},
        {name: "Products", link: "#", class: "navbar"},
        {name: "Support", link: "#", class: "navbar"},
        {name: "Contact", link: "#", class: "navbar"},
    ],

};

document.title = content.title;

const body = document.body;
const Header = document.createElement("header");
const LogoDiv = document.createElement("div");
const AEONLogo = document.createElement("img");
const HeaderText = document.createElement("h1");
const hr = document.createElement("hr");

Header.appendChild(LogoDiv);
LogoDiv.appendChild(AEONLogo);
LogoDiv.appendChild(HeaderText);

Header.className = "header";
LogoDiv.className = "logo"; 
HeaderText.innerText = "AEON";
AEONLogo.setAttribute("src", content.ImageLinks[0]);
hr.className = "hr";

for(let i = 0; i < content.Buttons.length; i++){
    const button = document.createElement("button");
    button.setAttribute("href", content.Buttons[i].link);
    button.innerText = content.Buttons[i].name;
    button.className = content.Buttons[i].class;
    Header.appendChild(button);
}


const slideshow = document.createElement("div");
const imageContainer = document.createElement("div");

for(let i = 0; i < content.ImageContainerLinks.length; i++){
    const image = document.createElement("img");
    image.setAttribute("src", content.ImageContainerLinks[i]);
    imageContainer.appendChild(image);
}

slideshow.appendChild(imageContainer);

slideshow.className = "slideshow";
imageContainer.className = "image-container";
imageContainer.id = "imgs";

body.appendChild(Header);
body.appendChild(hr);

console.log(content);
