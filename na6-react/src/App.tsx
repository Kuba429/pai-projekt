import { Container } from "react-bootstrap";
import { Menu } from "./components/Menu";
import dane from "./dane";

function App() {
    return (
        <div className="App container">
            <h1>Wielcy Naukowcy</h1>
            <Menu dane={dane} />
        </div>
    );
}

export default App;
