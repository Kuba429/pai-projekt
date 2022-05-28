import dane from "../dane";
import { Menu } from "./Menu";
import { Tabela } from "./Tabela";
import { Layout } from "./Layout";
export const StronaGlowna = () => {
    return (
        <Layout header="Strona Główna">
            <div class="container my-4">
                <Menu dane={dane} />
                <Tabela dane={dane} />
            </div>
        </Layout>
    );
};
