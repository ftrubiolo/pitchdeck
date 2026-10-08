function Usuario() {
    const [activePersona, setActivePersona] = React.useState(null);

    const vetQuote = "Amo la práctica médica, pero pierdo horas en tareas administrativas y buscando dosis. Necesito fichas inmediatas, vademécum SENASA verificado y que el sistema recuerde los refuerzos a mis pacientes sin esfuerzo.";
    const ownerQuote = "Gestiono mi vida desde el celular, pero la salud de mi perro depende de una libreta de papel que siempre pierdo. Necesito su carnet de vacunas oficial en PDF disponible para viajes y saber cuándo toca su próximo refuerzo.";

    return (
        <section className="slide" id="usuario">
            <h2>Nuestros Usuarios</h2>
            <p className="solucion-lead" style={{ marginBottom: "2rem" }}>
                Diseñado para resolver las necesidades concretas de quienes cuidan la salud animal.
            </p>
            
            <div className={`interactive-personas-container ${activePersona ? 'has-active' : ''}`}>
                
                {/* Veterinario */}
                <div 
                    className={`persona-figure vet-figure ${activePersona === 'vet' ? 'active' : ''} ${activePersona === 'owner' ? 'inactive' : ''}`}
                    onClick={() => setActivePersona(activePersona === 'vet' ? null : 'vet')}
                >
                    <div className="persona-avatar vet-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 11v4"/>
                            <path d="M10 13h4"/>
                            <rect width="20" height="14" x="2" y="6" rx="2"/>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </div>
                    <h3>El Médico Veterinario</h3>
                    <span className="badge b2b-badge" style={{ marginBottom: "0.5rem" }}>Profesional Matriculado</span>
                    <div className="quote-bubble vet-quote">
                        <p>"{vetQuote}"</p>
                    </div>
                </div>

                {/* Dueño de Mascota */}
                <div 
                    className={`persona-figure owner-figure ${activePersona === 'owner' ? 'active' : ''} ${activePersona === 'vet' ? 'inactive' : ''}`}
                    onClick={() => setActivePersona(activePersona === 'owner' ? null : 'owner')}
                >
                    <div className="persona-avatar owner-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <h3>El Tutor de Mascota</h3>
                    <span className="badge b2c-badge" style={{ marginBottom: "0.5rem" }}>Cuidado Preventivo</span>
                    <div className="quote-bubble owner-quote">
                        <p>"{ownerQuote}"</p>
                    </div>
                </div>

            </div>

            {activePersona === null && (
                <p className="interaction-hint">Haz clic en un perfil para conocer su perspectiva</p>
            )}
        </section>
    );
}
