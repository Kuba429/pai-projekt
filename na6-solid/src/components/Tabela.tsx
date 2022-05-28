import { Component } from "solid-js";
import { naukowiec } from "../dane";
// ten komponent nie uzywa stylów bootstrapa dla tabel, poniewaz przeznaczenie tej tabeli jest dość nietypowe
export const Tabela: Component<{ dane: Array<naukowiec> }> = ({ dane }) => {
    const lata: Array<number> = znajdzLata(dane);
    return (
        <div class="overflow-auto my-3">
            <table>
                <tbody>
                    <tr>
                        <td class="podpis"></td>
                        {lata.map((x) => {
                            return <td>{x}</td>;
                        })}
                    </tr>
                    {dane.map((osoba) => {
                        return <Wiersz osoba={osoba} lata={lata} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
const Wiersz: Component<{ osoba: naukowiec; lata: Array<number> }> = ({
    osoba,
    lata,
}) => {
    return (
        <tr>
            <td class="podpis">{osoba.nazwisko}</td>
            {lata.map((rok) => {
                return (
                    <td
                        class={
                            rok >= osoba.dataUr.getFullYear() &&
                            rok <= osoba.dataSm.getFullYear()
                                ? "zamal"
                                : ""
                        }
                    ></td>
                );
            })}
        </tr>
    );
};
function znajdzLata(osoby: Array<naukowiec>): Array<number> {
    let [min, max] = [Infinity, -Infinity];
    osoby.forEach((osoba) => {
        const rokUrodzenia = osoba.dataUr.getFullYear();
        const rokSmierci = osoba.dataSm.getFullYear();
        if (rokUrodzenia <= min) min = rokUrodzenia - 1;
        if (rokSmierci >= max) max = rokSmierci + 2;
    });
    const lata: Array<number> = [];
    for (let i = min; i < max; i++) {
        lata.push(i);
    }
    return lata;
}
