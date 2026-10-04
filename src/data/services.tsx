import React from 'react';

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  ctaText?: string;
  renderIcon: () => React.ReactNode;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01+",
    title: "Marketing consultancy",
    description: "Analysis, audits, positioning, opportunity identification and planning.",
    isFeatured: true,
    ctaText: "Start a project",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="f" cx="21" cy="21" r="12.5" />
        <circle className="i" cx="21" cy="21" r="12.5" pathLength="1" />
        <path className="i" d="M30.5 30.5L40 40" pathLength="1" />
        <path className="a" d="M21 15.5v11M15.5 21h11" pathLength="1" />
      </svg>
    )
  },
  {
    number: "02+",
    title: "Performance marketing",
    description: "Paid ads, lead generation, targeting and optimization.",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect className="f" x="33" y="15" width="7" height="25" rx="1.5" />
        <rect className="i" x="8" y="29" width="7" height="11" rx="1.5" pathLength="1" />
        <rect className="i" x="20.5" y="22" width="7" height="18" rx="1.5" pathLength="1" />
        <rect className="i" x="33" y="15" width="7" height="25" rx="1.5" pathLength="1" />
        <path className="a" d="M7 21l9-7 7 4.5L37 7.5M31.5 7h6v6" pathLength="1" />
      </svg>
    )
  },
  {
    number: "03+",
    title: "Campaign management",
    description: "Planning, coordination, execution and monitoring.",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="f" cx="21" cy="27" r="7.5" />
        <circle className="i" cx="21" cy="27" r="14" pathLength="1" />
        <circle className="i" cx="21" cy="27" r="7.5" pathLength="1" />
        <circle className="dot" cx="21" cy="27" r="2.4" />
        <path className="a" d="M21 27L39 9M33 8.5h6.5V15" pathLength="1" />
      </svg>
    )
  },
  {
    number: "04+",
    title: "Media production",
    description: "Photography, videography, visual content and campaign assets.",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="f" cx="24" cy="27.5" r="7.5" />
        <rect className="i" x="5" y="15" width="38" height="25" rx="5" pathLength="1" />
        <path className="i" d="M16.5 15l3-5.5h9l3 5.5" pathLength="1" />
        <circle className="a" cx="24" cy="27.5" r="7.5" pathLength="1" />
        <circle className="dot" cx="36.5" cy="21" r="1.6" />
      </svg>
    )
  },
  {
    number: "05+",
    title: "Social media management",
    description: "Content strategy, editorial planning, social presence and community.",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path className="f" d="M9 9h30a3.5 3.5 0 0 1 3.5 3.5v17A3.5 3.5 0 0 1 39 33H21l-8.5 7v-7H9a3.5 3.5 0 0 1-3.5-3.5v-17A3.5 3.5 0 0 1 9 9z" />
        <path className="i" d="M9 9h30a3.5 3.5 0 0 1 3.5 3.5v17A3.5 3.5 0 0 1 39 33H21l-8.5 7v-7H9a3.5 3.5 0 0 1-3.5-3.5v-17A3.5 3.5 0 0 1 9 9z" pathLength="1" />
        <circle className="dot d1" cx="16" cy="21" r="2.3" />
        <circle className="dot d2" cx="24" cy="21" r="2.3" />
        <circle className="dot d3" cx="32" cy="21" r="2.3" />
      </svg>
    )
  },
  {
    number: "06+",
    title: "Events & activations",
    description: "Launches, experiences, sales events and physical activations.",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="f" cx="24" cy="24" r="9" />
        <path className="i" d="M24 4.5v7M24 36.5v7M4.5 24h7M36.5 24h7M10.2 10.2l5 5M32.8 32.8l5 5M37.8 10.2l-5 5M15.2 32.8l-5 5" pathLength="1" />
        <path className="a" d="M24 17.5v13M17.5 24h13" pathLength="1" />
      </svg>
    )
  },
  {
    number: "07+",
    title: "PR & communications",
    description: "Media relations, brand communication and strategic communications.",
    renderIcon: () => (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path className="f" d="M6.5 19.5v9h6.5l15 9v-27l-15 9H6.5z" />
        <path className="i" d="M6.5 19.5v9h6.5l15 9v-27l-15 9H6.5z" pathLength="1" />
        <path className="i" d="M13 28.5l2.5 10h4.5l-2-9" pathLength="1" />
        <path className="a" d="M33.5 18.5a7.5 7.5 0 0 1 0 11M37.5 14a14 14 0 0 1 0 20" pathLength="1" />
      </svg>
    )
  }
];
