function Roadmap() {
    return (
        <section className="slide" id="roadmap">
            <h2>Roadmap</h2>
            <p className="roadmap-lead">El Camino hacia la Escalabilidad</p>

            <div className="timeline-container">

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot active-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge current-phase">Actualidad</span>
                            <h3>Fase 1: MVP y Validación</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Arquitectura base: Frontend en React y Backend en Node.js.</li>
                            <li>Control de Acceso (RBAC) para separar entorno Veterinario y Dueño.</li>
                            <li><strong>Hito clave:</strong> Pruebas piloto (Beta cerrada) en clínicas para validar flujo real.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge">Próximos 3-6 meses</span>
                            <h3>Fase 2: Lanzamiento y B2B</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Lanzamiento oficial v1.0 y afiliación de las primeras clínicas.</li>
                            <li>Alta masiva orgánica de usuarios finales invitados por sus veterinarios.</li>
                            <li>Recopilación de feedback y optimización continua de UI/UX.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge">6-9 meses</span>
                            <h3>Fase 3: Integración de IA</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Módulo IA en panel del veterinario para asistencia en el pre-llenado de datos.</li>
                            <li>Notificaciones predictivas (recordatorios de vacunas, desparasitación).</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge">12+ meses</span>
                            <h3>Fase 4: Expansión y Premium</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Expansión a nivel regional/provincial.</li>
                            <li>Módulos premium: pasarela de pagos integrada e inventario avanzado.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
