import { useParams } from "react-router-dom";
import naukowcy, { naukowiec } from "../../dane";
export const Naukowiec = () => {
    const { id } = useParams();
    const naukowiec = naukowcy.find((x) => x.id == id);
    return <h1>{naukowiec?.nazwisko}</h1>;
};
