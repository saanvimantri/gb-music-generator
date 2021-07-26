"use strict";

let url = "Audio/ADpickup.mod"

function bufferToHex(buffer) {
	return [...buffer]
		.map(b =>b.toString(16).padStart(2, "0"))
		.join(" ")
		.match(/.{1,48}/g)
		.join("<br>\n");
}	

let xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.responseType = 'arraybuffer';
xhr.onload = function(event){
	let trackerData = xhr.response;
	if (trackerData) {
		let byteData = new Uint8Array(trackerData);
		let hex = bufferToHex(byteData)
		document.getElementById("hexx").innerHTML = hex;
		
		console.log(hex);
	}
}
xhr.send();
console.log(xhr);

//import .mod file
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
const bytes = "4D 2E 4B 2E 11 1D 60 00";
console.log(buffer);
//change one single goddamn byte

//output .mod file and stick in browser
