function Usuario() {
    return (
        <section className="slide" id="usuario">
            <h2>Nuestros Usuarios</h2>
            <div className="usuario-container">
                {/* B2B Card */}
                <div className="usuario-card">
                    <div className="persona-header vet-theme">
                        <div className="persona-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 11v4"/>
                                <path d="M10 13h4"/>
                                <rect width="20" height="14" x="2" y="6" rx="2"/>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                        </div>
                        <div>
                            <h3>El Veterinario</h3>
                            <span className="badge b2b-badge">Perfil B2B</span>
                        </div>
                    </div>
                    
                    <div className="persona-details">
                        <div className="detail-item">
                            <h4>Perfil</h4>
                            <p>Profesionales independientes, consultorios locales o clínicas medianas.</p>
                        </div>
                        <div className="detail-item">
                            <h4>Necesidad Principal</h4>
                            <p>Optimizar tiempo de consulta, reducir carga administrativa y eliminar papel.</p>
                        </div>
                        <div className="detail-item">
                            <h4>Comportamiento</h4>
                            <p>Buscan herramientas intuitivas que no interrumpan el flujo de atención.</p>
                        </div>
                        <div className="detail-item">
                            <h4>Objetivo de Negocio</h4>
                            <p>Fidelizar a sus clientes con un servicio moderno y diferenciado.</p>
                        </div>
                    </div>
                </div>

                {/* B2C Card */}
                <div className="usuario-card">
                    <div className="persona-header pet-theme">
                        <div className="persona-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                        </div>
                        <div>
                            <h3>Dueño de Mascota</h3>
                            <span className="badge b2c-badge">Perfil B2C</span>
                        </div>
                    </div>
                    
                    <div className="persona-details">
                        <div className="detail-item">
                            <h4>Perfil</h4>
                            <p>Millennials, Gen Z y familias ("pet lovers") que ven a su mascota como familia.</p>
                        </div>
                        <div className="detail-item">
                            <h4>Necesidad Principal</h4>
                            <p>Tranquilidad mental y organización respecto a la salud de su mascota.</p>
                        </div>
                        <div className="detail-item">
                            <h4>Comportamiento</h4>
                            <p>Tienen su vida en el smartphone. Pierden u olvidan libretas sanitarias de papel.</p>
                        </div>
                        <div className="detail-item">
                            <h4>Objetivo Personal</h4>
                            <p>Acceso inmediato a historia médica, vacunas y recordatorios respaldados por su vet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
