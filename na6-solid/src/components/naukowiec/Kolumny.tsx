import { Component, createSignal } from "solid-js";
import { naukowiec } from "../../dane";

export const Kolumna1: Component<{ naukowiec: naukowiec }> = ({
    naukowiec,
}) => {
    const dataUrodzeniaFormat = ` ${naukowiec?.dataUr.getDate()}.${naukowiec?.dataUr.getMonth()}.${naukowiec?.dataUr.getFullYear()}`;
    const dataSmierciFormat = ` ${naukowiec?.dataSm.getDate()}.${naukowiec?.dataSm.getMonth()}.${naukowiec?.dataSm.getFullYear()}`;
    const [wiekSignal, setWiekSignal] = createSignal("");
    return (
        <div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <p class="text-center">
                Data urodzenia:
                <span class="lead">{dataUrodzeniaFormat}</span>
                <br />
                Data śmierci:
                <span class="lead">{dataSmierciFormat}</span>
                <br />
                {wiekSignal().length > 0 ? (
                    <>
                        Wiek: <span class="lead">{wiekSignal()}</span>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setWiekSignal(znajdzWiek(naukowiec).toString());
                        }}
                        class="btn btn-secondary my-2"
                    >
                        Oblicz wiek
                    </button>
                )}
                <br />
                <button
                    onClick={() => {
                        ileMinelo(naukowiec.dataSm);
                    }}
                    class="btn btn-primary my-2"
                >
                    minęło
                </button>
            </p>
        </div>
    );
};
const ileMinelo = (data: Date) => {
    // ile czasu minelo od 1970 do teraz - ile czasu minelo od 1970 do smierci
    let roznica = new Date(new Date().getTime() - data.getTime());
    // ile minęło:
    let lat = roznica.getUTCFullYear() - 1970;
    const miesiecy = roznica.getUTCMonth();
    const dni = roznica.getUTCDate();
    alert(
        `Od śmierci naukowca minęło:\n lat: ${lat}\n miesięcy: ${miesiecy}\n dni: ${dni}`
    );
};

export const Kolumna2: Component<{ opis: string; ciekawostka: string }> = ({
    opis,
    ciekawostka,
}) => {
    return (
        <div class="col-12 col-md-4 text-center d-flex flex-column align-items-center justify-content-center">
            {opis}
            <button
                onClick={() => {
                    alert(ciekawostka);
                }}
                class="btn bg-secondary text-white my-2"
            >
                <img src="lightbulb-bold.svg" width="30" alt="ciekawostka" />
            </button>
        </div>
    );
};
export const Kolumna3: Component<{ zdjecie: string; nazwisko: string }> = ({
    zdjecie,
    nazwisko,
}) => {
    return (
        <div class="col-12 col-md-4 d-flex flex-column align-items-center">
            <img
                class="width-auto img-fluid"
                src={zdjecie}
                alt="zdjęcie naukowca"
            />
            <p class="text-center">{nazwisko}</p>
        </div>
    );
};

function znajdzWiek(naukowiec: naukowiec) {
    const roznica = naukowiec.dataSm.getTime()! - naukowiec.dataUr.getTime()!;

    return new Date(roznica).getUTCFullYear() - 1970;
}
