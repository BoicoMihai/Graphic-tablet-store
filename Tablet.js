const body = document.body;
const inputBox = document.getElementById("input-box");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const content = inputBox.value;

    if (content !== "") {

        const h3 = document.createElement("h3");
        h3.innerHTML = content;
        body.appendChild(h3);

        alert(`User input: "${content}"`);
        console.log(content);

        localStorage.setItem("content", JSON.stringify(content));
    }
});

window.addEventListener("load", function () {
    let savedContent = JSON.parse(localStorage.getItem("content"));

    if (savedContent) {
        inputBox.value = savedContent;

        const h3 = document.createElement("h3");
        h3.innerHTML = savedContent;
        body.appendChild(h3);
    }
});