const release = new Date("March 20, 2020 10:00:00").getTime();
const now = new Date().getTime();
const titleEl = document.getElementById("title");
const sent1El = document.getElementById("sent1");
const sent2El = document.getElementById("sent2");

if (now <= release) {
	const x = setInterval(function() {
		const now = new Date().getTime();
		const t = release - now;
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((t % (1000 * 60)) / 1000);
		document.getElementById("day").innerHTML = days;
		document.getElementById("hour").innerHTML = hours;
		document.getElementById("minute").innerHTML = minutes;
		document.getElementById("second").innerHTML = seconds;
	}, 1000);
	const title = "<h1>How much longer must I wait?</h1>";
	const sent1 = "<p>I have</p>";
	const sent2 = "<p>until I can play Animal Crossing New Horizons.</p>";
	titleEl.insertAdjacentHTML("afterbegin", title);
	sent1El.insertAdjacentHTML("afterbegin", sent1);
	sent2El.insertAdjacentHTML("afterbegin", sent2);
} else {
	const x = setInterval(function() {
		const now = new Date().getTime();
		const t = now - release;
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((t % (1000 * 60)) / 1000);
		document.getElementById("day").innerHTML = days;
		document.getElementById("hour").innerHTML = hours;
		document.getElementById("minute").innerHTML = minutes;
		document.getElementById("second").innerHTML = seconds;
	}, 1000);
	const title = "<h1>How long has it been?</h1>";
	const sent1 = "<p>It's been</p>";
	const sent2 =
		"<p>since I started playing Animal Crossing New Horizons.</p>";
	titleEl.insertAdjacentHTML("afterbegin", title);
	sent1El.insertAdjacentHTML("afterbegin", sent1);
	sent2El.insertAdjacentHTML("afterbegin", sent2);
}
