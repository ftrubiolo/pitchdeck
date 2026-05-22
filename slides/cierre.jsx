function Cierre() {
    return (
        <section className="slide" id="cierre">
            <h2 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>Únete a la evolución del Pet Care</h2>

            <div className="vision-quote">
                <p>"La tecnología avanza, y la forma en que cuidamos a nuestras mascotas también debe hacerlo. <strong>Conectemos a quienes curan con quienes aman.</strong>"</p>
            </div>

            <div className="cierre-container">

                <div className="cierre-left">
                    <h3 className="cierre-subtitle">¿Qué buscamos?</h3>
                    <div className="ask-cards">
                        <div className="ask-card">
                            <div className="ask-icon vet-ask-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div>
                                <h4>Prueba Piloto (Clínicas)</h4>
                                <p>Buscamos <strong>3 clínicas veterinarias pioneras</strong> para nuestra prueba piloto gratuita. Ayúdanos a perfeccionar el sistema en un entorno real.</p>
                            </div>
                        </div>
                        <div className="ask-card">
                            <div className="ask-icon investor-ask-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <div>
                                <h4>Capital Semilla (Inversores)</h4>
                                <p>Buscamos financiamiento para acelerar el despliegue, expandir el equipo y ejecutar la <strong>adquisición de las primeras 50 clínicas</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cierre-right">
                    <div className="contact-card">
                        <div className="contact-qr">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                                <path d="M9 3v7h7v-7z"></path>
                                <path d="M15 9h-6v6h6z"></path>
                            </svg>
                            <span className="qr-hint">Escanear para conectar</span>
                        </div>
                        <div className="contact-info">
                            <h3 className="contact-name">Equipo de Diseño</h3>
                            <p className="contact-role">Product Design & UX/UI</p>
                            <a href="mailto:design@equipo.com" className="contact-email">Contactar al equipo</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
