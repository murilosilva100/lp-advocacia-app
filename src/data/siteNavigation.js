export const WHATSAPP_CONTACT_URL =
  "https://wa.me/5561999777736?text=Olá! Gostaria de falar com o advogado.";

export const serviceNavigationLinks = [
  { label: "Página principal", path: "/", featured: true },
  { label: "Cível", path: "/advogadocivel", area: "civil" },
  { label: "Criminal", path: "/advogadocriminalista", area: "criminal" },
  { label: "Trabalhista", path: "/advogadotrabalhista", area: "labor" },
];

export const homeServiceLinks = serviceNavigationLinks.filter((link) => link.area);
