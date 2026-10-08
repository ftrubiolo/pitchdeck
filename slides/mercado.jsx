function Mercado() {
    const [view, setView] = React.useState('tam'); // 'tam' | 'dinamica'
    const [activeCard, setActiveCard] = React.useState('som');

    return (
        <section className="slide" id="mercado">
            <div className="mercado-header text-center">
                <h2>Tamaño y Oportunidad del Mercado</h2>
                <p className="mercado-lead">
                    De la macro-demanda de 15M+ de mascotas en Argentina al desembarco validado en Córdoba.
                </p>

                {/* Selector Interactivo de Vista */}
                <div className="mercado-toggle-container">
                    <button 
                        className={`mercado-toggle-btn ${view === 'tam' ? 'active-toggle' : ''}`}
                        onClick={() => setView('tam')}
                        type="button"
                    >
                        <span className="toggle-bullet bullet-blue"></span>
                        <span>Dimensionamiento TAM • SAM • SOM</span>
                    </button>
                    <button 
                        className={`mercado-toggle-btn ${view === 'dinamica' ? 'active-toggle' : ''}`}
                        onClick={() => setView('dinamica')}
                        type="button"
                    >
                        <span className="toggle-bullet bullet-green"></span>
                        <span>Dinámica del Sector & Tracción</span>
                    </button>
                </div>
            </div>

            {view === 'tam' ? (
                /* Vista 1: TAM / SAM / SOM */
                <div className="mercado-tam-grid">
                    {/* TAM */}
                    <div 
                        className={`tam-card ${activeCard === 'tam' ? 'active-tier' : ''}`}
                        onClick={() => setActiveCard('tam')}
                    >
                        <div className="tam-badge badge-tam">TAM • MERCADO TOTAL</div>
                        <div className="tam-metric-row">
                            <span className="tam-big-number text-indigo">15M+</span>
                            <span className="tam-unit">Mascotas</span>
                        </div>
                        <h4 className="tam-title">Demanda B2C en Argentina</h4>
                        <p className="tam-caption">
                            <strong>80% de los hogares</strong> conviven con animales (#1 en tenencia en LatAm). Tutores dispuestos a invertir en salud preventiva y carné digital.
                        </p>

                        <div className="tam-micro-chart">
                            <div className="chart-meta">
                                <span>Penetración en Hogares</span>
                                <strong className="text-indigo">80% (#1 LatAm)</strong>
                            </div>
                            <div className="chart-bar-track">
                                <div className="chart-bar-fill fill-indigo" style={{ width: '80%' }}></div>
                            </div>
                            <div className="chart-legend-row">
                                <span>Argentina: 80%</span>
                                <span>Promedio Regional: 55%</span>
                            </div>
                        </div>

                        <div className="tam-pill-tag">Alcance Tutor / Mascota</div>
                    </div>

                    {/* SAM */}
                    <div 
                        className={`tam-card ${activeCard === 'sam' ? 'active-tier' : ''}`}
                        onClick={() => setActiveCard('sam')}
                    >
                        <div className="tam-badge badge-sam">SAM • MERCADO ATENDIBLE</div>
                        <div className="tam-metric-row">
                            <span className="tam-big-number text-blue">12.000+</span>
                            <span className="tam-unit">Centros</span>
                        </div>
                        <h4 className="tam-title">Clínicas & Profesionales en el País</h4>
                        <p className="tam-caption">
                            Veterinarias y profesionales autónomos en Argentina que requieren modernización SaaS, gestión de turnos y recetas digitales homologadas.
                        </p>

                        <div className="tam-micro-chart">
                            <div className="chart-meta">
                                <span>Brecha de Digitalización</span>
                                <strong className="text-amber">70% Legacy / Papel</strong>
                            </div>
                            <div className="chart-bar-segmented">
                                <div className="seg-segment seg-legacy" style={{ width: '70%' }} title="70% Cuadernos o Software Desktop antiguo"></div>
                                <div className="seg-segment seg-cloud" style={{ width: '30%' }} title="30% Software moderno"></div>
                            </div>
                            <div className="chart-legend-row">
                                <span className="legend-dot-item"><span className="legend-mini-dot dot-amber"></span> 70% Manual / Desktop</span>
                                <span className="legend-dot-item"><span className="legend-mini-dot dot-cyan"></span> 30% Cloud</span>
                            </div>
                        </div>

                        <div className="tam-pill-tag">SaaS B2B Nacional</div>
                    </div>

                    {/* SOM */}
                    <div 
                        className={`tam-card som-highlight-card ${activeCard === 'som' ? 'active-tier' : ''}`}
                        onClick={() => setActiveCard('som')}
                    >
                        <div className="tam-badge badge-som">SOM • MERCADO OBJETIVO INICIAL</div>
                        <div className="tam-metric-row">
                            <span className="tam-big-number text-emerald">2.500+</span>
                            <span className="tam-unit">Matriculados</span>
                        </div>
                        <h4 className="tam-title">Foco de Tracción Inicial en Córdoba</h4>
                        <p className="tam-caption">
                            Profesionales habilitados en el padrón del <strong>Colegio de Médicos Veterinarios de Córdoba (Ley 5589)</strong>. Validación directa y sin fricción de adopción.
                        </p>

                        <div className="tam-micro-chart">
                            <div className="chart-meta">
                                <span>Validación de Matrículas</span>
                                <strong className="text-emerald">100% Padrón Oficial</strong>
                            </div>
                            <div className="chart-bar-track">
                                <div className="chart-bar-fill fill-emerald" style={{ width: '100%' }}></div>
                            </div>
                            <div className="chart-legend-row">
                                <span>Base de Validación: Villa del Rosario & Córdoba</span>
                            </div>
                        </div>

                        <div className="tam-pill-tag pill-som">Target PIN 2026 • Tracción Inmediata</div>
                    </div>
                </div>
            ) : (
                /* Vista 2: Dinámica del Sector & Tracción */
                <div className="mercado-tam-grid">
                    {/* Tarjeta 1: Adopción Pet Tech */}
                    <div className="tam-card">
                        <div className="tam-badge badge-tam">TENDENCIA MACRO</div>
                        <div className="tam-metric-row">
                            <span className="tam-big-number text-indigo">+45%</span>
                            <span className="tam-unit">Crecimiento</span>
                        </div>
                        <h4 className="tam-title">Gasto en Salud Preventiva</h4>
                        <p className="tam-caption">
                            Las familias priorizan medicina preventiva, controles periódicos y planes de vacunación. Demandan historial digital accesible en el smartphone.
                        </p>

                        <div className="tam-micro-chart">
                            <div className="chart-meta">
                                <span>Demanda de Servicios Digitales</span>
                                <strong className="text-indigo">Alta prioridad</strong>
                            </div>
                            <div className="chart-bar-track">
                                <div className="chart-bar-fill fill-indigo" style={{ width: '85%' }}></div>
                            </div>
                            <div className="chart-legend-row">
                                <span>85% tutores prefieren carnet digital al cartón</span>
                            </div>
                        </div>

                        <div className="tam-pill-tag">Fidelización B2C</div>
                    </div>

                    {/* Tarjeta 2: Reemplazo de Software Antiguo */}
                    <div className="tam-card">
                        <div className="tam-badge badge-sam">EFICIENCIA CLÍNICA</div>
                        <div className="tam-metric-row">
                            <span className="tam-big-number text-blue">-60%</span>
                            <span className="tam-unit">Tiempo</span>
                        </div>
                        <h4 className="tam-title">Ahorro Administrativo Diario</h4>
                        <p className="tam-caption">
                            Eliminación de fichas manuscritas, agenda sincronizada y asistencia de IA para resumir antecedentes clínicos en menos de 30 segundos.
                        </p>

                        <div className="tam-micro-chart">
                            <div className="chart-meta">
                                <span>Preparación de la Consulta</span>
                                <strong className="text-blue">De 5 min a 2 min</strong>
                            </div>
                            <div className="chart-bar-segmented">
                                <div className="seg-segment seg-cloud" style={{ width: '40%' }} title="2 min con VetVault"></div>
                                <div className="seg-segment seg-legacy" style={{ width: '60%' }} title="Ahorro del 60%"></div>
                            </div>
                            <div className="chart-legend-row">
                                <span>VetVault: 2 min vs Tradicional: 5+ min</span>
                            </div>
                        </div>

                        <div className="tam-pill-tag">Retorno de Inversión Inmediato</div>
                    </div>

                    {/* Tarjeta 3: Barrera Normativa (Moat) */}
                    <div className="tam-card som-highlight-card">
                        <div className="tam-badge badge-som">VENTAJA COMPETITIVA</div>
                        <div className="tam-metric-row">
                            <span className="tam-big-number text-emerald">100%</span>
                            <span className="tam-unit">Normativo</span>
                        </div>
                        <h4 className="tam-title">Cumplimiento Oficial SENASA & Colegio</h4>
                        <p className="tam-caption">
                            El software genérico carece de validación de matrícula y vademécum nacional. VetVault cuenta con homologación técnica lista para operar.
                        </p>

                        <div className="tam-micro-chart">
                            <div className="chart-meta">
                                <span>Integraciones Normativas</span>
                                <strong className="text-emerald">Respaldo Total</strong>
                            </div>
                            <div className="chart-bar-track">
                                <div className="chart-bar-fill fill-emerald" style={{ width: '100%' }}></div>
                            </div>
                            <div className="chart-legend-row">
                                <span>Ley 5589 (Córdoba) + Catálogo SENASA</span>
                            </div>
                        </div>

                        <div className="tam-pill-tag pill-som">Barrera de Entrada Regulatoria</div>
                    </div>
                </div>
            )}

            {/* Banner Inferior: Estrategia de Captura */}
            <div className="mercado-strategy-bar">
                <div className="strategy-step">
                    <span className="strategy-num">1</span>
                    <div className="strategy-info">
                        <strong>Lanzamiento & Validación (Córdoba)</strong>
                        <span>Penetración en red de ~2.500 profesionales con apoyo académico ISIVR.</span>
                    </div>
                </div>
                <div className="strategy-arrow">➔</div>
                <div className="strategy-step">
                    <span className="strategy-num">2</span>
                    <div className="strategy-info">
                        <strong>Escalado Nacional (Argentina)</strong>
                        <span>Expansión a las +12.000 veterinarias del país vía suscripciones Mercado Pago.</span>
                    </div>
                </div>
                <div className="strategy-arrow">➔</div>
                <div className="strategy-step">
                    <span className="strategy-num">3</span>
                    <div className="strategy-info">
                        <strong>Ecosistema B2B + B2C</strong>
                        <span>Retención cruzada: el tutor exige VetVault en cada nueva clínica que visita.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
