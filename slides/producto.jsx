function Producto() {
    return (
        <section className="slide" id="producto">
            <div className="producto-header text-center">
                <h2>El Producto en Acción</h2>
                <p className="producto-lead">Interfaz intuitiva diseñada para agilizar el trabajo diario y conectar con el dueño.</p>
            </div>

            <div className="producto-showcase">
                <div className="mockups-wrapper">
                    <div className="mockup-main">
                        <img src="./assets/vetmockup.png" alt="Portal Clínico" className="mockup-img desktop" />
                        <span className="mockup-badge">Portal Web (Veterinarios)</span>
                    </div>
                    <div className="mockup-secondary">
                        <img src="./assets/usrmockup.png" alt="App Paciente" className="mockup-img mobile" />
                        <span className="mockup-badge">App Móvil (Dueños)</span>
                    </div>
                </div>

                <div className="producto-flujo">
                    <h3>Flujo Principal en 4 Pasos</h3>
                    <div className="pasos-grid">
                        <div className="paso-item">
                            <div className="paso-num">1</div>
                            <div className="paso-text">
                                <h4>Ingreso</h4>
                                <p>Recepción registra al paciente.</p>
                            </div>
                        </div>
                        <div className="paso-item">
                            <div className="paso-num">2</div>
                            <div className="paso-text">
                                <h4>Consulta</h4>
                                <p>Carga ágil de la historia clínica.</p>
                            </div>
                        </div>
                        <div className="paso-item">
                            <div className="paso-num">3</div>
                            <div className="paso-text">
                                <h4>Receta</h4>
                                <p>Emisión digital instantánea.</p>
                            </div>
                        </div>
                        <div className="paso-item">
                            <div className="paso-num">4</div>
                            <div className="paso-text">
                                <h4>Notificación</h4>
                                <p>Alerta automática en la app del dueño.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
