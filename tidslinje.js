window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
    console.log("load the SVG");

    fetch("nytidslinje.svg")
        .then(response => response.text())
        .then(svgData => {
            console.log("SVG loaded");


            // TODO: put the SVG into the DOM
            document.querySelector("#thesvg").insertAdjacentHTML("afterbegin", svgData)

            //create our snap objekt
            const snap = Snap("#thesvg svg");
        });
}



async function hentJson() {
    let myJson = await fetch("horcrux.json");
    modal = await myJson.json();
    visModal();
}





//TODO: hover over punkter
//gøre punkter klikbare
//modal vindue til alle punkter

//modal.querySelector(".modal-navn").textContent = horgrux.navn;
//modal.querySelector(".modal-created").textContent = horcrux.created;
//modal.querySelector(":modal-murder").textContent = horcrux.murder;
//modal.querySelector(".modal-how").textContent = horcrux.how;
//modal.querySelector(".modal-where").textContent = horcrux.where;
//modal.querySelector(".modal-hiding").textContent = horcrux.hiding;