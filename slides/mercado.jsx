function Mercado() {
    return (
        <section className="slide" id="mercado">
            <h2>Tamaño del Mercado</h2>
            <p className="mercado-lead">La industria Pet Care y Pet Tech experimenta un <strong>crecimiento explosivo</strong> a nivel global y regional.</p>
            
            <div className="mercado-stats-container">
                <div className="stat-card">
                    <div className="stat-icon trend-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                    </div>
                    <div className="stat-value">Crecimiento Explosivo</div>
                    <h4 className="stat-title">Industria Pet Care & Tech</h4>
                    <p className="stat-desc">Aceleración global y regional sin precedentes en la inversión tecnológica para el cuidado animal.</p>
                </div>

                <div className="stat-card highlight-card">
                    <div className="stat-icon family">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                    </div>
                    <div className="stat-value">Un Miembro Más</div>
                    <h4 className="stat-title">Humanización de Mascotas</h4>
                    <p className="stat-desc">Los dueños ("pet lovers") hoy consideran a su mascota como parte vital de la familia moderna.</p>
                </div>

                <div className="stat-card">
                    <div className="stat-icon tech">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                            <path d="M12 18h.01"/>
                        </svg>
                    </div>
                    <div className="stat-value">Alta Disposición</div>
                    <h4 className="stat-title">Adopción de Tecnología</h4>
                    <p className="stat-desc">Mayor propensión a utilizar apps y ecosistemas digitales para asegurar el bienestar de sus animales.</p>
                </div>
            </div>
        </section>
    );
}
