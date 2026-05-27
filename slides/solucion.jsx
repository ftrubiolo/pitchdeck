function Solucion() {
    return (
        <section className="slide" id="solucion">
            <h2>VetVault</h2>
            <p className="solucion-lead">Una plataforma centralizada y en la nube que actúa como puente.</p>

            <div className="ecosistema-container">
                <div className="eco-card vet-side">
                    <div className="eco-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                            <path d="M12 7v6" />
                            <path d="M9 10h6" />
                        </svg>
                    </div>
                    <h4>Clínica Veterinaria</h4>
                    <p>Digitaliza y optimiza sus tiempos</p>
                </div>

                <div className="eco-center">
                    <div className="pulse-circle">
                        <img src="./assets/icon.png" alt="VetVault Logo" className="brand-mark-large" />
                    </div>
                    <span className="eco-text">Mismo Ecosistema</span>
                </div>

                <div className="eco-card pet-side">
                    <div className="eco-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                            <path d="M12 18h.01" />
                        </svg>
                    </div>
                    <h4>Dueño de Mascota</h4>
                    <p>App con acceso instantáneo a su salud</p>
                </div>
            </div>
        </section>
    );
}
