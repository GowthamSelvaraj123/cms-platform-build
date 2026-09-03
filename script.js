/* loading sections */
function componends(id, file){
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
        console.error(`Error loading ${file}`, error);
    });
}

/* load componends */

componends("about", "about.html");
componends("service", "service.html");
componends("footer", "Footer.html");


