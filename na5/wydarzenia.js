// tworzenie waznych wydarzen w tabeli dynamicznie na podstawie podanych danych
const wypiszWydarzenia = (dane) => {
	console.log(dane);
	const menu = document.querySelector(".menu-daty");
	const table = document.querySelector("#tabela");
	const menuFragment = document.createDocumentFragment();
	const tableFragment = document.createDocumentFragment();
	dane.forEach((wyd) => {
		// tabela
		const tr = document.createElement("tr");
		const tdRok = document.createElement("td");
		const tdTresc = document.createElement("td");
		tdRok.textContent = wyd.rok;
		tdTresc.textContent = wyd.tresc;
		tr.appendChild(tdRok);
		tr.appendChild(tdTresc);
		tr.id = `rok-${wyd.rok}`;
		tableFragment.appendChild(tr);

		// menu
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.textContent = wyd.rok;
		a.href = `#rok-${wyd.rok}`;
		li.appendChild(a);
		menuFragment.appendChild(li);
	});
	table.appendChild(tableFragment);
	menu.appendChild(menuFragment);
};
