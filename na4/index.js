const osoby = [
	{
		nazwisko: "Maria Skłodowska-Curie",
		id: "maria",
		// numery miesięcy są liczone od 0; np. 10 == listopad
		dataUr: new Date(1867, 10, 7),
		dataSm: new Date(1934, 6, 4),
	},
	{
		nazwisko: "Albert Einstein",
		id: "albert",
		dataUr: new Date(1879, 2, 14),
		dataSm: new Date(1955, 3, 18),
	},
	{
		nazwisko: "Isaac Newton",
		id: "isaac",
		dataUr: new Date(1642, 11, 25),
		dataSm: new Date(1727, 2, 20),
	},
	{
		nazwisko: "Stefan Banach",
		id: "stefan",
		dataUr: new Date(1892, 2, 30),
		dataSm: new Date(1945, 7, 31),
	},
	{
		nazwisko: "Ignacy Łukasiewicz",
		id: "ignacy",
		dataUr: new Date(1897, 11, 11),
		dataSm: new Date(1973, 2, 22),
	},
];

// znajdz pierwszy i ostatni rok w którym urodził się i umarł którykolwiek z naukowców
const [minRok, maxRok] = (() => {
	let [min, max] = [Infinity, -Infinity];
	osoby.forEach((osoba) => {
		const rokUrodzenia = osoba.dataUr.getFullYear();
		const rokSmierci = osoba.dataSm.getFullYear();
		if (rokUrodzenia < min) min = rokUrodzenia;
		if (rokSmierci > max) max = rokSmierci;
	});
	return [min - 1, max + 1];
})();

// # TABELA
const table = document.querySelector("#os-czasu");

const fragment = document.createDocumentFragment();
const wierszLat = document.createElement("tr");
// puste td będzie znajdować się nad nazwiskami
wierszLat.appendChild(document.createElement("td"));
for (let i = minRok; i <= maxRok; i++) {
	const td = document.createElement("td");
	td.textContent = i;
	td.classList.add("rok");
	wierszLat.appendChild(td);
}
fragment.appendChild(wierszLat);
osoby.forEach((osoba) => {
	const tr = document.createElement("tr");
	const th = document.createElement("th");
	th.textContent = osoba.nazwisko;
	tr.appendChild(th);
	// dodaj tyle komorek dla każdego naukowca ile jest lat pomiędzy pierwszym i ostatnim rokiem
	for (let i = minRok; i <= maxRok; i++) {
		const td = document.createElement("td");
		// dodaj klase 'pelne' gdy rok jest większy (lub równy) od roku urodzenia i mniejszy (lub równy) od roku śmierci (czyli gdy naukowiec żyje)
		if (
			osoba.dataUr.getFullYear() <= i &&
			osoba.dataSm.getFullYear() >= i
		) {
			td.classList.add("pelne");
		}

		tr.appendChild(td);
	}
	fragment.appendChild(tr);
});

table.appendChild(fragment);
