function DashboardMockup({ accent = "blue", title = "Analytics Dashboard" }) {
    return (
        <div className={`dashboard-mockup ${accent}`}>
            <div className="mockup-header">
                <span></span><span></span><span></span>
            </div>

            <div className="mockup-layout">
                <aside className="mockup-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </aside>

                <div className="mockup-main">
                    <div className="mockup-title">
                        <div>
                            <p>System Preview</p>
                            <h3>{title}</h3>
                        </div>
                        <strong>92%</strong>
                    </div>

                    <div className="mockup-kpis">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="mockup-chart">
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardMockup;