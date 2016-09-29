var veckodagar = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
var dag = new Date();
var idag = dag.getDay() - 1;
var randomNr = Math.random();
var enText = "Detta är en string variabel";
var hittaEn = enText.search("en");

var paragraph = document.createElement("p");
var veckodagNode = document.createTextNode("idag är det " + veckodagar[idag]);
paragraph.appendChild(veckodagNode);

var mainElement = document.getElementById("mainArea");
mainElement.appendChild(paragraph);

var paragraphTwo = document.createElement("p");
var dagKoll = document.createTextNode("är det onsdag idag? " +(idag == 2));
paragraphTwo.appendChild(dagKoll);
mainElement.appendChild(paragraphTwo);

var paragraphThree = document.createElement("p");
var randNrOneNine = Math.round(randomNr * 100 / 10);
var randNrNode = document.createTextNode("ett random nummer mellan 0-9: " + randNrOneNine);
paragraphThree.appendChild(randNrNode);
mainElement.appendChild(paragraphThree);

var dagText = "Detta är dagens datum i siffror: ";
var paragraphFour = document.createElement("p");
var dateNumbers = document.createTextNode(dagText + Number(dag));
paragraphFour.appendChild(dateNumbers);
mainElement.appendChild(paragraphFour);

var findI = dagText.search("i");
var paragraphFive = document.createElement("p");
var findINode = document.createTextNode("Bokstaven 'i' finns på plats " + findI + " i ovan mening");
paragraphFive.appendChild(findINode);
mainElement.appendChild(paragraphFive);
