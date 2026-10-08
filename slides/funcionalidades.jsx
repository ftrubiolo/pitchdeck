function Funcionalidades() {
    return (
        <section className="slide" id="funcionalidades">
            <h2>Core Features</h2>
            <p className="features-lead">Diseñado para la excelencia médica, la seguridad clínica y la retención del tutor.</p>

            <div className="features-container">
                
                {/* Profesional */}
                <div className="feature-column vet-column">
                    <div className="column-header">
                        <div className="column-icon vet-theme-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                            </svg>
                        </div>
                        <h3>Portal Clínico</h3>
                        <span className="badge b2b-badge">Profesional</span>
                    </div>

                    <div className="feature-items">
                        <div className="f-item">
                            <div className="f-icon">🛡️</div>
                            <div className="f-text">
                                <h4>Matrícula Oficial Verificada</h4>
                                <p>Cotejo en tiempo real con el padrón del Colegio de Médicos Veterinarios de Córdoba.</p>
                            </div>
                        </div>
                        <div className="f-item">
                            <div className="f-icon">💊</div>
                            <div className="f-text">
                                <h4>Vademécum Oficial SENASA</h4>
                                <p>Catálogo farmacéutico estandarizado y cálculo matemático de refuerzos vacunales.</p>
                            </div>
                        </div>
                        <div className="f-item highlight-item">
                            <div className="f-icon">🤖</div>
                            <div className="f-text">
                                <h4>Copiloto Clínico IA (Gemini 3.1)</h4>
                                <p>14 herramientas operativas para agendar, buscar fármacos y detectar vacunas vencidas.</p>
                            </div>
                        </div>
                        <div className="f-item">
                            <div className="f-icon">📄</div>
                            <div className="f-text">
                                <h4>Documentos Oficiales en PDF</h4>
                                <p>Emisión instantánea de carnet sanitario oficial, recetas y certificados de atención.</p>
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
                        <h3>Portal del Tutor</h3>
                        <span className="badge b2c-badge">Paciente</span>
                    </div>

                    <div className="feature-items">
                        <div className="f-item">
                            <div className="f-icon">📱</div>
                            <div className="f-text">
                                <h4>Carnet Digital 24/7</h4>
                                <p>Historial vacunal completo y tratamientos accesibles desde cualquier navegador móvil.</p>
                            </div>
                        </div>
                        <div className="f-item highlight-item">
                            <div className="f-icon">🔔</div>
                            <div className="f-text">
                                <h4>Alertas Predictivas</h4>
                                <p>Recordatorios automáticos de dosis de refuerzo y turnos para evitar la deserción médica.</p>
                            </div>
                        </div>
                        <div className="f-item">
                            <div className="f-icon">📈</div>
                            <div className="f-text">
                                <h4>Curva Ponderal Evolutiva</h4>
                                <p>Monitoreo cronológico del peso del paciente para detección temprana de patologías.</p>
                            </div>
                        </div>
                        <div className="f-item">
                            <div className="f-icon">💬</div>
                            <div className="f-text">
                                <h4>Asistente Preventivo</h4>
                                <p>Orientación clínica primaria con advertencias éticas y detección de urgencias.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
