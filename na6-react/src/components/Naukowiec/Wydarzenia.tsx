import { Accordion } from "react-bootstrap";
import { wydarzenie } from "../../dane";

export const Wydarzenia: React.FC<{ wydarzenia: Array<wydarzenie> }> = ({
    wydarzenia,
}) => {
    return (
        <>
            <h4>Ważne wydarzenia w życiu naukowca:</h4>
            <Accordion>
                {wydarzenia.map((w, i) => {
                    return (
                        <Accordion.Item key={i} eventKey={i.toString()}>
                            <Accordion.Header>{w.rok}</Accordion.Header>
                            <Accordion.Body>{w.tresc}</Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </>
    );
};
