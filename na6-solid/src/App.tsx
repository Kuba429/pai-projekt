import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import { StronaGlowna } from "./components/StronaGlowna";
import { Naukowiec } from "./components/naukowiec/Naukowiec";

const App: Component = () => {
    return (
        <div class="App d-flex flex-column">
            <Routes>
                <Route path="/" element={<StronaGlowna />} />
                <Route path="/:id" element={<Naukowiec />} />
            </Routes>
        </div>
    );
};

export default App;
