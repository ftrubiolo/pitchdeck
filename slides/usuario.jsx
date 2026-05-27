function Usuario() {
    const [activePersona, setActivePersona] = React.useState(null);

    const vetQuote = "Amo mi profesión, pero el caos administrativo me está consumiendo. Necesito una herramienta que no me interrumpa mientras estoy en el consultorio y que me ayude a fidelizar a mis clientes sin esfuerzo.";
    const ownerQuote = "Tengo mi vida entera en el celular, pero la salud de mi perro está en una libretita de papel que siempre pierdo. Ojalá mi veterinario me avisara automáticamente cuándo le toca su próxima dosis.";

    return (
        <section className="slide" id="usuario">
            <h2>Nuestros Usuarios</h2>
            
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
                    <h3>El Veterinario</h3>
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
                    <h3>Dueño de Mascota</h3>
                    <div className="quote-bubble owner-quote">
                        <p>"{ownerQuote}"</p>
                    </div>
                </div>

            </div>

            {activePersona === null && (
                <p className="interaction-hint">Haz clic en un perfil para conocer su historia</p>
            )}
        </section>
    );
}
