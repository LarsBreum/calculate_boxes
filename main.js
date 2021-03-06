var box1A;
var box2A;
var inA;
//brugerens input (det sanne sin dit print)
var boxCorner = [5,20,14,25,12,23,5,17];
var area = prompt("Vælg box1, box2, intersection eller union");
area = area.toLowerCase();

//finder værdierne til boxCorner
x1 = boxCorner[0];
x2 = boxCorner[1];
x3 = boxCorner[2];
x4 = boxCorner[3];
y1 = boxCorner[4];
y2 = boxCorner[5];
y3 = boxCorner[6];
y4 = boxCorner[7];

//function til at udregne areal a kasse 1
function box1A () {
	box1A = (x2 - x1) * (y2 - y1);
	return box1A;
}
//areal af kasse 2
function box2A () {
	box2A = (x4 - x3) * (y4 - y3);
	return box2A;
}
//areal af intersection
function intersectionA () {
	//Math.max er det samme som max() i python
	inA = Math.max(0, Math.min(x2, x4) - Math.max(x1,x3)) * Math.max(0, Math.min(y2,y4) - Math.max(y1, y3));
	return inA;
}


function boxArea() {
	var A;
	//hvis area har samme værdi som "Box1"
	if (area == "box1") {
		//Sæt = resultatet af functionen box1A();
		A = box1A();
	//ellers hvis (samme som elif i python) area == "box2"
	} else if (area == "box2") {
	//Samme princip som ovenfor
		A = box2A();
		//samme som over
	} else if (area == "intersection") {
		//samme som over
		A = intersectionA();
	} else if (area == "union") {
		A = box1A() + box2A() - intersectionA();
	}
	//samme som "return A" i python
	document.getElementById("p").innerHTML = "Du har valgt " 
	+ area + " Den har et areal på: " + A;
}

//kører programmet (det er samme som når du kører programmet i konsollen)
boxArea();