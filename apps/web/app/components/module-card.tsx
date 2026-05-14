import type { ReactNode } from "react";

type ModuleTagTone =
  | "default"
  | "dependency"
  | "skill"
  | "provider"
  | "warning"
  | "success"
  | "accent";

export type ModuleTag = {
  label: string;
  tone?: ModuleTagTone;
};

export type ModuleCardVariant =
  | "default"
  | "featured"
  | "beta"
  | "coming-soon"
  | "preset"
  | "provider";

type ModuleCardFooterAction = {
  label: string;
  href: string;
};

type ModuleCardProps = {
  name: string;
  title?: string;
  description: string;
  version?: string;
  badge?: string;
  variant?: ModuleCardVariant;
  icon?: ReactNode;
  tags?: ModuleTag[];
  footer?: {
    summary: string;
    actions?: ModuleCardFooterAction[];
  };
};

type ModuleCardRowProps = {
  name: string;
  category: string;
  description: string;
  action?: string;
  selected?: boolean;
  tags?: ModuleTag[];
};

const variantBadge: Partial<Record<ModuleCardVariant, string>> = {
  featured: "Featured",
  beta: "Beta",
  "coming-soon": "Coming soon",
};

function tagClassName(tone: ModuleTagTone = "default") {
  return tone === "default" ? "module-tag" : `module-tag ${tone}`;
}

function DefaultModuleIcon() {
  return (
    <span className="module-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <title>Module</title>
        <path d="M4 7h16M4 12h12M4 17h8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function ModuleTags({ tags }: { tags?: ModuleTag[] }) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="module-meta">
      {tags.map((tag) => (
        <span className={tagClassName(tag.tone)} key={`${tag.label}-${tag.tone ?? "default"}`}>
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export function ModuleCard({
  name,
  title,
  description,
  version,
  badge,
  variant = "default",
  icon,
  tags,
  footer,
}: ModuleCardProps) {
  const resolvedBadge = badge ?? variantBadge[variant];
  const className = variant === "default" ? "module-card" : `module-card ${variant}`;

  return (
    <article className={className}>
      {resolvedBadge ? <span className="module-badge">{resolvedBadge}</span> : null}
      <div className="module-head">
        {icon ?? <DefaultModuleIcon />}
        <div className="module-title-block">
          <span className="module-name">{name}</span>
          {title ? <h3>{title}</h3> : null}
        </div>
        {version ? <span className="module-version">{version}</span> : null}
      </div>
      <p className="module-desc">{description}</p>
      <ModuleTags tags={tags} />
      {footer ? (
        <div className="module-footer">
          <span>{footer.summary}</span>
          {footer.actions?.length ? (
            <span className="module-footer-actions">
              {footer.actions.map((action) => (
                <a href={action.href} key={action.label}>
                  {action.label}
                </a>
              ))}
            </span>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function ModuleCardRow({
  name,
  category,
  description,
  action = "install",
  selected = false,
  tags,
}: ModuleCardRowProps) {
  return (
    <div className={selected ? "module-card-row selected" : "module-card-row"}>
      <DefaultModuleIcon />
      <span className="module-name">{name}</span>
      <span className="module-tag">{category}</span>
      <span className="module-row-desc">{description}</span>
      <ModuleTags tags={tags} />
      <span className="module-row-action">↩ {action}</span>
    </div>
  );
}
