import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import naukowcy, { naukowiec } from "../../dane";
import { Kolumna1 } from "./Kolumna1";
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
                    <div className="col-12 col-md-4 text-center d-flex align-items-center">
                        {naukowiec?.opis}
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                        <img
                            className="width-auto img-fluid"
                            src={naukowiec?.zdjecie}
                            alt="zdjęcie naukowca"
                        />
                        <p className="text-center">{naukowiec?.nazwisko}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
