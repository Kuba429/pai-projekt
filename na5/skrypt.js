const przycisk = document.querySelector(".ciekawostka");
przycisk.addEventListener("click", async (e) => {
	// sciezka jest zapisana bezposrednio w elemencie (data-sciezka)
	const sciezka = przycisk.dataset.sciezka;
	let dane = await fetch(sciezka);
	alert(await dane.text());
});
