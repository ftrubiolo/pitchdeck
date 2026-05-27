function Funcionalidades() {
    return (
        <section className="slide" id="funcionalidades">
            <h2>Core Features</h2>
            <p className="features-lead">Diseñado para simplificar el día a día de ambos usuarios.</p>

            <div className="features-container">
                
                {/* Profesional */}
                <div className="feature-column vet-column">
                    <div className="column-header">
                        <div className="column-icon vet-theme-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                            </svg>
                        </div>
                        <h3>Panel Clínico</h3>
                        <span className="badge b2b-badge">Profesional</span>
                    </div>

                    <div className="feature-items">
                        <div className="f-item">
                            <div className="f-icon">📝</div>
                            <div className="f-text">
                                <h4>Gestión Integral</h4>
                                <p>Carga de historias clínicas rápida e intuitiva, vinculada al dueño.</p>
                            </div>
                        </div>
                        <div className="f-item">
                            <div className="f-icon">📅</div>
                            <div className="f-text">
                                <h4>Agenda Automatizada</h4>
                                <p>Optimiza tus turnos y reduce inasistencias, devolviéndote horas valiosas de consulta.</p>
                            </div>
                        </div>
                        <div className="f-item highlight-item">
                            <div className="f-icon">✨</div>
                            <div className="f-text">
                                <h4>Asistencia IA</h4>
                                <p>Pre-llenado de datos rutinarios y análisis de historiales largos.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dueño */}
                <div className="feature-column pet-column">
                    <div className="column-header">
                        <div className="column-icon pet-theme-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3>Portal del Dueño</h3>
                        <span className="badge b2c-badge">Paciente</span>
                    </div>

                    <div className="feature-items">
                        <div className="f-item">
                            <div className="f-icon">📱</div>
                            <div className="f-text">
                                <h4>Perfil Digital 24/7</h4>
                                <p>Peso, alergias y vacunas vitales accesibles desde el celular.</p>
                            </div>
                        </div>
                        <div className="f-item">
                            <div className="f-icon">📋</div>
                            <div className="f-text">
                                <h4>Transparencia Cero Papel</h4>
                                <p>Historial y recetas actualizadas en tiempo real.</p>
                            </div>
                        </div>
                        <div className="f-item highlight-item">
                            <div className="f-icon">🔔</div>
                            <div className="f-text">
                                <h4>Recordatorios Automáticos</h4>
                                <p>Notificaciones predictivas de vacunas y turnos agendados.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
