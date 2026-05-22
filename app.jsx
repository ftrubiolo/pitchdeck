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
                <a href="#portada" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="brand-mark"></span>
                    <span>VetVault</span>
                </a>
                <div className="nav-links">
                    <a href="#problema" className="nav-link">Problema / Solución</a>
                    <a href="#producto" className="nav-link">El Producto</a>
                    <a href="#modelo-negocio" className="nav-link">Mercado</a>
                    <a href="#roadmap" className="nav-link">Roadmap</a>
                    <a href="#cierre" className="nav-link">Equipo</a>
                    <a href="#cierre" className="btn btn-primary btn-sm" style={{ marginLeft: "0.5rem" }}>Solicitar Acceso Beta</a>
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

function SlideProgress() {
    const [activeSection, setActiveSection] = useState('');
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Obtenemos todas las secciones con la clase .slide dinámicamente
        const slideElements = Array.from(document.querySelectorAll('.slide'));
        setSections(slideElements.map(el => el.id));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si la sección ocupa al menos la mitad de la pantalla
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.4 });

        slideElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Formatear el ID para mostrar en el tooltip (ej: "modelonegocio" -> "Modelo de Negocio")
    const formatName = (id) => {
        if (!id) return '';
        const names = {
            'portada': 'Portada',
            'problema': 'El Problema',
            'usuario': 'Usuarios',
            'solucion': 'La Solución',
            'producto': 'Producto',
            'funcionalidades': 'Funcionalidades',
            'mercado': 'Tamaño del Mercado',
            'modelonegocio': 'Modelo de Negocio',
            'competencia': 'Competencia',
            'tecnologia': 'Tecnología',
            'roadmap': 'Roadmap',
            'cierre': 'Cierre'
        };
        return names[id] || (id.charAt(0).toUpperCase() + id.slice(1));
    };

    if (sections.length === 0) return null;

    return (
        <div className="slide-progress">
            {sections.map(id => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={`progress-dot ${activeSection === id ? 'active' : ''}`}
                    aria-label={`Ir a la sección ${formatName(id)}`}
                >
                    <span className="dot-tooltip">{formatName(id)}</span>
                </a>
            ))}
        </div>
    );
}

function App() {
    return (
        <>
            <Nav />
            <SlideProgress />
            <Portada />
            <Problema />
            <Usuario />
            <Solucion />
            <Producto />
            <Funcionalidades />
            <Mercado />
            <ModeloNegocio />
            <Competencia />
            <Tecnologia />
            <Roadmap />
            <Cierre />
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);