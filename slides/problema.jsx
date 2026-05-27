export default function Problema() {
    return (
        <section className="slide" id="problema">
            <div className="problema-header">
                <h2>El sistema actual está roto</h2>
                <p className="problema-statement">
                    La atención veterinaria actual se ve obstaculizada por procesos manuales y sistemas obsoletos, impactando la salud preventiva.
                </p>
            </div>

            <div className="problema-causas">
                <div className="causa-card">
                    <div className="causa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                    </div>
                    <h4>Historias Clínicas Fragmentadas</h4>
                </div>
                <div className="causa-card">
                    <div className="causa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </div>
                    <h4>WhatsApp No Centralizado</h4>
                </div>
                <div className="causa-card">
                    <div className="causa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <h4>Sistemas de Escritorio Obsoletos</h4>
                </div>
            </div>

            <div className="problema-container">
                <div className="problema-card vet-card">
                    <div className="problema-card-content">
                        <h3>Clínica Veterinaria</h3>
                        <div className="pain-points-tags">
                            <span className="badge">Caos administrativo</span>
                            <span className="badge">Datos descentralizados</span>
                            <span className="badge">Fuga de clientes</span>
                        </div>
                    </div>
                </div>

                <div className="problema-card owner-card">
                    <div className="problema-card-content">
                        <h3>Dueños de Mascotas</h3>
                        <div className="pain-points-tags">
                            <span className="badge">Libretas perdidas</span>
                            <span className="badge">Olvido de vacunas</span>
                            <span className="badge">Falta de seguimiento</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}