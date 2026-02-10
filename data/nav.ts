export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Speaking", href: "#speaking" },
  { label: "Impact", href: "#impact" },
  { label: "Newsletter", href: "https://www.linkedin.com/in/okeokaro/", external: true },
  { label: "Contact", href: "#booking" },
];
