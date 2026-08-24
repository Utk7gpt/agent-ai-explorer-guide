import { useMemo, useState } from "react";

interface AgentLogoProps {
  name: string;
  website: string;
  /** Optional explicit logo URL, tried before domain-derived sources. */
  logo?: string;
  className?: string;
  size?: number;
}

const domainOf = (website: string) => {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  }
};

/**
 * Renders a real brand logo for an AI agent, derived from its own domain.
 * Falls back through several public icon sources, then to a lettermark.
 */
export const AgentLogo = ({ name, website, logo, className = "w-12 h-12", size = 128 }: AgentLogoProps) => {
  const sources = useMemo(() => {
    const domain = domainOf(website);
    return [
      logo,
      `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`,
      `https://icons.duckduckgo.com/ip3/${domain}.ico`,
      `https://${domain}/favicon.ico`,
    ].filter(Boolean) as string[];
  }, [logo, website, size]);

  const [index, setIndex] = useState(0);

  if (index >= sources.length) {
    return (
      <div
        className={`${className} flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white`}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={sources[index]}
      alt={`${name} logo`}
      loading="lazy"
      className={`${className} object-contain`}
      onError={() => setIndex((i) => i + 1)}
    />
  );
};
