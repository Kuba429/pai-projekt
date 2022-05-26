import React from "react";

const kolory = ["white", "yellow", "blue", "green", "aqua"];
export const ZmianaKoloru = () => {
    return (
        <div className="zmiana-tla container d-flex justify-content-end gap-2 my-2">
            {kolory.map((kolor) => {
                return (
                    <React.Fragment key={kolor}>
                        <input
                            onInput={() => zmienKolor(kolor)}
                            className="btn-check"
                            defaultChecked={kolor == "white"}
                            type="radio"
                            name="kolor"
                            id={kolor}
                        />
                        <label
                            className="btn btn-outline-secondary btn-sm"
                            htmlFor={kolor}
                        >
                            {kolor}
                        </label>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const zmienKolor = (kolor: string) => {
    document.body.dataset.kolor = kolor;
};
