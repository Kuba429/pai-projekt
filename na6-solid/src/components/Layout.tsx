import { Component, JSXElement } from "solid-js";
import { Footer } from "./Footer";
import { ZmianaTla } from "./ZmianaTla";
export const Layout: Component<{ children: JSXElement; header: string }> = ({
    children,
    header,
}) => {
    return (
        <>
            <header class="bg-secondary text-white ">
                <h1 class="container display-3">{header}</h1>
            </header>
            <ZmianaTla />
            {children}
            <Footer />
        </>
    );
};
