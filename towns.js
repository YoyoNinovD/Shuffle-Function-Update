document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnDelete").addEventListener("click", deleteTown);
});

function deleteTown() {
    let townName = document.getElementById("townName").value;
    document.getElementById("townName").value = "";
    let removed = false;
    let options = document.querySelectorAll("#towns option");
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent == townName) {
            removed = true;
            options[i].remove();
        }
    }
}
function shuffleOptions() {
    var select = document.getElementById('towns');
    for (var i = select.children.length; i >= 0; i--) {
        select.appendChild(select.children[Math.random() * i | 0]);
    }
}
