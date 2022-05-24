import { Route, Routes } from "react-router-dom";
import { Naukowiec } from "./components/Naukowiec/Naukowiec";
import { StronaGlowna } from "./components/StronaGlowna";

function App() {
    return (
        <div className="App d-flex flex-column">
            <Routes>
                <Route path="/" element={<StronaGlowna />} />
                <Route path="/:id" element={<Naukowiec />} />
            </Routes>
        </div>
    );
}

export default App;
