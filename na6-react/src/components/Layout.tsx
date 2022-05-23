import { FC } from "react";
import { Footer } from "./Footer";

export const Layout: FC<{ children: JSX.Element; header: string }> = ({
    children,
    header,
}) => {
    return (
        <>
            <header className="bg-secondary text-white ">
                <h1 className="container display-3">{header}</h1>
            </header>
            {children}
            <Footer />
        </>
    );
};
