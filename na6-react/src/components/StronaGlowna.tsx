import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import dane from "../dane";
import { Layout } from "./Layout";
import { Menu } from "./Menu";
import { Tabela } from "./Tabela";

export const StronaGlowna = () => {
    return (
        <>
            <Helmet>
                <title>Strona Główna</title>
            </Helmet>
            <Layout header={"Wielcy Naukowcy"}>
                <Container className="my-4">
                    <Menu dane={dane} />
                    <Tabela dane={dane} />
                </Container>
            </Layout>
        </>
    );
};
