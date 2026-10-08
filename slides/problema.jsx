function Problema() {
    const [mode, setMode] = React.useState('problema'); // 'problema' | 'solucion'
    const [activeCard, setActiveCard] = React.useState(null);

    const isProblem = mode === 'problema';

    return (
        <section className="slide" id="problema">
            <div className="problema-header text-center">
                <h2>El modelo tradicional está roto</h2>
                <p className="problema-statement">
                    Procesos manuales, libretas de papel y software legacy comprometen la salud animal y la rentabilidad clínica.
                </p>

                {/* Toggle Interactivo de Comparación */}
                <div className="problem-toggle-container">
                    <button 
                        className={`problem-toggle-btn ${isProblem ? 'active-problem' : ''}`}
                        onClick={() => setMode('problema')}
                        type="button"
                    >
                        <span className="toggle-dot dot-danger"></span>
                        <span>Diagnóstico Tradicional</span>
                    </button>
                    <button 
                        className={`problem-toggle-btn ${!isProblem ? 'active-solution' : ''}`}
                        onClick={() => setMode('solucion')}
                        type="button"
                    >
                        <span className="toggle-dot dot-success"></span>
                        <span>Impacto con VetVault</span>
                    </button>
                </div>
            </div>

            {/* 3 Tarjetas con Gráficos Simples */}
            <div className="interactive-problem-grid">
                
                {/* Gráfico 1: Adhesión y Retención Vacunal */}
                <div 
                    className={`interactive-graph-card ${activeCard === 0 ? 'focused' : ''} ${!isProblem ? 'solved-card' : ''}`}
                    onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
                >
                    <div className="card-top-stat">
                        <span className={`graph-big-num ${isProblem ? 'text-red' : 'text-green'}`}>
                            {isProblem ? '-35%' : '95%'}
                        </span>
                        <span className="graph-stat-badge">
                            {isProblem ? 'Abandono de Refuerzos' : 'Retención Vacunal'}
                        </span>
                    </div>

                    {/* Gráfico de Barras / Embudo de Caída */}
                    <div className="simple-graph-box">
                        <div className="funnel-bar-row">
                            <span className="funnel-label">Dosis Inicial</span>
                            <div className="funnel-track">
                                <div className="funnel-fill bar-primary" style={{ width: '100%' }}></div>
                            </div>
                            <span className="funnel-val">100%</span>
                        </div>

                        <div className="funnel-bar-row">
                            <span className="funnel-label">2° Dosis</span>
                            <div className="funnel-track">
                                <div className="funnel-fill bar-primary" style={{ width: isProblem ? '78%' : '98%' }}></div>
                            </div>
                            <span className="funnel-val">{isProblem ? '78%' : '98%'}</span>
                        </div>

                        <div className="funnel-bar-row">
                            <span className="funnel-label">Refuerzo Anual</span>
                            <div className="funnel-track">
                                <div 
                                    className={`funnel-fill ${isProblem ? 'bar-danger' : 'bar-success'}`} 
                                    style={{ width: isProblem ? '65%' : '95%' }}
                                ></div>
                                {isProblem && <div className="funnel-drop-zone" style={{ width: '35%' }}></div>}
                            </div>
                            <span className={`funnel-val ${isProblem ? 'text-red' : 'text-green'}`}>
                                {isProblem ? '65%' : '95%'}
                            </span>
                        </div>
                    </div>

                    <div className="graph-card-footer">
                        <p>
                            {isProblem 
                                ? '1 de cada 3 pacientes no completa su esquema por falta de alertas.' 
                                : 'Recordatorios proactivos al tutor y carnet oficial en PDF 24/7.'}
                        </p>
                    </div>
                </div>

                {/* Gráfico 2: Distribución de la Jornada (Tiempo Médico vs Burocracia) */}
                <div 
                    className={`interactive-graph-card ${activeCard === 1 ? 'focused' : ''} ${!isProblem ? 'solved-card' : ''}`}
                    onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
                >
                    <div className="card-top-stat">
                        <span className={`graph-big-num ${isProblem ? 'text-amber' : 'text-blue'}`}>
                            {isProblem ? '3 hs / día' : '< 15 min'}
                        </span>
                        <span className="graph-stat-badge">
                            {isProblem ? 'Tareas Administrativas' : 'Carga con Copiloto IA'}
                        </span>
                    </div>

                    {/* Gráfico de Balance de Tiempo */}
                    <div className="simple-graph-box">
                        <div className="time-bar-title">
                            <span>Jornada de 8 Horas:</span>
                            <strong>{isProblem ? '38% tiempo improductivo' : '97% tiempo clínico'}</strong>
                        </div>
                        <div className="segmented-time-bar">
                            <div 
                                className="time-seg seg-clinical" 
                                style={{ width: isProblem ? '62.5%' : '97%' }}
                                title="Atención Médica"
                            ></div>
                            <div 
                                className={`time-seg ${isProblem ? 'seg-admin-danger' : 'seg-admin-safe'}`} 
                                style={{ width: isProblem ? '37.5%' : '3%' }}
                                title="Tareas Manuales"
                            ></div>
                        </div>
                        <div className="time-legend">
                            <span className="legend-item"><span className="legend-dot dot-blue"></span> Atención Clínica</span>
                            <span className="legend-item">
                                <span className={`legend-dot ${isProblem ? 'dot-red' : 'dot-green'}`}></span>
                                {isProblem ? 'Papeleo & WhatsApp (3 hs)' : 'Automatizado (<15 min)'}
                            </span>
                        </div>
                    </div>

                    <div className="graph-card-footer">
                        <p>
                            {isProblem 
                                ? 'Horas médicas desperdiciadas buscando fichas y coordinando turnos.' 
                                : '60% menos de tiempo en consulta con el Copiloto IA de 14 tools.'}
                        </p>
                    </div>
                </div>

                {/* Gráfico 3: Cumplimiento Normativo y Respaldo Oficial */}
                <div 
                    className={`interactive-graph-card ${activeCard === 2 ? 'focused' : ''} ${!isProblem ? 'solved-card' : ''}`}
                    onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
                >
                    <div className="card-top-stat">
                        <span className={`graph-big-num ${isProblem ? 'text-red' : 'text-green'}`}>
                            {isProblem ? '0%' : '100%'}
                        </span>
                        <span className="graph-stat-badge">
                            {isProblem ? 'Verificación Oficial' : 'Cumplimiento Legal'}
                        </span>
                    </div>

                    {/* Gráfico de Medidor / Checklist Oficial */}
                    <div className="simple-graph-box compliance-box">
                        <div className="compliance-row">
                            <span className="comp-item-name">Padrón Colegio de Córdoba</span>
                            <span className={`comp-status-chip ${isProblem ? 'chip-danger' : 'chip-success'}`}>
                                {isProblem ? '❌ No verificado' : '✓ Habilitado (Cat. A)'}
                            </span>
                        </div>
                        <div className="compliance-row">
                            <span className="comp-item-name">Vademécum Oficial SENASA</span>
                            <span className={`comp-status-chip ${isProblem ? 'chip-danger' : 'chip-success'}`}>
                                {isProblem ? '❌ Sin control' : '✓ Catálogo Oficial'}
                            </span>
                        </div>
                        <div className="compliance-row">
                            <span className="comp-item-name">Carnet Digital y Receta PDF</span>
                            <span className={`comp-status-chip ${isProblem ? 'chip-danger' : 'chip-success'}`}>
                                {isProblem ? '❌ Papel extraviable' : '✓ PDF Oficial 24/7'}
                            </span>
                        </div>
                    </div>

                    <div className="graph-card-footer">
                        <p>
                            {isProblem 
                                ? 'Sistemas tradicionales sin respaldo de matrícula ni vademécum.' 
                                : 'Seguridad médico-legal completa integrada en cada consulta.'}
                        </p>
                    </div>
                </div>

            </div>

            {/* Strip Inferior Conciso de Doble Perspectiva */}
            <div className="problem-perspective-strip">
                <div className="perspective-item">
                    <span className="persp-icon">🏥</span>
                    <div className="persp-text">
                        <strong>Impacto en la Clínica:</strong>
                        <span>Fuga del 35% de ingresos en revacunación y tiempos prolongados de consulta.</span>
                    </div>
                </div>
                <div className="perspective-divider"></div>
                <div className="perspective-item">
                    <span className="persp-icon">🐾</span>
                    <div className="persp-text">
                        <strong>Impacto en el Tutor:</strong>
                        <span>Cartillas de papel perdidas y mascotas sin cobertura inmunológica continua.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}