const release = new Date("March 20, 2020 10:00:00").getTime();

const x = setInterval(function() {
	const now = new Date().getTime();
	const t = release - now;
	const days = Math.floor(t / (1000 * 60 * 60 * 24));
	const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((t % (1000 * 60)) / 1000);
	document.getElementById("day").innerHTML = days;
	document.getElementById("hour").innerHTML = hours;
	document.getElementById("minute").innerHTML = minutes;
	document.getElementById("second").innerHTML = seconds;
}, 1000);

// TODO When the game comes out, switch to count up
