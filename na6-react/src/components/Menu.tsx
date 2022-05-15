import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { naukowiec } from "../dane";

export const Menu: React.FC<{ dane: Array<naukowiec> }> = ({ dane }) => {
    return (
        <Nav className="flex-column">
            {dane.map((osoba) => {
                return (
                    <NavItem key={osoba.id}>
                        <Nav.Link as={Link} to={`/${osoba.id}`}>
                            {osoba.nazwisko}
                        </Nav.Link>
                    </NavItem>
                );
            })}
        </Nav>
    );
};
