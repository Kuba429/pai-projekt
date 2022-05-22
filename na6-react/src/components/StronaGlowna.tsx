import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import dane from "../dane";
import { Menu } from "./Menu";
import { Tabela } from "./Tabela";

export const StronaGlowna = () => {
    return (
        <>
            <Helmet>
                <title>Strona Główna</title>
            </Helmet>
            <header className="bg-secondary text-white ">
                <h1 className="container display-3">Wielcy Naukowcy</h1>
            </header>
            <Container className="my-4">
                <Menu dane={dane} />
                <Tabela dane={dane} />
            </Container>
        </>
    );
};
