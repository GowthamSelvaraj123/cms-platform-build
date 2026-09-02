fetch("Footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Footer loading error:", error);
    });
    fetch("about.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("about").innerHTML = data;
    })
    .catch(error => {
        console.error("Footer loading error:", error);
    });