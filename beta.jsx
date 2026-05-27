function BetaForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.");
        window.location.href = 'index.html';
    };

    return (
        <div className="beta-form-container">
            <div className="beta-header">
                <img src="./assets/icon.png" alt="VetVault Logo" />
                <h2>Únete a la Beta Privada</h2>
                <p>Déjanos tus datos y te contactaremos para darte acceso prioritario y gratuito a VetVault.</p>
            </div>
            
            <form className="beta-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre de la Clínica / Profesional</label>
                    <input type="text" required placeholder="Ej: Veterinaria San Roque" />
                </div>
                
                <div className="form-group">
                    <label>Nombre del Responsable</label>
                    <input type="text" required placeholder="Ej: Dr. Juan Pérez" />
                </div>
                
                <div className="form-group">
                    <label>Email de Contacto</label>
                    <input type="email" required placeholder="contacto@veterinaria.com" />
                </div>
                
                <div className="form-group">
                    <label>Teléfono (Opcional)</label>
                    <input type="tel" placeholder="+54 9 11 1234 5678" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-beta-submit">
                    Solicitar Acceso
                </button>
                
                <div style={{textAlign: "center", marginTop: "1rem"}}>
                    <a href="index.html" style={{color: "#64748b", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600"}}>
                        ← Volver al Pitch Deck
                    </a>
                </div>
            </form>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("beta-root")).render(<BetaForm />);
