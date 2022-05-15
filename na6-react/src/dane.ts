export interface naukowiec {
    nazwisko: string;
    id: string;
    dataUr: Date;
    dataSm: Date;
    wikipedia: string;
    zdjecie: string;
    ciekawostka: string;
}
const naukowcy: Array<naukowiec> = [
    {
        nazwisko: "Maria Skłodowska-Curie",
        id: "maria",
        // numery miesięcy są liczone od 0; np. 10 == listopad
        dataUr: new Date(1867, 10, 7),
        dataSm: new Date(1934, 6, 4),
        wikipedia: "https://pl.wikipedia.org/wiki/Maria_Skłodowska-Curie",
        zdjecie:
            "https://bi.im-g.pl/im/f3/d2/19/z27076339ICR,Maria-Sklodowska-Curie.jpg",
        ciekawostka: "Maria poszła do szkoły dopiero w wieku 10 lat",
    },
    {
        nazwisko: "Albert Einstein",
        id: "albert",
        dataUr: new Date(1879, 2, 14),
        dataSm: new Date(1955, 3, 18),
        wikipedia: "https://pl.wikipedia.org/wiki/Albert_Einstein",
        zdjecie:
            "https://bi.im-g.pl/im/99/d6/ff/z16766617IBG,Albert-Einstein.jpg",
        ciekawostka:
            "W 2001 roku tygodnik „Time” uznał Einsteina za „człowieka stulecia”.",
    },
    {
        nazwisko: "Isaac Newton",
        id: "isaac",
        dataUr: new Date(1642, 11, 25),
        dataSm: new Date(1727, 2, 20),
        wikipedia: "https://pl.wikipedia.org/wiki/Isaac_Newton",
        zdjecie: "https://quotepark.com/media/authors/isaac-newton.jpeg",
        ciekawostka:
            "Newton nienawidził swojego ojczyma i groził mu podpaleniem jego domu.",
    },
    {
        nazwisko: "Stefan Banach",
        id: "stefan",
        dataUr: new Date(1892, 2, 30),
        dataSm: new Date(1945, 7, 31),
        wikipedia: "https://pl.wikipedia.org/wiki/Stefan_Banach",
        zdjecie:
            "https://upload.wikimedia.org/wikipedia/commons/5/51/Stefana_Banach_-_ستيفان_بناخ.jpg",
        ciekawostka:
            " Był samoukiem w dziedzinie matematyki, ale dorównywał wiedzą naukowcom na poziomie uniwersyteckim",
    },
    {
        nazwisko: "Ignacy Łukasiewicz",
        id: "ignacy",
        dataUr: new Date(1897, 11, 11),
        dataSm: new Date(1973, 2, 22),
        wikipedia: "https://pl.wikipedia.org/wiki/Ignacy_Łukasiewicz",
        zdjecie:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Ignacy_Lukasiewicz.jpg",
        ciekawostka:
            "Działalność Ignacego Łukasińskiego zapoczątkowała rozwój przemysłu naftowego w Polsce.",
    },
];

export default naukowcy;
