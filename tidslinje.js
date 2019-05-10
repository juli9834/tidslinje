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
        })
}