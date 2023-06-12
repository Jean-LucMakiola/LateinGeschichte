const cardOne = document.querySelector("._founding-card1");
const cardOneOpener = document.getElementById("card-button1");
const cardOneCloseMenu = document.querySelector(".card1_nav");

const cardTwo = document.querySelector("._founding-card2");
const cardTwoOpener = document.getElementById("card-button2");
const cardTwoCloseMenu = document.querySelector(".card2_nav");

cardOneOpener.addEventListener("click", () => {
  cardOne.classList.add("active");
});
cardOneCloseMenu.addEventListener("click", () => {
  cardOne.classList.remove("active");
});

cardTwoOpener.addEventListener("click", () => {
  cardTwo.classList.add("active");
});
cardTwoCloseMenu.addEventListener("click", () => {
  cardTwo.classList.remove("active");
});

const expansionTextTitle = document.querySelector(".expansion-content-title");
const expansionTextParagraph = document.querySelector(
  ".expansion-content-para"
);
var expansionMap = document.getElementById("expansion-map");

expansionMap.addEventListener("click", () => {
  expansionMap.classList.toggle("zoomMap");
});

document
  .getElementById("timeline-event-stemp1")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_00_delay-1.8s.gif";

    expansionTextTitle.textContent =
      "Die Geburt Roms: Aufstieg eines Stadtstaates";
    expansionTextParagraph.textContent =
      "Im Jahr 500 v. Chr. markierte die Vertreibung der etruskischen Könige den Beginn eines neuen Kapitels in der Geschichte Roms. Die Gründung des Stadtstaates Rom auf der italischen Halbinsel ebnete den Weg für einen bemerkenswerten Aufstieg. Mit der Etablierung einer eigenen Regierung und eines eigenen politischen Systems begann Rom seinen unaufhaltsamen Aufstieg zu einer bedeutenden Macht in der Region. Dieses Ereignis legte den Grundstein für eine bemerkenswerte Zivilisation, die in den kommenden Jahrhunderten eine führende Rolle spielen sollte.";
  });

//ab hier kopieren
document
  .getElementById("timeline-event-stemp2")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_01_delay-1.8s.gif";
    expansionTextTitle.textContent = "Krieg gegen die Ethrusker";
    expansionTextParagraph.textContent =
      "Rom erobert im Bündnis mit den Latinern die etruskische Stadt Veji und verdoppelt sein Herrschaftsgebiet. Furcht der Latinern vor Roms wachsender Macht; Rom unterwirft die Latinern und ihre Städte werden Teil des römischen Herrschaftsgebiets. Bündnisse mit besiegten Städten tragen zum Aufstieg Roms zur Weltmacht bei. Rom gründet Kolonien als Stützpunkte an wichtigen geografischen Stellen und setzt römische Bürger ein, um die ehemaligen Gegner zu kontrollieren. Langwierige Kämpfe gegen die Samniten; sie werden schließlich zu Bundesgenossen Roms. ";
  });
//bis hier kopieren,

var expansionTwo = document.getElementById("expansion2");
document.getElementById("trigger").addEventListener("click", () => {
  console.log(expansionTwo);
  expansionTwo.classList.toggle("expansion2-active");
});
