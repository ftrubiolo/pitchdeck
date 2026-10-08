function ModeloNegocio() {
    return (
        <section className="slide" id="modelo-negocio">
            <h2>Modelo de Negocio</h2>
            <p className="modelo-lead">Suscripción SaaS recurrente con Mercado Pago para clínicas y acceso libre para tutores.</p>
            
            <div className="modelo-container">
                {/* B2B Plan */}
                <div className="modelo-card b2b-plan">
                    <div className="plan-header">
                        <span className="plan-badge">SaaS Clínico</span>
                        <div className="plan-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="14" x="2" y="5" rx="2" ry="2"/>
                                <line x1="2" x2="22" y1="10" y2="10"/>
                            </svg>
                        </div>
                        <h3>SaaS B2B (Mercado Pago)</h3>
                    </div>
                    <div className="plan-body">
                        <p className="plan-price">Suscripción Mensual Recurrente</p>
                        <p className="plan-desc">Gestión integral, Copiloto IA, SENASA y recetas oficiales en PDF.</p>
                        <ul className="plan-features">
                            <li><strong>Plan Independent:</strong> Veterinarios autónomos y consultas a domicilio.</li>
                            <li><strong>Plan Clinic Pro:</strong> Clínicas multi-profesional, sucursales y turnos en equipo.</li>
                            <li><span>Checkout Pro:</span> Cobros automatizados e integración con webhooks.</li>
                        </ul>
                    </div>
                </div>

                {/* B2C Plan */}
                <div className="modelo-card b2c-plan">
                    <div className="plan-header">
                        <span className="plan-badge free-badge">Para Tutores</span>
                        <div className="plan-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                            </svg>
                        </div>
                        <h3>Portal B2C</h3>
                    </div>
                    <div className="plan-body">
                        <p className="plan-price free-price">100% Gratuito</p>
                        <p className="plan-desc">El carnet sanitario en el celular fideliza al cliente en la clínica.</p>
                        <ul className="plan-features">
                            <li><span>Adopción sin fricción:</span> Sin costo de entrada para el tutor de la mascota.</li>
                            <li><strong>Motor de retención:</strong> Alertas de revacunación que aseguran el regreso al consultorio.</li>
                            <li><span>Carnet digital oficial:</span> Descarga en PDF para viajes y trámites.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
