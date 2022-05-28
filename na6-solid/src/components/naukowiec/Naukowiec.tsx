import { useParams } from "solid-app-router";
import naukowcy, { naukowiec } from "../../dane";
import { Layout } from "../Layout";
import { Kolumna1, Kolumna2, Kolumna3 } from "./Kolumny";
import { Wydarzenia } from "./Wydarzenia";

export const Naukowiec = () => {
    const { id } = useParams();
    const naukowiec: naukowiec = naukowcy.find((x) => x.id == id);
    return (
        <>
            <Layout header={naukowiec?.nazwisko}>
                <div class="container mb-5">
                    <div class="row">
                        <Kolumna1 naukowiec={naukowiec} />
                        <Kolumna2
                            ciekawostka={naukowiec.ciekawostka}
                            opis={naukowiec.opis}
                        />
                        <Kolumna3
                            zdjecie={naukowiec.zdjecie}
                            nazwisko={naukowiec.nazwisko}
                        />
                        <Wydarzenia wydarzenia={naukowiec.wydarzenia} />
                    </div>
                </div>
            </Layout>
        </>
    );
};
