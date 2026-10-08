function Producto() {
    const [activeScreen, setActiveScreen] = React.useState('dashboard');

    const screens = [
        {
            id: 'agenda',
            step: '01',
            label: 'Agenda & Turnos',
            title: 'Agenda y Gestión de Citas Multi-Clínica',
            image: './assets/appointment-scheduling.png',
            badge: 'Padrón Colegio Cba Habilitado',
            url: 'app.vetvault.com/agenda',
            highlights: [
                {
                    title: 'Filtro Multi-Sucursal',
                    desc: 'Gestión coordinada de turnos entre distintas clínicas y profesionales.'
                },
                {
                    title: 'Matrícula Verificada',
                    desc: 'Cotejo oficial con el Colegio de Veterinarios de Córdoba (Cat. A).'
                },
                {
                    title: 'Disponibilidad en Vivo',
                    desc: 'Bloques horarios sin superposiciones y estados de confirmación.'
                }
            ]
        },
        {
            id: 'dashboard',
            step: '02',
            label: 'Dashboard Clínico',
            title: 'Tablero de Control Diario del Veterinario',
            image: './assets/vet-dashboard.png',
            badge: 'Métricas en Tiempo Real',
            url: 'app.vetvault.com/dashboard',
            highlights: [
                {
                    title: 'Métricas de la Jornada',
                    desc: 'Contabilización inmediata de turnos del día y refuerzos pendientes.'
                },
                {
                    title: 'Actividad Semanal',
                    desc: 'Gráficos dinámicos con Recharts para consultas, urgencias y vacunas.'
                },
                {
                    title: 'Acción Rápida "Atender"',
                    desc: 'Timeline interactivo que inicia la atención clínica en un clic.'
                }
            ]
        },
        {
            id: 'profile',
            step: '03',
            label: 'Ficha del Paciente',
            title: 'Historia Clínica Integral y Protocolos SENASA',
            image: './assets/pet-profile.png',
            badge: 'Vademécum SENASA Homologado',
            url: 'app.vetvault.com/pacientes/ficha',
            highlights: [
                {
                    title: 'Ficha Médica 360°',
                    desc: 'Antecedentes, microchip y badges de alerta por alergias graves.'
                },
                {
                    title: 'Curva de Peso Ponderal',
                    desc: 'Evolución cronológica de masa corporal para control nutricional.'
                },
                {
                    title: 'Cálculo de Refuerzos',
                    desc: 'Cálculo automatizado de próximas dosis según protocolos SENASA.'
                }
            ]
        },
        {
            id: 'ai',
            step: '04',
            label: 'Copiloto Clínico IA',
            title: 'Copiloto Conversacional Gemini con 14 Tools',
            image: './assets/vet-dashboard.png',
            badge: 'Google Gemini 3.1 • Tool Calling',
            url: 'app.vetvault.com/copiloto-ia',
            highlights: [
                {
                    title: '14 Tools en Base de Datos',
                    desc: 'Consulta turnos, busca fármacos en vademécum y detecta vacunas vencidas.'
                },
                {
                    title: 'Auditoría Inmutable',
                    desc: 'Persistencia obligatoria de cada tool ejecutada en la tabla audit_log.'
                },
                {
                    title: 'Inyección Contextual RAG',
                    desc: 'Asistente alimentado con los antecedentes clínicos del paciente activo.'
                }
            ]
        }
    ];

    const current = screens.find(s => s.id === activeScreen) || screens[1];

    return (
        <section className="slide" id="producto">
            <div className="producto-header text-center">
                <h2>El Producto en Acción</h2>
                <p className="producto-lead">
                    Sistema real en producción: React 19, Fastify 5 y Copiloto IA con 14 herramientas activas.
                </p>
            </div>

            <div className="producto-showcase-v2">
                {/* Selector de Pantallas / Pasos */}
                <div className="product-nav-tabs">
                    {screens.map(s => (
                        <button
                            key={s.id}
                            className={`product-tab-btn ${activeScreen === s.id ? 'active' : ''}`}
                            onClick={() => setActiveScreen(s.id)}
                            type="button"
                        >
                            <span className="tab-step-badge">{s.step}</span>
                            <span className="tab-step-label">{s.label}</span>
                        </button>
                    ))}
                </div>

                {/* Marco de Dispositivo / Ventana de Navegador */}
                <div className="browser-frame">
                    <div className="browser-frame-header">
                        <div className="browser-dots">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <div className="browser-address-bar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            <span className="address-text">{current.url}</span>
                        </div>
                        <div className="browser-status-badge">
                            <span className="status-live-dot"></span>
                            <span>{current.badge}</span>
                        </div>
                    </div>

                    <div className="browser-viewport">
                        {activeScreen === 'ai' ? (
                            <div className="ai-showcase-view">
                                <img 
                                    src="./assets/vet-dashboard.png" 
                                    alt="VetVault Dashboard Clínico" 
                                    className="browser-screen-img ai-bg-dimmed" 
                                />
                                <div className="ai-drawer-container">
                                    <img 
                                        src="./assets/ai-chat.png" 
                                        alt="AIChatDrawer Copiloto Clínico" 
                                        className="ai-drawer-img" 
                                    />
                                </div>
                                <div className="ai-active-pill">
                                    <span className="ai-pulse-dot"></span>
                                    <span>AIChatDrawer Activo • Gemini 3.1 Flash Lite (14 Tools)</span>
                                </div>
                            </div>
                        ) : (
                            <img 
                                src={current.image} 
                                alt={current.title} 
                                className="browser-screen-img" 
                            />
                        )}
                    </div>
                </div>

                {/* Tarjetas de Capacidades del Módulo Activo */}
                <div className="product-highlights-row">
                    {current.highlights.map((h, i) => (
                        <div key={i} className="product-highlight-card">
                            <div className="highlight-card-header">
                                <span className="highlight-bullet">✓</span>
                                <h4>{h.title}</h4>
                            </div>
                            <p>{h.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
