import { Container } from "react-bootstrap";
import { Menu } from "./components/Menu";
import { Tabela } from "./components/Tabela";
import dane from "./dane";

function App() {
    return (
        <Container className="App">
            <h1>Wielcy Naukowcy</h1>
            <Menu dane={dane} />
            <Tabela dane={dane} />
        </Container>
    );
}

export default App;
