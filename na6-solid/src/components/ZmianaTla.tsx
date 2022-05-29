const kolory = ["white", "yellow", "blue", "green", "aqua"];
export const ZmianaTla = () => {
    let zapisanyKolor: string = localStorage.getItem("kolorTla") ?? "white";
    zmienKolor(zapisanyKolor);
    return (
        <div class="zmiana-tla container d-flex justify-content-end gap-2 my-2">
            {kolory.map((kolor) => {
                return (
                    <>
                        <input
                            onInput={() => zmienKolor(kolor)}
                            class="btn-check"
                            checked={kolor == zapisanyKolor}
                            type="radio"
                            name="kolor"
                            id={kolor}
                        />
                        <label
                            class="btn btn-outline-secondary btn-sm"
                            for={kolor}
                        >
                            {kolor}
                        </label>
                    </>
                );
            })}
        </div>
    );
};

const zmienKolor = (kolor: string) => {
    localStorage.setItem("kolorTla", kolor);
    document.body.dataset.kolor = kolor;
};
