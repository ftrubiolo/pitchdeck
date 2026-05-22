function Tecnologia() {
    return (
        <section className="slide" id="tecnologia">
            <h2>Stack Tecnológico</h2>
            <p className="tech-lead">Una arquitectura moderna, robusta y escalable construida para crecer.</p>

            <div className="tech-grid">
                
                <div className="tech-card">
                    <div className="tech-icon react-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="2"/>
                            <path d="M22 12c0 4.418-4.477 8-10 8S2 16.418 2 12s4.477-8 10-8 10 3.582 10 8z"/>
                        </svg>
                    </div>
                    <h3>Frontend</h3>
                    <p className="tech-desc">Experiencia de Usuario</p>
                    <div className="tech-tags">
                        <span className="tag">React</span>
                        <span className="tag">TypeScript</span>
                    </div>
                </div>

                <div className="tech-card">
                    <div className="tech-icon node-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2l9 4.9V17L12 22l-9-4.9V6.9z"/>
                            <path d="M12 2v20"/>
                            <path d="M12 12l9-4.9"/>
                            <path d="M12 12L3 7.1"/>
                        </svg>
                    </div>
                    <h3>Backend & API</h3>
                    <p className="tech-desc">El Motor del Sistema</p>
                    <div className="tech-tags">
                        <span className="tag">Node.js</span>
                    </div>
                </div>

                <div className="tech-card">
                    <div className="tech-icon db-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3"/>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                        </svg>
                    </div>
                    <h3>Base de Datos</h3>
                    <p className="tech-desc">Seguridad de la Información</p>
                    <div className="tech-tags">
                        <span className="tag">Relacional</span>
                        <span className="tag">Cloud</span>
                    </div>
                </div>

                <div className="tech-card highlight-tech">
                    <div className="tech-icon ai-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </div>
                    <h3>Inteligencia Artificial</h3>
                    <p className="tech-desc">El Valor Agregado</p>
                    <div className="tech-tags">
                        <span className="tag ai-tag">Integración IA</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
