import { SectionCard } from "@/components/section-card";
import { moduleNavigation } from "@/config/navigation";

export default function HomePage() {
  return (
    <main className="page-content">
      <section className="hero-card">
        <p className="eyebrow">Technical Foundation</p>
        <h1>CRM bootstrap shell for a project-based B2B workflow.</h1>
        <p className="hero-copy">
          This repository now has the confirmed full-stack foundation for the
          internal CRM, including Next.js app structure, Prisma schema draft,
          shared infrastructure, and a minimal verification path.
        </p>
      </section>

      <section className="card-grid">
        <SectionCard
          title="Confirmed v1 boundaries"
          description="Project tracking stays lightweight, quotations remain header-level, and business modules are intentionally not implemented yet."
        />
        <SectionCard
          title="Foundation coverage"
          description="Layout shell, navigation model, environment parsing, Prisma integration, schema draft, and health endpoint are ready."
        />
        <SectionCard
          title="Verification"
          description="Typecheck, Prisma validation, foundation smoke tests, and production build are wired into a single verify command."
        />
      </section>

      <section className="module-section">
        <div>
          <p className="eyebrow">Planned Modules</p>
          <h2>Reserved navigation for the phase-1 CRM surface.</h2>
        </div>
        <div className="module-grid">
          {moduleNavigation.map((item) => (
            <article key={item.label} className="module-card">
              <h3>{item.label}</h3>
              <p>{item.description}</p>
              <span className="status-pill">Not implemented yet</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
