import { Container } from "react-bootstrap";
import dane from "../dane";
import { Menu } from "./Menu";
import { Tabela } from "./Tabela";

export const StronaGlowna = () => {
    return (
        <Container className="my-5">
            <h1>Wielcy Naukowcy</h1>
            <Menu dane={dane} />
            <Tabela dane={dane} />
        </Container>
    );
};
