import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import naukowcy, { naukowiec } from "../../dane";
import { Kolumna3 } from "./Kolumna1";
import { Kolumna1, Kolumna2 } from "./Kolumny";
export const Naukowiec = () => {
    const { id } = useParams();
    const naukowiec: naukowiec = naukowcy.find((x) => x.id == id)!;
    return (
        <>
            <Helmet>
                <title>{naukowiec?.nazwisko}</title>
            </Helmet>
            <header className="bg-secondary text-white ">
                <h1 className="container display-3">{naukowiec?.nazwisko}</h1>
            </header>
            <div className="container">
                <div className="row">
                    <Kolumna1 naukowiec={naukowiec} />
                    <Kolumna2 opis={naukowiec.opis} />
                    <Kolumna3
                        zdjecie={naukowiec.zdjecie}
                        nazwisko={naukowiec.nazwisko}
                    />
                </div>
            </div>
        </>
    );
};
