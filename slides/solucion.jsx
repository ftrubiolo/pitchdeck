function Solucion() {
    return (
        <section className="slide" id="solucion">
            <h2>La Solución</h2>
            <p className="solucion-lead">Una plataforma centralizada y en la nube que actúa como puente.</p>
            
            <div className="ecosistema-container">
                <div className="eco-card vet-side">
                    <div className="eco-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 6v4"/>
                            <path d="M14 8h-4"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v16"/>
                            <path d="M18 21V9a2 2 0 0 0-2-2h-1"/>
                            <path d="M6 21V9a2 2 0 0 1 2-2h1"/>
                            <path d="M2 21h20"/>
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
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                            <path d="M12 18h.01"/>
                        </svg>
                    </div>
                    <h4>Dueño de Mascota</h4>
                    <p>App con acceso instantáneo a su salud</p>
                </div>
            </div>
        </section>
    );
}
