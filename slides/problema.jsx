function Problema() {
    return (
        <section className="slide" id="problema">
            <h2>El Problema</h2>
            <div className="problema-container">
                <div className="problema-card">
                    <div className="card-icon vet-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                            <path d="M10 9H8"/>
                            <path d="M16 13H8"/>
                            <path d="M16 17H8"/>
                        </svg>
                    </div>
                    <h3>Veterinarios</h3>
                    <ul className="problema-lista">
                        <li><span>Pérdida de tiempo</span> en tareas administrativas y gestión manual.</li>
                        <li><span>Historias clínicas fragmentadas</span>, en papel o múltiples plataformas.</li>
                        <li><span>Dificultad para fidelizar</span> y retener a sus clientes.</li>
                    </ul>
                </div>

                <div className="problema-card">
                    <div className="card-icon pet-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="4" r="2"/>
                            <circle cx="18" cy="8" r="2"/>
                            <circle cx="20" cy="16" r="2"/>
                            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
                        </svg>
                    </div>
                    <h3>Dueños de Mascotas</h3>
                    <ul className="problema-lista">
                        <li><span>Seguimiento desordenado</span> de vacunas, desparasitaciones y recetas.</li>
                        <li><span>Desconexión con el profesional</span> luego de la consulta veterinaria.</li>
                        <li><span>Olvidos frecuentes</span> de controles preventivos importantes.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
