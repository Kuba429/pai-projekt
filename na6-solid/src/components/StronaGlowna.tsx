import dane from "../dane";
import { Menu } from "./Menu";
import { Tabela } from "./Tabela";
export const StronaGlowna = () => {
    return (
        <div class="container my-4">
            <Menu dane={dane} />
            <Tabela dane={dane} />
        </div>
    );
};
