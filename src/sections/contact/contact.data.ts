import type { ContactItem } from "./contact.types";

export const getContactInfo = (t: any): ContactItem[] => [
  {
    label: t.contact.social.whatsapp,
    value: "+51 955222583",
    href: "https://wa.me/51955222583",
  },
  {
    label: t.contact.social.linkedin,
    value: "linkedin.com/in/ginomorenobejarano",
    href: "https://linkedin.com/in/ginomorenobejarano",
  },
  {
    label: t.contact.social.github,
    value: "github.com/GinoAMB",
    href: "https://github.com/GinoAMB",
  },
];