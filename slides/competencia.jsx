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
                                <strong>Sistemas Anticuados</strong>
                                <p>Software de escritorio difícil de usar y obsoleto.</p>
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
                                <strong>Libretas Sanitarias</strong>
                                <p>Papel que se pierde o se olvida constantemente.</p>
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
                                <strong>Apps Aisladas</strong>
                                <p>El dueño debe llenarlas a mano sin respaldo médico.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="vs-divider">VS</div>

                <div className="vs-column our-advantage">
                    <div className="advantage-badge">Nuestra Ventaja</div>
                    <h3 className="column-title advantage-title">Sincronización Automática</h3>
                    <div className="advantage-content">
                        <div className="advantage-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                <polyline points="3.29 7 12 12 20.71 7"/>
                                <line x1="12" x2="12" y1="22" y2="12"/>
                            </svg>
                        </div>
                        <p className="advantage-desc">
                            El dueño <strong>no carga nada</strong>. El veterinario ingresa los datos en consulta y todo se <strong>sincroniza en la nube</strong>.
                        </p>
                        <div className="advantage-highlight">
                            No es solo software de gestión, es una <strong>herramienta de fidelización</strong>.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
