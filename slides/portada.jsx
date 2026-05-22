function Portada() {
    return (
        <section className="slide" id="portada">
            <div className="hero-content">
                <div className="hero-badge">Pitch Deck</div>
                <h1 className="hero-title">
                    <span className="text-gradient">VetVault</span>
                </h1>
                <p className="hero-tagline">
                    Gestión inteligente para veterinarios.<br />
                    Tranquilidad para los dueños.
                </p>
                <div className="hero-buttons">
                    <a href="#problema" className="btn btn-primary">Conoce el proyecto</a>
                </div>
            </div>

            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
}
