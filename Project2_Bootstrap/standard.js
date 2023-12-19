function swapVisibility(num) {
    let elem = document.getElementById("img-dropdown" + num);
    if (elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = "block";
    } else {
        elem.style.display = "";
    }
}
