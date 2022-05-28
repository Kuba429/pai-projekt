import { Component } from "solid-js";
import { wydarzenie } from "../../dane";

const parentId = "wydarzenia-accordion";
export const Wydarzenia: Component<{ wydarzenia: Array<wydarzenie> }> = ({
    wydarzenia,
}) => {
    return (
        <>
            <div class="accordion accordion-flush" id={parentId}>
                {wydarzenia.map((wydarzenie, i) => {
                    // index potrzebny do id
                    return <AccordionItem index={i} wydarzenie={wydarzenie} />;
                })}
            </div>
        </>
    );
};
const AccordionItem: Component<{ index: number; wydarzenie: wydarzenie }> = ({
    index,
    wydarzenie,
}) => {
    // 2 id pozwalajace bootstrapowi rozrozniac elementy
    const collapeId = `collapseId-${index}`;
    const headingId = `headingId-${index}`;
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id={headingId}>
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + collapeId}
                    aria-expanded="false"
                    aria-controls={collapeId}
                >
                    {wydarzenie.rok}
                </button>
            </h2>
            <div
                id={collapeId}
                class="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent={"#" + parentId}
            >
                <div class="accordion-body">{wydarzenie.tresc}</div>
            </div>
        </div>
    );
};
