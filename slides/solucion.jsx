function Solucion() {
    return (
        <section className="slide" id="solucion">
            <h2>La Solución: VetVault</h2>
            <p className="solucion-lead">
                Un ecosistema SaaS integral en la nube que conecta la práctica médica certificada con el cuidado cotidiano del tutor.
            </p>

            <div className="ecosistema-container">
                <div className="eco-card vet-side">
                    <div className="eco-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <h4>Clínica y Veterinario</h4>
                    <p>Ficha clínica ágil, vademécum SENASA, validación de matrícula y agenda inteligente.</p>
                </div>

                <div className="eco-center">
                    <div className="pulse-circle">
                        <img src="./assets/icon.png" alt="VetVault Logo" className="brand-mark-large" />
                    </div>
                    <span className="eco-text">Copiloto IA Gemini + Cloud</span>
                </div>

                <div className="eco-card pet-side">
                    <div className="eco-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                            <path d="M12 18h.01" />
                        </svg>
                    </div>
                    <h4>Tutor de Mascota</h4>
                    <p>Carnet sanitario oficial en PDF, curva de peso y recordatorios automáticos 24/7.</p>
                </div>
            </div>

            <div className="solucion-pills">
                <span className="badge b2b-badge">Validez Legal (SENASA + Colegio Cba)</span>
                <span className="badge" style={{ background: "rgba(14, 165, 233, 0.15)", color: "var(--accent-blue)" }}>Copiloto IA con 14 Tools</span>
                <span className="badge b2c-badge">Fidelización y Cero Papel</span>
            </div>
        </section>
    );
}
