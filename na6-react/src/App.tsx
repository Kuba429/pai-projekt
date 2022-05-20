import { Container } from "react-bootstrap";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Tabela } from "./components/Tabela";
import dane from "./dane";

function App() {
    return (
        <div className="App d-flex flex-column">
            <Container className="my-5">
                <h1>Wielcy Naukowcy</h1>
                <Menu dane={dane} />
                <Tabela dane={dane} />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
