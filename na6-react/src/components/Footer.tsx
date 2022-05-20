export const Footer = () => {
    return (
        <footer className="py-4 mt-auto bg-dark text-muted justify-self-end ">
            <div className="container d-flex flex-column justify-content-center gap-3">
                <p className="text-center p-0 m-0">
                    Stronę wykonał Jakub Zawadzki
                </p>
                <a
                    href="https://github.com/Kuba429/pai-projekt"
                    target="blank"
                    className="text-center fs-3 link-secondary"
                >
                    <i className="bi bi-github "></i>
                </a>
            </div>
        </footer>
    );
};
