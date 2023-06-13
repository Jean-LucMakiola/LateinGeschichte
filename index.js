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
      "Im Jahr 396 v. Chr. eroberte Rom, unterstützt von den Latinern, die etruskische Stadt Veji und verdoppelte damit sein Herrschaftsgebiet. Die wachsende Macht Roms führte zur Furcht der Latiner, die daraufhin von Rom unterworfen wurden. Die Latinischen Städte wurden Teil des römischen Herrschaftsgebiets. Zudem schloss Rom Bündnisse mit anderen besiegten Städten, was zu seinem Aufstieg zur Weltmacht beitrug. Währenddessen führte Rom langwierige Kämpfe gegen die Samniten, die schließlich zu Bundesgenossen Roms wurden.";
  });
//bis hier kopieren,

document
  .getElementById("timeline-event-stemp3")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_02_delay-1.8s.gif";
    expansionTextTitle.textContent = "Roms erfolgreicher Krieg gegen Tarent und Pyrrhus von Epirus";
    expansionTextParagraph.textContent =
      "Im Jahr 280 v. Chr. führte Rom einen Krieg gegen Tarent, bei dem auch der König Pyrrhus von Epirus auf Seiten der Gegner Roms eingriff. Trotz anfänglicher Schwierigkeiten gelang es Rom, Pyrrhus und seine Armee zu besiegen. ";
  });

  document
  .getElementById("timeline-event-stemp4")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_02_delay-1.8s.gif";
    expansionTextTitle.textContent = "Rom wird eine Großmacht auf der Apenninenhalbinsel";
    expansionTextParagraph.textContent =
      "Um 270 v. Chr. hatte Rom faktisch die gesamte Apenninenhalbinsel unter seiner Kontrolle und wurde zu einer Großmacht im Mittelmeerraum. Dieser Erfolg war teilweise auf die Effektivität der römischen Truppen zurückzuführen, die durch hartes Training, Disziplin und die Fähigkeit, weite Strecken mit schwerem Marschgepäck zurückzulegen, erfolgreich waren. Nach langen Märschen errichteten die Römer befestigte Lager für die Nacht, um ihre Positionen zu sichern.";
  });

  document
  .getElementById("timeline-event-stemp5")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_03_delay-1.8s.gif";
    expansionTextTitle.textContent = "Erster Punischer Krieg und römische Seemacht";
    expansionTextParagraph.textContent =
      "Ab dem Jahr 264 v. Chr. brach der Erste Punische Krieg zwischen Rom und Karthago aus, nachdem über 200 Jahre Frieden zwischen den beiden Mächten geherrscht hatten. Rom schickte Truppen nach Messina, um der bedrohten Stadt zu helfen, und der Krieg dauerte über 20 Jahre, wobei die Kämpfe hauptsächlich auf Sizilien und in Süditalien stattfanden. In diesem Krieg setzte Rom erstmals eine Kriegsflotte ein und besiegte die überlegene Flotte Karthagos, was zu seinem Sieg führte.";
  });

  document
  .getElementById("timeline-event-stemp6")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_04_delay-1.8s.gif";
    expansionTextTitle.textContent = "Sieg in der Seeschlacht vor den Ägatischen Inseln und Folgen für Karthago";
    expansionTextParagraph.textContent =
      "Im Jahr 241 v. Chr. siegten die Römer in der Seeschlacht vor den Ägatischen Inseln und zwangen Karthago zur Übergabe von Sizilien, zur Freilassung aller gefangenen Römer und zur Zahlung von Reparationen. Dieser Sieg führte zu Unruhen und einem Bürgerkrieg in Nordafrika und ermöglichte es Rom, die Inseln Sardinien und Korsika zu besetzen. Gleichzeitig begann der Zweite Punische Krieg in Spanien, als Karthago versuchte, den Verlust von Sizilien, Sardinien und Korsika auszugleichen.";
  });

  document
  .getElementById("timeline-event-stemp7")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_04_delay-1.8s.gif";
    expansionTextTitle.textContent = "Roms katastrophale Niederlage bei der Schlacht von Cannae";
    expansionTextParagraph.textContent =
      "Im Jahr 216 v. Chr. erlitt Rom eine katastrophale Niederlage bei der Schlacht von Cannae gegen Hannibal Barkas. Diese Niederlage führte zu großen Verlusten für Rom und wird oft als eine der schwersten militärischen Niederlagen in der römischen Geschichte angesehen.";
  });

  document
  .getElementById("timeline-event-stemp8")
  .addEventListener("click", () => {
    expansionMap.src = "./media/map/frame_05_delay-1.8s.gif";
    expansionTextTitle.textContent = "Roms Sieg über Hannibal und Ende des Zweiten Punischen Krieges";
    expansionTextParagraph.textContent =
      "Im Jahr 202 v. Chr. führte Rom Gegenangriffe in Spanien durch und besiegte Hannibal vor den Mauern von Karthago. Dadurch wurde Hannibals Armee besiegt und Karthago musste sein Militär aufgeben. Rom gründete außerdem zwei römische Kolonien in Spanien, was den Sieg über Karthago abschloss und das Ende des Zweiten Punischen Krieges markierte.";
  });

var expansionTwo = document.getElementById("expansion2");
document.getElementById("trigger").addEventListener("click", () => {
  console.log(expansionTwo);
  expansionTwo.classList.toggle("expansion2-active");
});
