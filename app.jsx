const { useState, useEffect } = React;

function Nav() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 70) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`nav ${isVisible ? '' : 'nav-hidden'}`}>
            <div className="nav-inner">
                <a href="#hero" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="brand-mark"></span>
                    <span>Pitch Deck · VetVault</span>
                </a>
                <div className="nav-links">
                </div>
            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="brand-mark"></span>
                        <span>VetVault</span>
                    </div>
                    <p>Todos los derechos reservados © 2026</p>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <>
            <Nav />
            <Portada />
            <Usuario />
            <Problema />
            <Solucion />
            <Producto />
            <Funcionalidades />
            <Mercado />
            <Tecnologia />
            <ModeloNegocio />
            <Competencia />
            <Roadmap />
            <Cierre />
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);