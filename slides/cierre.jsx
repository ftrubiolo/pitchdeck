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
                            <a href="beta.html" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', display: 'block', display: 'flex', justifyContent: 'center'}}>
                                <img src="./assets/qr-code.png" alt="Código QR Beta" style={{width: '110px', height: '110px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)'}} />
                            </a>
                            <span className="qr-hint">Escanear para aplicar</span>
                        </div>
                        <div className="contact-info">
                            <h3 className="contact-name">Únete a la Beta Privada</h3>
                            <p className="contact-role">Cupos limitados. Escanea el QR o haz clic en el botón para solicitar acceso anticipado para tu clínica.</p>
                            <a href="beta.html" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Solicitar Acceso Beta</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
