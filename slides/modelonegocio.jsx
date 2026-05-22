function ModeloNegocio() {
    return (
        <section className="slide" id="modelo-negocio">
            <h2>Modelo de Negocio</h2>
            <p className="modelo-lead">Estrategia de monetización dual diseñada para maximizar adopción y rentabilidad.</p>
            
            <div className="modelo-container">
                {/* B2B Plan */}
                <div className="modelo-card b2b-plan">
                    <div className="plan-header">
                        <span className="plan-badge">Para Clínicas</span>
                        <div className="plan-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="14" x="2" y="5" rx="2" ry="2"/>
                                <line x1="2" x2="22" y1="10" y2="10"/>
                            </svg>
                        </div>
                        <h3>SaaS B2B</h3>
                    </div>
                    <div className="plan-body">
                        <p className="plan-price">Suscripción Mensual / Anual</p>
                        <p className="plan-desc">Cobro por usar el software de gestión en la clínica.</p>
                        <ul className="plan-features">
                            <li><span>Escalable</span> según cantidad de profesionales o sucursales.</li>
                            <li>Ingresos recurrentes y predecibles.</li>
                        </ul>
                    </div>
                </div>

                {/* B2C Plan */}
                <div className="modelo-card b2c-plan">
                    <div className="plan-header">
                        <span className="plan-badge free-badge">Para Dueños</span>
                        <div className="plan-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                            </svg>
                        </div>
                        <h3>Modelo B2C</h3>
                    </div>
                    <div className="plan-body">
                        <p className="plan-price free-price">100% Gratuito</p>
                        <p className="plan-desc">Añade un valor masivo a la clínica que lo ofrece como beneficio.</p>
                        <ul className="plan-features">
                            <li>Atrae volumen masivo de usuarios.</li>
                            <li><strong>Futuro:</strong> Módulos premium opcionales (e-commerce, seguros).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
