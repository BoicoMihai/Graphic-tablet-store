const SearchBar = document.getElementById("input-box");
const Content = SearchBar.value;

localStorage.setItem("Content", JSON.stringify(Content));

window.addEventListener("load", function() {
    let SavedContent = JSON.parse(localStorage.getItem("Content"));
    if (SavedContent) {
        SearchBar.value = SavedContent;
    }
});



