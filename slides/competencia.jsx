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
                    <h3 className="column-title advantage-title">Ecosistema Dual (B2B2C)</h3>
                    <div className="advantage-content">
                        <div className="advantage-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
                                <path d="m18 15-2-2"/>
                                <path d="m15 18-2-2"/>
                            </svg>
                        </div>
                        <p className="advantage-desc">
                            El veterinario opera rápido en su portal web y el dueño recibe todo en su celular. <strong>Una herramienta de retención total.</strong>
                        </p>
                        <div className="advantage-highlight">
                            El software se paga solo: los <strong>recordatorios automatizados</strong> (vacunas y turnos) evitan la fuga de clientes.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
