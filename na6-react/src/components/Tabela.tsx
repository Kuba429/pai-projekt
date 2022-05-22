import React from "react";
import { v4 as uuidv4 } from "uuid";
import { naukowiec } from "../dane";
// ten komponent nie uzywa stylów bootstrapa dla tabel, poniewaz przeznaczenie tej tabeli jest dość nietypowe
export const Tabela: React.FC<{ dane: Array<naukowiec> }> = ({ dane }) => {
    const lata: Array<number> = znajdzLata(dane);
    return (
        <div className="overflow-auto my-3">
            <table>
                <tbody>
                    <>
                        <tr>
                            <td className="podpis"></td>
                            {lata.map((x) => {
                                return <td key={uuidv4()}>{x}</td>;
                            })}
                        </tr>
                        {dane.map((osoba) => {
                            return (
                                <Wiersz
                                    key={uuidv4()}
                                    osoba={osoba}
                                    lata={lata}
                                />
                            );
                        })}
                    </>
                </tbody>
            </table>
        </div>
    );
};
const Wiersz: React.FC<{ osoba: naukowiec; lata: Array<number> }> = ({
    osoba,
    lata,
}) => {
    return (
        <tr>
            <td className="podpis">{osoba.nazwisko}</td>
            {lata.map((rok) => {
                return (
                    <td
                        key={uuidv4()}
                        className={
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
