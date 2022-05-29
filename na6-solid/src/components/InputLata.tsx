import { Component, createSignal } from "solid-js";
import { naukowiec } from "../dane";

export const InputLata: Component<{ dane: Array<naukowiec> }> = ({ dane }) => {
    let formRef;
    const [wynikSignal, setWynikSignal] = createSignal("");
    const handleInput = () => {
        const form = new FormData(formRef);
        const rok: number = form.get("rok") as unknown as number;
        const naukowiecID = form.get("naukowiecID");
        if (!rok || !naukowiecID) {
            setWynikSignal("");
            return;
        }
        const naukowiec = dane.find((x) => x.id == naukowiecID);
        const roznica = rok - naukowiec.dataUr.getFullYear();
        setWynikSignal(
            `Wiek ${naukowiec.nazwiskoDopelniacz} w roku ${rok} to ${roznica}`
        );
    };
    return (
        <>
            <form ref={formRef} onInput={handleInput} class="input-group">
                <input
                    placeholder="Podaj rok"
                    type="number"
                    name="rok"
                    class="form-control"
                />
                <select name="naukowiecID" class="form-select">
                    <option value="" selected hidden disabled>
                        Wybierz naukowca
                    </option>
                    {dane.map((n) => {
                        return <option value={n.id}>{n.nazwisko}</option>;
                    })}
                </select>
            </form>
            <h2>{wynikSignal()}</h2>
        </>
    );
};
