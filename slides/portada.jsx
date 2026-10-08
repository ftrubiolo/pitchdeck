function Portada() {
    return (
        <section className="slide" id="portada">
            <div className="hero-content">
                {/* <div className="hero-badge">Plataforma SaaS • PIN 2026</div> */}
                <h1 className="hero-title">
                    <span className="text-gradient">VetVault</span>
                </h1>
                <p className="hero-tagline">
                    Gestión clínica veterinaria con Inteligencia Artificial,<br />
                    vademécum oficial y trazabilidad integral.
                </p>

                <div className="hero-pills">
                    <span className="hero-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        Padrón Colegio de Córdoba
                    </span>
                    <span className="hero-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
                        Vademécum SENASA
                    </span>
                    <span className="hero-pill highlight-pill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>
                        Copiloto IA Gemini 3.1
                    </span>
                </div>

                <div className="hero-buttons">
                    <a href="#problema" className="btn btn-primary">Explorar Ecosistema</a>
                </div>
            </div>

            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
}
