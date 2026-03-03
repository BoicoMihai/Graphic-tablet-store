const body = document.body;
const inputBox = document.getElementById("input-box");
const button = document.getElementById("button");

button.addEventListener("click", function(){
    const h3 = document.createElement("h3");  
    h3.id = "text";
    body.appendChild(h3);

    const content = inputBox.value;

    if(content != ""){
        alert(`User input: "${content}"`);
        console.log(content);
        text.innerHTML = content;
    }   
    
});

const ContentString = localStorage.setItem("content", JSON.stringify(content));

window.addEventListener("load", function(){
    let savedContent = JSON.parse(localStorage.getItem("content"));
    if(savedContent){
        content = JSON.parse(savedContent);
    }
});
