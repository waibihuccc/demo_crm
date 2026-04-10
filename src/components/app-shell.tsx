import type { ReactNode } from "react";

import { moduleNavigation } from "@/config/navigation";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <p className="eyebrow">Demo CRM</p>
          <h1>Sales to delivery foundation</h1>
          <p className="sidebar-copy">
            Internal CRM shell for a project-based data warehouse construction
            business.
          </p>
        </div>

        <nav aria-label="Planned CRM navigation">
          <ul className="nav-list">
            {moduleNavigation.map((item) => (
              <li key={item.label} className="nav-item">
                <span>{item.label}</span>
                <small>{item.summary}</small>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="content-shell">
        <header className="topbar">
          <div>
            <p className="eyebrow">Phase 1 bootstrap</p>
            <h2>Technical foundation only</h2>
          </div>
          <div className="topbar-badge">No business modules yet</div>
        </header>
        {children}
      </div>
    </div>
  );
}
