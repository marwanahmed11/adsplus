export interface DoorItem {
  n: string;
  t: string;
  d: string;
  cta: string;
  href: string;
  clipPath: string;
  tagPosition: { left: string; top: string };
  isRed?: boolean;
}

export const DOORS_DATA: DoorItem[] = [
  {
    n: "01+",
    t: "Marketing consultancy",
    d: "Where every project starts: analysis, audits, positioning, opportunity identification and planning.",
    cta: "Start a project",
    href: "/contact",
    isRed: true,
    clipPath: "polygon(51.2% 10.0%, 51.2% 15.3%, 49.2% 19.7%, 33.7% 22.2%, 30.3% 21.1%, 24.7% 12.7%, 49.3% 7.2%)",
    tagPosition: { left: "38.9%", top: "14.2%" }
  },
  {
    n: "02+",
    t: "Performance marketing",
    d: "Paid ads, lead generation, targeting and optimization.",
    cta: "Explore the service",
    href: "/services",
    clipPath: "polygon(99.7% 26.6%, 84.7% 33.6%, 74.8% 29.4%, 74.7% 22.5%, 82.8% 13.2%, 99.7% 19.7%)",
    tagPosition: { left: "86.9%", top: "23.5%" }
  },
  {
    n: "03+",
    t: "Campaign management",
    d: "Planning, coordination, execution and monitoring.",
    cta: "Explore the service",
    href: "/services",
    clipPath: "polygon(90.6% 42.3%, 100.0% 41.2%, 100.0% 55.5%, 89.7% 54.7%)",
    tagPosition: { left: "94.9%", top: "48.4%" }
  },
  {
    n: "04+",
    t: "Media production",
    d: "Photography, videography, visual content and campaign assets.",
    cta: "Explore the service",
    href: "/services",
    clipPath: "polygon(99.7% 78.6%, 88.2% 86.9%, 84.8% 84.9%, 73.1% 72.4%, 81.3% 67.6%, 93.3% 67.6%, 99.7% 70.2%)",
    tagPosition: { left: "88.0%", top: "75.9%" }
  },
  {
    n: "05+",
    t: "Social media management",
    d: "Content strategy, editorial planning, social presence and community.",
    cta: "Explore the service",
    href: "/services",
    clipPath: "polygon(59.8% 93.1%, 33.6% 89.4%, 40.5% 72.9%, 48.5% 74.3%, 58.4% 79.7%, 60.7% 89.6%)",
    tagPosition: { left: "47.5%", top: "84.1%" }
  },
  {
    n: "06+",
    t: "Events & activations",
    d: "Launches, experiences, sales events and physical activations.",
    cta: "Explore the service",
    href: "/services",
    clipPath: "polygon(27.9% 67.0%, 11.1% 78.2%, 0.3% 67.5%, 0.3% 61.5%, 18.4% 57.3%)",
    tagPosition: { left: "12.2%", top: "67.1%" }
  },
  {
    n: "07+",
    t: "PR & communications",
    d: "Media relations, brand communication and strategic communications.",
    cta: "Explore the service",
    href: "/services",
    clipPath: "polygon(24.6% 35.4%, 19.4% 42.8%, 11.8% 45.4%, 0.3% 44.4%, 0.3% 34.3%, 5.1% 26.6%, 9.7% 27.8%)",
    tagPosition: { left: "10.4%", top: "36.9%" }
  }
];
