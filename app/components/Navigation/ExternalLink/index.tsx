import React from "react";

interface Props {
  href: string;
}

export const SafeExternalLink: React.FC<Props> = ({ href, children }) => (
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    style={{ textDecoration: "none" }}
  >
    {children}
  </a>
);
