window.addEventListener("DOMContentLoaded", loadSVG);
let modal = document.querySelector("#modal");
let modal2 = document.querySelector("#modal2");
let modal3 = document.querySelector("#modal3");
let modal4 = document.querySelector("#modal4");
let modal5 = document.querySelector("#modal5");
let modal6 = document.querySelector("#modal6");
let modal7 = document.querySelector("#modal7");
let modal8 = document.querySelector("#modal8");
let modal9 = document.querySelector("#modal9");
let modal10 = document.querySelector("#modal10");
let modal11 = document.querySelector("#modal11");
let modal12 = document.querySelector("#modal12");
let modal13 = document.querySelector("#modal13");
let modal14 = document.querySelector("#modal14");
let modal15 = document.querySelector("#modal15");
let modal16 = document.querySelector("#modal16");
let modal17 = document.querySelector("#modal17");
function loadSVG() {
    console.log("load the SVG");

    fetch("nytidslinje.svg")
        .then(response => response.text())
        .then(svgData => {
            console.log("SVG loaded");


            // TODO: put the SVG into the DOM
            document.querySelector("#thesvg").insertAdjacentHTML("afterbegin", svgData);

            klikDagbog1();
            klikRing1();
            klikHalskaede1();
            klikPokal1();
            klikDiadem1();
            klikNagini1();
            klikQuirrell1();
            klikHarry1();
            klikDagbog2();
            klikRing2();
            klikHalskaede2();
            klikPokal2();
            klikDiadem2();
            klikNagini2();
            klikQuirrell2();
            klikHarry2();
            klikDoed();
        });
}

function klikDagbog1() {
    document.getElementById("dagbog1").addEventListener("click", visModal);

}

function visModal() {
    modal.classList.add("vis");
    modal.querySelector("button").addEventListener("click", skjulModal);

}

function skjulModal() {
    modal.classList.remove("vis");
}

function klikRing1() {
    document.getElementById("ring1").addEventListener("click", visModal2);

}

function visModal2() {
    modal2.classList.add("vis2");
    modal2.querySelector("button").addEventListener("click", skjulModal2);

}

function skjulModal2() {
    modal2.classList.remove("vis2");
}

function klikHalskaede1() {
    document.getElementById("halskaede1").addEventListener("click", visModal3);

}

function visModal3() {
    modal3.classList.add("vis3");
    modal3.querySelector("button").addEventListener("click", skjulModal3);

}

function skjulModal3() {
    modal3.classList.remove("vis3");
}

function klikPokal1() {
    document.getElementById("pokal1").addEventListener("click", visModal4);

}

function visModal4() {
    modal4.classList.add("vis4");
    modal4.querySelector("button").addEventListener("click", skjulModal4);

}

function skjulModal4() {
    modal4.classList.remove("vis4");
}

function klikDiadem1() {
    document.getElementById("diadem1").addEventListener("click", visModal5);

}

function visModal5() {
    modal5.classList.add("vis5");
    modal5.querySelector("button").addEventListener("click", skjulModal5);

}

function skjulModal5() {
    modal5.classList.remove("vis5");
}

function klikHarry1() {
    document.getElementById("harry1").addEventListener("click", visModal6);

}

function visModal6() {
    modal8.classList.add("vis6");
    modal8.querySelector("button").addEventListener("click", skjulModal6);

}

function skjulModal6() {
    modal8.classList.remove("vis6");
}

function klikQuirrell1() {
    document.getElementById("quirrell1").addEventListener("click", visModal7);

}

function visModal7() {
    modal7.classList.add("vis7");
    modal7.querySelector("button").addEventListener("click", skjulModal7);

}

function skjulModal7() {
    modal7.classList.remove("vis7");
}

function klikNagini1() {
    document.getElementById("nagini1").addEventListener("click", visModal8);

}

function visModal8() {
    modal6.classList.add("vis8");
    modal6.querySelector("button").addEventListener("click", skjulModal8);

}

function skjulModal8() {
    modal6.classList.remove("vis8");
}

function klikDagbog2() {
    document.getElementById("dagbog2").addEventListener("click", visModal9);

}

function visModal9() {
    modal9.classList.add("vis9");
    modal9.querySelector("button").addEventListener("click", skjulModal9);

}

function skjulModal9() {
    modal9.classList.remove("vis9");
}

function klikRing2() {
    document.getElementById("ring2").addEventListener("click", visModal10);

}

function visModal10() {
    modal10.classList.add("vis10");
    modal10.querySelector("button").addEventListener("click", skjulModal10);

}

function skjulModal10() {
    modal10.classList.remove("vis10");
}

function klikHalskaede2() {
    document.getElementById("halskaede2").addEventListener("click", visModal11);

}

function visModal11() {
    modal11.classList.add("vis11");
    modal11.querySelector("button").addEventListener("click", skjulModal11);

}

function skjulModal11() {
    modal11.classList.remove("vis11");
}

function klikPokal2() {
    document.getElementById("pokal2").addEventListener("click", visModal12);

}

function visModal12() {
    modal12.classList.add("vis12");
    modal12.querySelector("button").addEventListener("click", skjulModal12);

}

function skjulModal12() {
    modal12.classList.remove("vis12");
}

function klikDiadem2() {
    document.getElementById("diadem2").addEventListener("click", visModal13);

}

function visModal13() {
    modal13.classList.add("vis13");
    modal13.querySelector("button").addEventListener("click", skjulModal13);

}

function skjulModal13() {
    modal13.classList.remove("vis13");
}

function klikNagini2() {
    document.getElementById("nagini2").addEventListener("click", visModal14);

}

function visModal14() {
    modal14.classList.add("vis14");
    modal14.querySelector("button").addEventListener("click", skjulModal14);

}

function skjulModal14() {
    modal14.classList.remove("vis14");
}

function klikQuirrell2() {
    document.getElementById("quirrell2").addEventListener("click", visModal15);

}

function visModal15() {
    modal15.classList.add("vis15");
    modal15.querySelector("button").addEventListener("click", skjulModal15);

}

function skjulModal15() {
    modal15.classList.remove("vis15");
}

function klikHarry2() {
    document.getElementById("harry2").addEventListener("click", visModal16);

}

function visModal16() {
    modal16.classList.add("vis16");
    modal16.querySelector("button").addEventListener("click", skjulModal16);

}

function skjulModal16() {
    modal16.classList.remove("vis16");
}

function klikDoed() {
    document.getElementById("doed").addEventListener("click", visModal17);

}

function visModal17() {
    modal17.classList.add("vis17");
    modal17.querySelector("button").addEventListener("click", skjulModal17);

}

function skjulModal17() {
    modal17.classList.remove("vis17");
}