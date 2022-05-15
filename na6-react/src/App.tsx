import { Menu } from "./components/Menu";
import dane from "./dane";

function App() {
    return (
        <div className="App">
            <h1>Wielcy Naukowcy</h1>
            <Menu dane={dane} />
        </div>
    );
}

export default App;
