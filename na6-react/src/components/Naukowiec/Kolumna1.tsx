import { FC } from "react";
import { naukowiec } from "../../dane";

export const Kolumna1: FC<{ naukowiec: naukowiec }> = ({ naukowiec }) => {
    const dataUrodzeniaFormat = ` ${naukowiec?.dataUr.getDay()}.${naukowiec?.dataUr.getMonth()}.${naukowiec?.dataUr.getFullYear()}`;
    const dataSmierciFormat = ` ${naukowiec?.dataSm.getDay()}.${naukowiec?.dataSm.getMonth()}.${naukowiec?.dataSm.getFullYear()}`;
    const wiek = znajdzWiek(naukowiec);
    return (
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <p className="text-center">
                Data urodzenia:
                <span className="lead">{dataUrodzeniaFormat}</span>
                <br />
                Data śmierci:
                <span className="lead">{dataSmierciFormat}</span>
                <br />
                Wiek: <span className="lead">{wiek}</span>
            </p>
        </div>
    );
};
function znajdzWiek(naukowiec: naukowiec) {
    const roznica = naukowiec.dataSm.getTime()! - naukowiec.dataUr.getTime()!;

    return new Date(roznica).getUTCFullYear() - 1970;
}
