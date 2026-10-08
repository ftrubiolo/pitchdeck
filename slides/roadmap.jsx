function Roadmap() {
    return (
        <section className="slide" id="roadmap">
            <h2>Evolución y Roadmap</h2>
            <p className="roadmap-lead">Hitos consolidados y proyección estratégica de VetVault.</p>

            <div className="timeline-container">

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot active-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge current-phase">Consolidado (PIN 2026)</span>
                            <h3>Fase 1: Plataforma SaaS Core + IA</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Monorrepitorio React 19 + Fastify 5 + PostgreSQL 16 con Drizzle ORM.</li>
                            <li>Copiloto IA Gemini 3.1 con 14 herramientas operativas y auditoría estricta.</li>
                            <li><strong>Hito clave:</strong> Integración oficial de SENASA, Colegio de Córdoba, Mercado Pago y PDFMake.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge">En Curso</span>
                            <h3>Fase 2: Adopción y Despliegue Clínico</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Despliegue en consultorios y clínicas veterinarias asociadas de Córdoba.</li>
                            <li>Validación de usabilidad clínica en consultorio real (Escala SUS > 85).</li>
                            <li>Afiliación de profesionales a planes SaaS (Independent y Clinic Pro).</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge">Próximo Hito</span>
                            <h3>Fase 3: Mobile App Nativa & Push</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Lanzamiento de la app móvil nativa en React Native para tutores de mascotas.</li>
                            <li>Notificaciones push directas al celular para alertas de vacunación y turnos.</li>
                            <li>Sincronización offline-first del carnet sanitario.</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                        <div className="phase-header">
                            <span className="phase-badge">Visión Futura</span>
                            <h3>Fase 4: Telemedicina y Diagnóstico</h3>
                        </div>
                        <ul className="phase-list">
                            <li>Módulo de telemedicina con WebRTC para triaje y consultas remotas en vivo.</li>
                            <li>Integración automatizada con laboratorios de análisis clínicos (DICOM / PDF).</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
