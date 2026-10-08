function Competencia() {
    return (
        <section className="slide" id="competencia">
            <h2>Competencia y Ventaja</h2>
            <div className="vs-container">
                
                <div className="vs-column status-quo">
                    <h3 className="column-title">Alternativas Actuales</h3>
                    <ul className="flaw-list">
                        <li>
                            <div className="flaw-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                                    <line x1="8" x2="16" y1="21" y2="21"/>
                                    <line x1="12" x2="12" y1="17" y2="21"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Sistemas Legacy de Escritorio</strong>
                                <p>Herramientas monousuario, lentas, sin acceso para el tutor y sin respaldo en la nube.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flaw-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Libretas Sanitarias de Papel</strong>
                                <p>Se extravían constantemente, carecen de alertas y pierden la trazabilidad médica.</p>
                            </div>
                        </li>
                        <li>
                            <div className="flaw-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                                    <path d="M12 18h.01"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Apps Genéricas Aisladas</strong>
                                <p>Carga manual sin verificación de matrícula profesional ni respaldo de vademécum oficial.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="vs-divider">VS</div>

                <div className="vs-column our-advantage">
                    <div className="advantage-badge">Foso Defensivo</div>
                    <h3 className="column-title advantage-title">El Diferencial VetVault</h3>
                    <div className="advantage-content">
                        <div className="advantage-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                        </div>
                        <p className="advantage-desc">
                            <strong>Cumplimiento Normativo Oficial:</strong> Validación en tiempo real del Colegio de Córdoba y catálogo fármaco-vacunal SENASA.
                        </p>
                        <div className="advantage-highlight">
                            <strong>Copiloto IA Gemini (14 Tools):</strong> Asistencia clínica activa operando directamente sobre la base de datos, con auditoría inmutable y carnet PDF oficial.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
