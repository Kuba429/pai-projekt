export interface naukowiec {
    nazwisko: string;
    id: string;
    dataUr: Date;
    dataSm: Date;
    wikipedia: string;
    zdjecie: string;
    ciekawostka: string;
    opis: string;
    wydarzenia: Array<wydarzenie>;
}
export interface wydarzenie {
    rok: string;
    tresc: string;
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
        opis: "Należy do grona jedynie czterech osób, które otrzymały Nagrodę Nobla więcej niż raz. Wśród nich jest jedną z dwóch, które otrzymały nagrody w różnych dyscyplinach.",
        wydarzenia: [
            {
                rok: "1891",
                tresc: "wyjechała z Królestwa Polskiego do Paryża, by podjąć studia na Sorbonie (w XIX wieku kobiety nie mogły studiować na ziemiach polskich). Następnie rozwinęła tam swoją karierę naukową. Była prekursorką nowej gałęzi chemii. Gałąź ta to radiochemia.",
            },
            {
                rok: "1889",
                tresc: "powróciła do Warszawy. Tutaj zaczęła uzupełniać swoją wiedzę z chemii i fizyki na Uniwersytecie Latającym, m.in. uczestnicząc w laboratoriach Muzeum Przemysłu i Rolnictwa przy Krakowskim Przedmieściu. Pomagał jej cioteczny brat Józef Boguski, były asystent Dymitra Mendelejewa oraz chemik Napoleon Milicer, były współpracownik Roberta Bunsena. To właśnie ci uczeni nauczyli młodą Skłodowską analizy chemicznej, którą później mogła wykorzystać przy pracach umożliwiających jej wyizolowanie radu i polonu.",
            },
            {
                rok: "1903, 1911",
                tresc: "w 1903 została wynagrodzona nagrodą Nobla wraz z mężem Pierre’em Curie i z Henrim Becquerelem, za badania nad odkrytym przez Becquerela zjawiskiem promieniotwórczości. Po raz drugi została nagrodzona w 1911 – z chemii za odkrycie polonu i radu, wydzielenie czystego radu i badanie właściwości chemicznych pierwiastków promieniotwórczych. Należy do grona jedynie czterech osób, który otrzymały Nagrodę Nobla więcej niż raz. Wśród nich jest jedną z dwóch, które otrzymały nagrody w różnych dyscyplinach. W tej czwórce jest też jedyną kobietą oraz jedynym uczonym uhonorowanym w dwóch różnych naukach przyrodniczych.",
            },
        ],
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
        opis: "Twórca szczególnej teorii względności, która ulepszyła mechanikę Newtona i zastąpiła w tej korekcyjnej roli teorię eteru Lorentza. Autor wynikającej z STW równoważności masy i energii, czasem formułowanej słynnym wzorem E = mc2.",
        wydarzenia: [
            {
                rok: "1905",
                tresc: "Opublikował w „Annalen der Physik” trzy artykuły. Były one poświęcone mechanice kwantowej, molekułom i szczegółowej teorii względności. Fizyk Max Born powiedział później, że ten tom roczników jest „jednym z najwybitniejszych tomów w całej naukowej literaturze. Zawiera trzy artykuły Einsteina, każdy poświęcony innemu zagadnieniu i każdy uznany dzisiaj za arcydzieło”. Publikacja artykułów otworzyła Einsteinowi drzwi do tradycyjnie pojmowanej kariery naukowej.",
            },
            {
                rok: "1914",
                tresc: "otrzymał nominację na specjalne dla niego utworzone stanowisko w Pruskiej Akademii Nauk i równocześnie został profesorem Uniwersytetu Berlińskiego. Stanowiska te dały mu możliwość poświęcenia tyle czasu na badania naukowe, ile sam pragnął. Na wyniki nie trzeba było długo czekać, już dwa lata później Einsteinowi udało się sformułować ogólną teorię względności.",
            },
            {
                rok: "1932",
                tresc: "Einstein wraz z żoną na zawsze opuścił Europę. Wyemigrował do USA, gdzie związał się z uniwersytetem Princeton. W tym czasie pracował bez powodzenia nad zunifikowaną teorią pola. „Bóg jest subtelny, ale nie złośliwy” – mówił na początku. Po latach przyznał jednak: „Kto wie, może jest jednak nieco złośliwy”.",
            },
        ],
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
        opis: "Newton zasłynął przede wszystkim jako fizyk – zarówno doświadczalny, jak i teoretyczny. Zajmował się głównie klasyczną mechaniką – w tym mechaniką ośrodków ciągłych, zwłaszcza płynów – oraz grawitacją i optyką, zahaczając też o termodynamikę, geofizykę, badania Kosmosu i fizykę matematyczną.",
        wydarzenia: [
            {
                rok: "1666",
                tresc: "według jego własnej oceny, rok ten był najważniejszym czasem w jego życiu. W związku z panującą zarazą musiał wrócić z Cambridge do rodzinnego domu. W tym czasie przymusowego urlopu dokonał swoich najważniejszych odkryć. Rok ten nazwał „annus mirabilis”.",
            },
            {
                rok: "1668",
                tresc: "uzyskał stopień magistra, a rok później objął stanowisko nauczyciela matematyki uniwersytetu w Cambridge. Następnie w latach 1670-72 wykładał optykę. W roku 1672 został członkiem elitarnego Towarzystwa Królewskiego. Z ramienia uniwersytetu w Cambridge został posłem do Izby Gmin, jednak jego brak aktywności był dobitny. Jako anegdotę należy podać, że zabrał głos tylko raz, prosząc o zamknięcie okna.",
            },
        ],
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
        opis: "Jeden z pionierów i klasyków analizy funkcjonalnej, znany m.in. z opisania twierdzenia o kontrakcji i przestrzeni Banacha. Zajmował się też teorią mnogości, w której podał paradoks rozkładu kuli.",
        wydarzenia: [
            {
                rok: "1916",
                tresc: "dr Hugo Steinhaus zainteresował się przypadkowo spotkanym Banachem (przechodząc Plantami w Krakowie, usłyszał dwóch młodych ludzi rozmawiających o całce Lebesgue’a, zagadnieniu z zaawansowanej teorii miary i całki; byli to Banach i Otton Nikodym). Spotkanie zaowocowało wspólną publikacją i wieloletnią współpracą. W 1920 dzięki wstawiennictwu Steinhausa Banach otrzymał asystenturę (do 1922) w Katedrze Matematyki na Wydziale Mechanicznym Politechniki Lwowskiej u prof. Antoniego Łomnickiego.",
            },
            {
                rok: "1924",
                tresc: "został członkiem Polskiej Akademii Umiejętności. W latach 1922–1939 kierował jednym z zakładów w Instytucie Matematycznym Uniwersytetu Jana Kazimierza, rozwijając wielką działalność naukowo-badawczą. Stał się wkrótce największym autorytetem w analizie funkcjonalnej. Dookoła niego skoncentrowała się plejada młodych talentów dając początek lwowskiej szkole matematyczne",
            },
            {
                rok: "1932",
                tresc: "ukazało się w druku słynne dzieło Banacha Théorie des opérations linéaires jako pierwszy tom nowego wydawnictwa Monografie Matematyczne, którego był jednym z założycieli. Dzieło to przyczyniło się w dużym stopniu do spopularyzowania osiągnięć Banacha wśród ogółu matematyków i do rozwoju analizy funkcjonalnej. O zainteresowaniu świata matematycznego osobą Banacha świadczy między innymi fakt powierzenia mu jednego z odczytów plenarnych na Międzynarodowym Kongresie Matematycznym w Oslo w 1936.",
            },
        ],
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
        opis: "Jako pierwszy na świecie wykorzystał na skalę przemysłową korzyści, jakie daje ropa naftowa. Bardzo sprawny organizator, z czasem dorobił się na ropie naftowej dużego majątku.",
        wydarzenia: [
            {
                rok: "1836",
                tresc: "pracował w aptece Antoniego Swobody w Łańcucie jako praktykant. Była to nie tylko praca, ale przede wszystkim kontynuacja nauki w zakresie chemii i farmacji. W tym czasie rozpoczęła się także jego działalność w organizacjach demokratyczno-niepodległościowych. Doprowadziło to do tego, że Łukasiewicz został zarejestrowany przez władze austriackie jako obywatel politycznie podejrzany.",
            },
            {
                rok: "1840",
                tresc: "zdał egzamin tyrocynalny. Sprawiło to, że awansował na pomocnika aptekarskiego. Przez następnych 6 lat pracował w Rzeszowie jako pomocnik aptekarski u Edwarda Hübla. cały czas dokształcał się w zawodzie aptekarza. W tym czasie cały czas działał na rzecz niepodległości Polski.",
            },
            {
                rok: "1845",
                tresc: "nawiązał znajomość z Edwardem Dembowskim i został zaprzysiężony jako agent Centralizacji Towarzystwa Demokratycznego Polskiego na Rzeszów – była to organizacja o podobnym charakterze jak poprzednie, ale tym razem Łukasiewicz działał już bardzo aktywnie. 19 lutego 1846 roku został aresztowany razem ze współpracownikami. Aresztowanie uniemożliwiło wybuch powstania w Rzeszowie. Następnie został osadzony we Lwowie.",
            },
        ],
    },
];

export default naukowcy;
