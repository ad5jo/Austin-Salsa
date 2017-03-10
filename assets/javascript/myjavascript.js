// http://freemusicarchive.org/genre/Salsa/

var s_songs = [
	"SONGO_21_-_02_-_La_Mujer_de_Antonio",
	"Frank_Guerrero_-_04_-_Barranquilla_Tiene_Un__Swing",
	"Frank_Guerrero_-_03_-_Cupido",
	"Frank_Guerrero_-_02_-_Fui_Yo",
	"arsonist_-_01_-_Hot_salsa_trip"
];

function playAudio() {
	var x = document.getElementById("myAudio");
		x.play();
		// http://audiotrimmer.com/# up to 10 Meg size
}

function stopAudio() {
	var x = document.getElementById("myAudio");

		x.pause();
		// http://audiotrimmer.com/# up to 10 Meg size
}

function pauseAudio() {
	var x = document.getElementById("myAudio");
		x.pause();
		// http://audiotrimmer.com/# up to 10 Meg size
}

playAudio();
