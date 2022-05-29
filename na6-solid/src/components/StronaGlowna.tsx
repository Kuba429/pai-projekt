import dane from "../dane";
import { Menu } from "./Menu";
import { Tabela } from "./Tabela";
import { Layout } from "./Layout";
import { InputLata } from "./InputLata";
export const StronaGlowna = () => {
    return (
        <Layout header="Strona Główna">
            <div class="container my-4">
                <Menu dane={dane} />
                <Tabela dane={dane} />
                <InputLata dane={dane} />
            </div>
        </Layout>
    );
};
