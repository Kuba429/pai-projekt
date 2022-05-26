import { FC } from "react";
import { Footer } from "./Footer";
import { ZmianaKoloru } from "./ZmianaTla";

export const Layout: FC<{ children: JSX.Element; header: string }> = ({
    children,
    header,
}) => {
    return (
        <>
            <header className="bg-secondary text-white ">
                <h1 className="container display-3">{header}</h1>
            </header>
            <ZmianaKoloru />
            {children}
            <Footer />
        </>
    );
};
