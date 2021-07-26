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
	//import .mod file
	let trackerData = xhr.response;
	if (trackerData) {
		let byteData = new Uint8Array(trackerData);
		let hex = bufferToHex(byteData)
		document.getElementById("hexx").innerHTML = hex;
		
		console.log(hex);

		// locate the music pattern data

		// edit the music pattern data

		// display the new file data

		// we won't write it out to disk yet, because that's actually going to be a separate part of the system
		// Though if you really want to write it out to a file to listen to, you can.
	}
}
xhr.send();
console.log(xhr);


