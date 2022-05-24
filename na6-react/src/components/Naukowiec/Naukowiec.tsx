import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import naukowcy, { naukowiec as naukowiecInterface } from "../../dane";
import { Layout } from "../Layout";
import { Kolumna1, Kolumna2, Kolumna3 } from "./Kolumny";
import { Wydarzenia } from "./Wydarzenia";
export const Naukowiec = () => {
    const { id } = useParams();
    const naukowiec: naukowiecInterface = naukowcy.find((x) => x.id == id)!;

    return (
        <>
            <Helmet>
                <title>{naukowiec?.nazwisko}</title>
            </Helmet>
            <Layout header={naukowiec?.nazwisko}>
                <div className="container mb-5">
                    <div className="row">
                        <Kolumna1 naukowiec={naukowiec} />
                        <Kolumna2
                            ciekawostka={naukowiec.ciekawostka}
                            opis={naukowiec.opis}
                        />
                        <Kolumna3
                            zdjecie={naukowiec.zdjecie}
                            nazwisko={naukowiec.nazwisko}
                        />
                    </div>
                    <Wydarzenia wydarzenia={naukowiec.wydarzenia} />
                </div>
            </Layout>
        </>
    );
};
