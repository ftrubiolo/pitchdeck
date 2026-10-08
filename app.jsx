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
                    <img src="./assets/icon.png" alt="VetVault Logo" className="brand-mark" />
                    <span>VetVault</span>
                </a>
                <div className="nav-links">
                    <a href="#problema" className="nav-link"><strong>Problema / Solución</strong></a>
                    <a href="#producto" className="nav-link">El Producto</a>
                    <a href="#modelo-negocio" className="nav-link">Mercado</a>
                    <a href="#roadmap" className="nav-link">Roadmap</a>
                    <a href="#cierre" className="nav-link">Equipo</a>
                    <a href="#cierre" className="btn btn-primary btn-sm" style={{ marginLeft: "0.5rem" }}>Equipo / Contacto</a>
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
                        <img src="./assets/icon.png" alt="VetVault Logo" className="brand-mark" />
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
            'modelo-negocio': 'Modelo de Negocio',
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
    useEffect(() => {
        let targetIndex = null;
        let lastNavTime = 0;

        const handleReset = () => {
            targetIndex = null;
        };

        const getActiveIndex = (slides) => {
            const viewportMiddle = window.innerHeight / 2;
            let active = 0;
            let minDistance = Infinity;

            for (let i = 0; i < slides.length; i++) {
                const rect = slides[i].getBoundingClientRect();
                if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
                    return i;
                }
                const dist = Math.abs(rect.top);
                if (dist < minDistance) {
                    minDistance = dist;
                    active = i;
                }
            }
            return active;
        };

        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
                return;
            }

            // Avanzar diapositiva: Flecha Derecha, Flecha Abajo, PageDown
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
                const slides = Array.from(document.querySelectorAll('.slide'));
                if (!slides.length) return;

                e.preventDefault();
                let current = targetIndex;
                if (current === null || Date.now() - lastNavTime > 700) {
                    current = getActiveIndex(slides);
                }

                const nextIndex = Math.min(slides.length - 1, current + 1);
                targetIndex = nextIndex;
                lastNavTime = Date.now();

                slides[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (slides[nextIndex].id) {
                    window.history.replaceState(null, '', `#${slides[nextIndex].id}`);
                }
                return;
            }

            // Retroceder diapositiva: Flecha Izquierda, Flecha Arriba, PageUp
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
                const slides = Array.from(document.querySelectorAll('.slide'));
                if (!slides.length) return;

                e.preventDefault();
                let current = targetIndex;
                if (current === null || Date.now() - lastNavTime > 700) {
                    current = getActiveIndex(slides);
                }

                const prevIndex = Math.max(0, current - 1);
                targetIndex = prevIndex;
                lastNavTime = Date.now();

                slides[prevIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (slides[prevIndex].id) {
                    window.history.replaceState(null, '', `#${slides[prevIndex].id}`);
                }
                return;
            }

            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen().catch(() => {});
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen().catch(() => {});
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleReset, { passive: true });
        window.addEventListener('touchstart', handleReset, { passive: true });

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleReset);
            window.removeEventListener('touchstart', handleReset);
        };
    }, []);

    return (
        <>
            <Nav />
            <SlideProgress />
            <Portada />
            <Problema />
            <Solucion />
            <Usuario />
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