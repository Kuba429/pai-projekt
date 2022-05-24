import { FC, useState } from "react";
import { naukowiec } from "../../dane";

export const Kolumna1: FC<{ naukowiec: naukowiec }> = ({ naukowiec }) => {
    const dataUrodzeniaFormat = ` ${naukowiec?.dataUr.getDay()}.${naukowiec?.dataUr.getMonth()}.${naukowiec?.dataUr.getFullYear()}`;
    const dataSmierciFormat = ` ${naukowiec?.dataSm.getDay()}.${naukowiec?.dataSm.getMonth()}.${naukowiec?.dataSm.getFullYear()}`;
    const wiek = znajdzWiek(naukowiec);
    const [wiekState, setWiekState] = useState("");
    return (
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <p className="text-center">
                Data urodzenia:
                <span className="lead">{dataUrodzeniaFormat}</span>
                <br />
                Data śmierci:
                <span className="lead">{dataSmierciFormat}</span>
                <br />
                {wiekState.length > 0 ? (
                    <>
                        Wiek: <span className="lead">{wiek}</span>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setWiekState(znajdzWiek(naukowiec).toString());
                        }}
                        className="btn btn-secondary"
                    >
                        Oblicz wiek
                    </button>
                )}
            </p>
        </div>
    );
};
export const Kolumna2: FC<{ opis: string }> = ({ opis }) => {
    return (
        <div className="col-12 col-md-4 text-center d-flex align-items-center">
            {opis}
        </div>
    );
};
export const Kolumna3: FC<{ zdjecie: string; nazwisko: string }> = ({
    zdjecie,
    nazwisko,
}) => {
    return (
        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <img
                className="width-auto img-fluid"
                src={zdjecie}
                alt="zdjęcie naukowca"
            />
            <p className="text-center">{nazwisko}</p>
        </div>
    );
};

function znajdzWiek(naukowiec: naukowiec) {
    const roznica = naukowiec.dataSm.getTime()! - naukowiec.dataUr.getTime()!;

    return new Date(roznica).getUTCFullYear() - 1970;
}
