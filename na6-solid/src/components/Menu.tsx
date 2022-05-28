import { Link } from "solid-app-router";
import { Component } from "solid-js";
import { naukowiec } from "../dane";

export const Menu: Component<{ dane: Array<naukowiec> }> = ({ dane }) => {
    return (
        <ul class="nav flex-column">
            {/* mapuje dane zamiast używania komponentu For, ponieważ dane nie są reaktywne */}
            {dane.map((osoba) => {
                return (
                    <li class="nav-item">
                        <Link class="nav-link" href={`/${osoba.id}`}>
                            {osoba.nazwisko}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
