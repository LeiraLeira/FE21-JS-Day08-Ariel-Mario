function createTask() {
    let newTask = document.getElementById("textInputField").value;
    document.getElementById("list").innerHTML += `<li>${newTask}</li>`;
    addRemoveToList();
}
document.getElementById("submitButton").addEventListener("click", createTask);
function addRemoveToList() {
    var items = document.getElementsByTagName("li");
    for (let i in items) {
        items[i].addEventListener("click", function () {
            this.style.opacity = "0";
            // (this) here will back to the element that we will target or select
            this.style.transition = "1s";
            setTimeout(() => { this.remove(); }, 1000);
        });
    }
}


function createTask() {
    let newTask = document.getElementById().value;
}
